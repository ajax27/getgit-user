import React from 'react';

const NotFound = () => {
  return (
    <div style={{ background: '#eee' }} className="container">
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h1 
          style={{ color: '#054dac', paddingBottom: '30px', fontSize: '4rem' }}>
          Page Not Found :=(
        </h1>
        <p 
          style={{ color: '#dd2424', fontFamily: 'cursive', fontSize: '3rem', fontWeight: 'lighter', letterSpacing: '2px' }} 
          className="lead">The page you are looking for does not exist!</p>
      </div>
      <img src="https://res.cloudinary.com/ajax27/image/upload/v1597136195/ajax27__Initial03_1_kvacue.png" alt="Logo" />
    </div>
  )
};

export default NotFound;
