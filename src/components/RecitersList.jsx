import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaStar } from 'react-icons/fa';
import Spinner from './Spinner';

const RecitersList = ({ darkMode, reciters, selectedReciter, onSelectReciter, fontSize }) => {
  const [searchText, setSearchText] = useState('');
  const [bookmarkedReciters, setBookmarkedReciters] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedReciters')) || [];
    setBookmarkedReciters(storedBookmarks);
  }, []);

  const toggleBookmark = (reciter) => {
    const index = bookmarkedReciters.findIndex((r) => r.id === reciter.id);
    if (index === -1) {
      const updatedBookmarks = [...bookmarkedReciters, reciter];
      setBookmarkedReciters(updatedBookmarks);
      localStorage.setItem('bookmarkedReciters', JSON.stringify(updatedBookmarks));
    } else {
      const updatedBookmarks = bookmarkedReciters.filter((r) => r.id !== reciter.id);
      setBookmarkedReciters(updatedBookmarks);
      localStorage.setItem('bookmarkedReciters', JSON.stringify(updatedBookmarks));
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredReciters = reciters.filter((reciter) =>
    reciter.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container-fluid" style={{ paddingRight: '10px', paddingLeft: '10px', width: '400px' }}>
      <h2 style={{ color: '#5c6ac4' }} className='d-flex'>
        Reciters
        <input
          type="text"
          className="form-control form-control-sm ms-2"
          placeholder="Search Reciter Name"
          value={searchText}
          onChange={handleInputChange}
          style={{ width: '50%' , height: '30px', fontSize: '14px', borderRadius: '5px', marginTop: '5px'}}
        />
      </h2>
      {reciters ? (
        <ul className="list-unstyled" style={{ overflowY: 'auto', maxHeight: '370px' }}>
          {filteredReciters.map((reciter) => (
            <li
              key={reciter.id}
              onClick={() => onSelectReciter(reciter)}
              className={`cursor-pointer py-2 border-bottom ${selectedReciter && selectedReciter.id === reciter.id ? 'text-danger' : ''}`}
              style={{
                borderBottom: darkMode ? '1px solid #eee' : '1px solid #ccc',
                color: selectedReciter && selectedReciter.id === reciter.id ? '#ff0000' : '',
                cursor: 'pointer',
              }}
            >
              <FaStar
                className="me-2"
                style={{ color: bookmarkedReciters.some((r) => r.id === reciter.id) ? '#ff0000' : '#ccc', cursor: 'pointer', fontSize }}
                onClick={(e) => { e.stopPropagation(); toggleBookmark(reciter); }}
              />
              <FaUserCircle className='fs-5' /> {reciter.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default RecitersList;
