import React, { useState, useEffect } from 'react';
import RecitersList from '../components/RecitersList';
import ChaptersList from '../components/ChaptersList';
import Player from '../components/Player';

const BookMarkedScreen = ({ darkMode }) => {
  const [reciters, setReciters] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [selectedReciter, setSelectedReciter] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    const fetchRecitersData = async () => {
      const storedReciters = JSON.parse(localStorage.getItem('bookmarkedReciters')) || [];
      setReciters(storedReciters);
    };

    const fetchChaptersData = async () => {
      const storedChapters = JSON.parse(localStorage.getItem('bookmarkedChapters')) || [];
      setChapters(storedChapters);
    };

    fetchRecitersData();
    fetchChaptersData();
  }, []);

  return (
    <div className="container-fluid main-cont" style={{ padding:'20px 0'}}>
      {reciters.length === 0 && chapters.length === 0 ? (
        <h2 className='text-center'>No Bookmarks Found</h2>
      ) : (
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <RecitersList
              darkMode={darkMode}
              reciters={reciters}
              selectedReciter={selectedReciter}
              onSelectReciter={setSelectedReciter}
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <ChaptersList
              chapters={chapters}
              selectedChapter={selectedChapter}
              onSelectChapter={setSelectedChapter}
            />
          </div>
          <div className="col-lg-4">
            <Player reciter={selectedReciter} chapter={selectedChapter} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookMarkedScreen;
