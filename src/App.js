// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import BookMarkedScreen from './screens/BookMarkedScreen';
import Header from './components/Header';
import QuranReader from './screens/QuranReader';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  useEffect(() => {
    const darkModeData = JSON.parse(localStorage.getItem('darkMode'));
    setDarkMode(darkModeData);
  }, []);

  return (
    <Router>
      <div className='main-cont' style={{ backgroundColor: darkMode ? '#222' : '#eae3f7', color: darkMode ? '#fff' : '#333', minHeight: '100vh' , width:'100vw'}}>
        <Header title="QURAN PLAYER" darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        <div className="row">
          <div className="col-12">
            <Routes>
              <Route exact path="/" element={<HomeScreen darkMode={darkMode} />} />
              <Route exact path="/bookmarks" element={<BookMarkedScreen darkMode={darkMode} />} />
              <Route exact path="/read" element={<QuranReader />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
