import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, darkMode, onToggleDarkMode }) => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-2" style={{ backgroundColor: '#5c6ac4' }}>
      <div className="d-flex align-items-center">
        <Link to="/" style={{textDecoration: 'none' , color: 'white'}} className='fs-3'>🕋 {title}</Link>
      </div>
      <div className='d-flex justify-content-center align-items-center mt-3 mt-md-0 gap-4'>
        <Link to="/" style={{textDecoration: 'none' , color: 'white'}} className='fs-4'>Listen Quran</Link>
        <Link to="/bookmarks" style={{textDecoration: 'none' , color: 'white'}} className='fs-4'>Bookmarks</Link>
        <Link to="/read" style={{textDecoration: 'none' , color: 'white'}} className='fs-4'>Read Quran</Link>
        <button
          className="btn fs-3"
          style={{ cursor: 'pointer', backgroundColor: 'transparent', border: 'none', color: 'white'}}
          onClick={onToggleDarkMode}
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </div>
  );
};

export default Header;
