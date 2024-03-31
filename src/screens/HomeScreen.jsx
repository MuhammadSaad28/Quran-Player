import React, { useState, useEffect } from 'react';
import RecitersList from '../components/RecitersList';
import ChaptersList from '../components/ChaptersList';
import Player from '../components/Player';
import { fetchReciters, fetchChapters } from '../api';

const HomeScreen = ({ darkMode }) => {
  const [reciters, setReciters] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const fetchRecitersData = async () => {
      const data = await fetchReciters();
      setReciters(data);
    };

    const fetchChaptersData = async () => {
      const data = await fetchChapters();
      setChapters(data);
    };

    fetchRecitersData();
    fetchChaptersData();
  }, []);

  const increaseFontSize = () => {
    setFontSize(prevFontSize => prevFontSize + 2); // Increase font size by 2
  };

  const decreaseFontSize = () => {
    setFontSize(prevFontSize => prevFontSize - 2); // Decrease font size by 2
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <RecitersList darkMode={darkMode} reciters={reciters} selectedReciter={selectedReciter} onSelectReciter={setSelectedReciter} fontSize={fontSize} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ChaptersList chapters={chapters} selectedChapter={selectedChapter} onSelectChapter={setSelectedChapter} fontSize={fontSize} />
        </div>
        <div className="col-lg-4 col-md-12">
          <div className='d-flex flex-column'>
            <div className='d-flex gap-5'>
              <button className="btn" style={{ backgroundColor: '#5c6ac4', color: '#fff' }} onClick={increaseFontSize}>Increase Font Size</button>
              <button className="btn" style={{ backgroundColor: '#5c6ac4', color: '#fff' }} onClick={decreaseFontSize}>Decrease Font Size</button>
            </div>
            <Player reciter={selectedReciter} chapter={selectedChapter} fontSize={fontSize} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
