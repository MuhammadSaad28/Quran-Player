import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const QuranReader = () => {
  const [quranData, setQuranData] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [fontSize, setFontSize] = useState(16); // Initial font size

  useEffect(() => {
    const fetchQuranData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/risan/quran-json/main/dist/quran.json');
        setQuranData(response.data);
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };

    fetchQuranData();
  }, []);

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 1);
  };

  const decreaseFontSize = () => {
    if (fontSize > 1) {
      setFontSize((prevFontSize) => prevFontSize - 1);
    }
  };

  return (
    <div className="container-fluid text-right" style={{ maxwidth:'100vw !important'}}>
      <div className="d-flex justify-content-between mb-3 mt-1">
        <button className="btn me-2" style={{ backgroundColor: '#5c6ac4', color: '#fff' }} onClick={increaseFontSize}>Increase Font Size</button>
        <button className="btn" style={{ backgroundColor: '#5c6ac4', color: '#fff' }} onClick={decreaseFontSize}>Decrease Font Size</button>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          {selectedChapter ? (
            <>
              <h2 style={{ direction: 'rtl', textAlign: 'center' }}>السورة {selectedChapter.name}</h2>
              <div style={{ maxHeight: '62vh', overflowY: 'auto', paddingRight: '15px', direction: 'rtl', fontSize: `${fontSize}px` }}>
                {selectedChapter.verses.map((verse) => (
                  <p key={verse.id} style={{ direction: 'rtl', textAlign: 'right' }} >
                    <span style={{ display: 'inline-block', minWidth: '20px', textAlign: 'center', fontWeight: 'bold' }}>{verse.id})</span> {verse.text}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '70vh' }}>
              <h2 style={{ textAlign: 'center' }}>Select A Chapter To Read</h2>
            </div>
          )}
        </div>

        <div className="col-lg-4">
          <h1 className='text-center'>السورة</h1>
          <ul className="list-unstyled" style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '15px', direction: 'rtl', fontSize: `${fontSize}px` }}>
            {quranData ? quranData.map((chapter) => (
              <li key={chapter.id} onClick={() => handleChapterClick(chapter)} style={{ cursor: 'pointer', color: selectedChapter && selectedChapter.id === chapter.id ? 'red' : 'inherit' }}>
                <p>{chapter.id}) {chapter.name}</p>
              </li>
            ))
              : <Spinner />}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuranReader;
