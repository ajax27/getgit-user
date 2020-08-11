import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter Username', 'warning');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input 
          type="text" 
          name="text" 
          value={text} 
          onChange={onChange}
          placeholder="Search Users..." />
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-dark btn-block" />
      </form>
      {showClear && (
        <button className="btn btn-block btn-light" onClick={clearUsers}>Clear</button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;