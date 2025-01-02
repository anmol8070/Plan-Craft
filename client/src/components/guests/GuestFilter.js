import React, {useContext} from 'react'
import GuestContext from '../../context/guestContext/guestContext';
import styled from 'styled-components';

const StyledGuestFilter = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin-left:10px;
  }

  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .3s;
    transition: .3s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: -10px;
    bottom: -4px;
    border:1px solid rgb(226, 225, 225);
    background-color: rgb(241, 241, 241);
    -webkit-transition: .4s;
    transition: .4s;
  }


  .lead {
    color:var(--primary-color);
    // margin-bottom: 0.5rem ;
    margin-top:0.5rem
  }

  .toggle{
    display: flex;
    align-items: baseline;
  }
  .toggle p{
    margin-left: 0.7rem
  }
`;


const GuestFilter = () => {
  const {toggleFilter} = useContext(GuestContext);

  return (
    <StyledGuestFilter>
      <div className="toggle">
        <label className="switch">
          <input type="checkbox" onChange={() => toggleFilter()} />
          <span className="slider round"></span>
        </label>
        <p className="lead" style={{fontSize: '12px'}}>Attending only</p>
      </div>
    </StyledGuestFilter>
  )
}

export default GuestFilter