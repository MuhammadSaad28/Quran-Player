import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const ChaptersList = ({ chapters, onSelectChapter, selectedChapter, darkMode, fontSize }) => {
  const [searchText, setSearchText] = useState('');
  const [bookmarkedChapters, setBookmarkedChapters] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedChapters')) || [];
    setBookmarkedChapters(storedBookmarks);
  }, []);

  const toggleBookmark = (chapter) => {
    const index = bookmarkedChapters.findIndex((c) => c.id === chapter.id);
    if (index === -1) {
      const updatedBookmarks = [...bookmarkedChapters, chapter];
      setBookmarkedChapters(updatedBookmarks);
      localStorage.setItem('bookmarkedChapters', JSON.stringify(updatedBookmarks));
    } else {
      const updatedBookmarks = bookmarkedChapters.filter((c) => c.id !== chapter.id);
      setBookmarkedChapters(updatedBookmarks);
      localStorage.setItem('bookmarkedChapters', JSON.stringify(updatedBookmarks));
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredChapters = chapters.filter((chapter) =>
    chapter.name_simple.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container-fluid" style={{ paddingRight: '10px', paddingLeft: '10px', width: '400px' }}>
      <h2 style={{ color: '#5c6ac4' }} className='d-flex'>
        Chapters
        <input
          type="text"
          className="form-control form-control-sm ms-2"
          placeholder="Search Chapter Name"
          value={searchText}
          onChange={handleInputChange}
          style={{ width: '50%' , height: '30px', fontSize: '14px', borderRadius: '5px', marginTop: '5px'}}
        />
      </h2>
      <ul className="list-unstyled recites" style={{ overflowY: 'auto', maxHeight: '70vh' }}>
        {filteredChapters.map((chapter) => (
          <li
            key={chapter.id}
            onClick={() => onSelectChapter(chapter)}
            className={`cursor-pointer py-2 border-bottom ${selectedChapter && selectedChapter.id === chapter.id ? 'text-danger' : ''}`}
            style={{
              borderBottom: darkMode ? '1px solid #eee' : '1px solid #ccc',
              color: selectedChapter && selectedChapter.id === chapter.id ? '#ff0000' : '',
              cursor: 'pointer',
            }}
          >
            <FaStar
              className="me-2"
              style={{ color: bookmarkedChapters.some((c) => c.id === chapter.id) ? '#ff0000' : '#ccc', cursor: 'pointer', fontSize }}
              onClick={(e) => { e.stopPropagation(); toggleBookmark(chapter); }}
            />
            {chapter.id}) {chapter.name_complex} ({chapter.verses_count})  {chapter.name_arabic}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChaptersList;
