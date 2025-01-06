const router = require('express').Router();
const Guest = require('../models/Guest');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

// @desc   GET all guests where the user matches user id (event planner)
// @path   /guests
router.get('/', auth, async (req, res) => {
	try {
		const guests = await Guest.find({ user: req.user.id });
		res.json(guests);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @desc   POST create a new guest
// @path   /guests
router.post(
	'/',
	auth,
	[
		check('name', 'Please provide name').not().isEmpty(),
		check('phone', 'Please provide phone').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, phone, dietary, isConfirmed } = req.body;

		try {
			const newGuest = new Guest({
				user: req.user.id,
				name,
				phone,
				dietary,
				isConfirmed,
			});
			const guest = await newGuest.save();
			res.json(guest);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

// @desc   DELETE guest
// @path   /guests/:id
router.delete('/:id', auth, async (req, res) => {
	try {
		let guest = await Guest.findById(req.params.id);
		if (!guest) {
			return res.status(404).json({ msg: 'Guest not found' });
		}
		// Guest exists; delete
		await Guest.findByIdAndRemove(req.params.id);
		res.json({ msg: 'Guest removed successfully' });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// @desc   UPDATE guest
// @path   /guests/:id
router.put('/:id', auth, async (req, res) => {
	const { name, phone, dietary, isConfirmed } = req.body;
	const updatedGuest = { name, phone, dietary, isConfirmed };

	try {
		// Check for existing guest
		let guest = await Guest.findById(req.params.id);
		if (!guest) {
			return res.status(404).json({ msg: 'Guest not found' });
		}
		// Update the guest
		guest = await Guest.findByIdAndUpdate(req.params.id, { $set: updatedGuest }, { new: true });
		res.json(guest);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
