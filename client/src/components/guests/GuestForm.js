import React, { useState, useContext, useEffect } from 'react';
import GuestContext from '../../context/guestContext/guestContext';

const GuestForm = () => {
  const { addGuest, edit, updateGuest, clearEdit } = useContext(GuestContext);

  // initial state
  const [guest, setGuest] = useState({
    name: '',
    phone: '',
    dietary: 'Non-Veg'
  })

  // Destructure guest state
  const { name, phone, dietary } = guest;

  useEffect(() => {
    if(edit !== null) {
      setGuest(edit)
    }
    else {
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg',
      })
    }

  }, [edit])


  const handleChange = (e) => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (edit === null) {
      addGuest(guest);

    } 
    else {
      updateGuest(guest)
      clearEdit()
    }
    setGuest({
      name: '',
      phone: '',
      dietary: 'Non-Veg',
    })
  }

  return (
    <div className="invite-section">
      <h1>{edit !== null ? 'Edit Guest' : 'Invite Guest'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
        <input type="text" placeholder="Phone" name="phone" value={phone} required pattern="[0-9\s-]+" onChange={handleChange}/>
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">Non-veg
        <input type="radio" name="dietary" value='Non-Veg' checked={dietary === 'Non-Veg'} onChange={handleChange}/>
            <span className="checkmark"></span>
          </label>
          <label className="container">Vegan
        <input type="radio" name="dietary" value='Vegan' checked={dietary === 'Vegan'} onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
          <label className="container">Pascatarian
        <input type="radio" name="dietary" value='Pesacatarian' checked={dietary === 'Pesacatarian'} onChange={handleChange} />
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value={edit !== null ? 'Update Guest' : 'Add Guest'} className="btn" />
        { edit !== null ? <input onClick={clearEdit} value="Cancel" type="button" className="btn clear" /> : null }
      </form>
    </div>
  )
}

export default GuestForm