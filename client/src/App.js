import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import GuestState from './context/guestContext/GuestState';
import AuthState from './context/authContext/AuthState';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoutes from './components/pages/routes/PrivateRoutes';
import setToken from './utils/setToken';

// Check if token is in local storage. Then pass the token as headers to back-end when retrieving data.
if(localStorage.token) {
	setToken(localStorage.token);
}

const App = () => {
  return (
  	<AuthState>
	    <GuestState>
	    	<Router>
		      <div>
		        <Navbar />
		       	<Switch>
		       		<PrivateRoutes exact path="/" component={Home} />
		       		<Route exact path="/register" component={Register} />
		       		<Route exact path="/login" component={Login} />
		       	</Switch>
		      </div>
		    </Router>
	    </GuestState>
    </AuthState>
  );
}

export default App;
