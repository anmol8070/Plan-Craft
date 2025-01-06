const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Model
const User = require('../models/User');

router.
	post('/',
	[
		check('name', 'Please provide a name').not().isEmpty(),
		check('email', 'Please provide a valid email').isEmail(),
		check('password', 'Please provide a password of at least 6 characters').isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);
		if(!errors.isEmpty()) {
			return res.status(400).json({error: errors.array()})
		}

		const { name, email, password} = req.body

		try {
			let user = await User.findOne({ email })
			// User already exists in database
			if(user) {
				return res.status(400).json({ msg: 'user already exists' })
			}
			// Create a new User
			else {
				user = new User({
					name,
					email,
					password
				})
				// Hash the password
				const salt = await bcrypt.genSalt(10)
				user.password = await bcrypt.hash(password, salt);
				// save the new User to database
				await user.save();

				// JSON web token
				const payload = {
					user: {
						id: user.id
					}
				}
				jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
					if(err) throw err
					// Send the signed token back
					res.send({ token })
				})
			}
		}
		catch(err) {
			console.err(err.message);
			res.status(500).send('Server Error');
		}
	});

module.exports = router;