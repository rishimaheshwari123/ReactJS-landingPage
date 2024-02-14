import React, { useState, useEffect } from 'react';
import "../App.css"

const Form = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let timer;
    if (!showForm) {
      timer = setTimeout(() => {
        setShowForm(true);
      }, 15000); // Show form after 15 seconds
    }

    return () => clearTimeout(timer);
  }, [showForm]);

  const handleCloseForm = () => {
    setShowForm(false); // Set showForm to false when closing the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(e.target);
    const phoneNumber = formData.get('phoneNumber');
    const email = formData.get('email');
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
  };

  return (
    <div className="App">
      {showForm && (
        <div className="form-container">
          <div className='Form_Heading'>
            <i className="fa-solid fa-xmark" onClick={handleCloseForm}></i>
            <h1>Hurry Up!</h1>
            <p>Time is running out. Grab your spot now!</p>
          </div>
          <form className='Form_Details' onSubmit={handleSubmit}>
            <input type="tel" id="phoneNumber" name="phoneNumber" required placeholder='Phone Number' />
            <input type="email" id="email" name="email" required  placeholder='Email'/>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
