import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div className="container" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h1>About This Application</h1>
        <h3>App to search for Github Users</h3>
        <p>Version 1.0.0</p>
        <p>Built with React using Context and React Hooks</p>
        <div className="card" style={{ background: '#eee' }}>
          <h2>Welcome to GetGit User</h2>
          <img 
            src="https://res.cloudinary.com/ajax27/image/upload/v1555947082/ajax27me_aqtdse.png" 
            alt="Shaun Collins" 
            className="round-img"
            style={{ width: '130px' }} />
            <p>Shaun Collins</p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
