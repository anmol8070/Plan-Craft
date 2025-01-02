export default (state, action) => {
	switch(action.type) {
		case 'SUCCESS_REGISTER':
			// Set token received from server to local storage
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				userAuth: true,
				errors: null
			}
		case 'SUCCESS_LOGIN':
			// Set token received from server to local storage
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				userAuth: true,
				errors: null,
			}
		case 'FAIL_LOGIN':
			return {
				...state,
				userAuth: null,
				errors: action.payload
			}
		case 'LOGOUT':
			localStorage.removeItem('token');
			return {
				...state,
				userAuth: null,
				loading: true,
			}
		case 'FAIL_REGISTER':
			return {
				...state,
				userAuth: null,
				errors: action.payload
			}
		case 'SET_ERROR':
			return {
				...state,
				errors: action.payload
			}
		case 'CLEAR_ERROR':
			return {
				...state,
				errors: null
			}
		case 'SET_USER':
			return {
				...state,
				user: action.payload,
				userAuth: true,
				loading: false,
				errors: null
			}
		case ' AUTH_ERROR':
			localStorage.removeItem('token');
			return {
				...state,
				userAuth: null,
				errors: action.payload
			}
		default:
			return state
	}
}