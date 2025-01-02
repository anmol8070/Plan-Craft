import React, { useContext } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import { Route, Redirect } from 'react-router-dom';

// Handle Private routes
const PrivateRoutes = ({ component : Component, ...rest }) => {

	const { userAuth } = useContext(AuthContext);

	// user is NOT authenticated.
	return (
		<Route 
			{...rest}
			render={ props => !userAuth ? <Redirect to='/login'/> : <Component {...props} /> }
		/>
	);
}

export default PrivateRoutes;