const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
// const passport = require('passport');

// User Model
const User = require('../models/User');

// Protected routes
router.get('/', auth, async (req, res) => {
	try {
		// Send the user info back to client without the password
		const user = await User.findById(req.user.id).select("-password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// Auth with email
router.post(
	'/',
	[
		check('email', 'Please provide a valid email').isEmail(),
		check('password', 'Please provide a password of at least 6 characters').exists()
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ error: errors.array() });
		}

		const { email, password } = req.body;

		try {
			let user = await User.findOne({ email });

			// User Login
			if (!user) {
				return res.status(400).json({ msg: 'Invalid Credentials' });
			}

			// Check if the password matches
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				return res.status(400).json({ msg: 'Password is Invalid' });
			}

			// Generate JSON Web Token
			const payload = {
				user: {
					id: user.id
				}
			};

			jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 }, (err, token) => {
				if (err) throw err;
				res.send({ token }); // Send the signed token
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// Google Auth (commented out)
// @path GET /auth/google
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google Auth Callback (commented out)
// @route GET /auth/google/callback
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
// 	res.redirect('http://localhost:3000/');
// });

module.exports = router;
