import React, {useContext, useRef} from 'react';
import GuestContext from '../../context/guestContext/guestContext';
import styled from 'styled-components';

const StyledSearch = styled.div`
	.search{
	  padding: 0.3rem 2rem;
	  border-radius: 20px;
	  border:1px solid #ccc;
	       }
	 .search:focus {
	  outline: none !important;
	 }
	 .search-icon{
	   margin-left:-2rem;
	   display: inline;
	   color:#ccc;
	   z-index: 100;
	 }
`;

const GuestSearch = () => {

	const { searchGuest, clearSearch } = useContext(GuestContext);
	const searchValue = useRef('');

	const handleChange = (e) => {
		e.preventDefault();
		if(searchValue.current.value !== '') {
			searchGuest(e.target.value)
		}
		else {
			clearSearch()
		}
	}
	
  return (
    <StyledSearch>
      <input ref={searchValue} onChange={handleChange} type="text" className="search" placeholder=" Search Guest by name..." />
      <i className="fas fa-search search-icon" />
    </StyledSearch>
  )
}

export default GuestSearch