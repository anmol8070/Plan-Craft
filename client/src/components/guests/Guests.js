import React, { useContext, useEffect } from 'react'
import Guest from './Guest'
import GuestContext from '../../context/guestContext/guestContext';
import AuthContext from '../../context/authContext/authContext';

const Guests = () => {
	const { guests, filterGuest, search, getGuests } = useContext(GuestContext);
	const { loading } = useContext(AuthContext);

	useEffect(() => {
		getGuests()
		// es-lint-disable-next-line
	}, [])

	if(guests.length <= 0) {
		return <h3 style={{textAlign: 'center', padding: '5rem'}}>{loading ? 'Loading Guests...' : 'Please add a Guest...'}</h3>
	}

	return (
		<div className="guests">
			{ search!== null ? search.map(guest => <Guest key={guest._id} guest={guest} />) :
				guests.filter(guest => !filterGuest || guest.isConfirmed).map(guest => <Guest key={guest._id} guest={guest} />) 
			}
		</div>
	)
}
export default Guests