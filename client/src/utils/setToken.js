import axios from 'axios';

// Remove headers if there are no tokens
const setToken = (token) => {
	if(token) {
		axios.defaults.headers.common['auth-token'] = token
	}
	else {
		delete axios.defaults.headers.common['auth-token']
	}
}

export default setToken;