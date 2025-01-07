const jwt = require('jsonwebtoken');


// Middleware for "auth-token" used for PROTECT ROUTES
// A valid User passes a non-expired token into header "auth-token" which gets decoded and authorizes access
const auth = (req, res, next) => {
	const token = req.header('auth-token');
	if(!token) {
		return res.status(401).json({ msg: 'No Token. Access Denied' });
	}
	// Token exists
	try {
		const decoded = jwt.verify(token, process.env.SECRET);
		req.user = decoded.user;
		next();
	}
	catch(err) {
		res.status(401).json({ msg: 'Invalid token' });
	}

}

module.exports = auth;