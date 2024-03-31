import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ reciter, chapter, fontSize }) => {
  const audioLink = (reciter, number) => `${reciter}/${('00' + number).slice(-3)}.mp3`;

  return (
    <div className="container" style={{ paddingLeft: '20px', overflowY: 'auto', height: '100%' }}>
      {reciter && chapter ? (
        <>
          <div className="mb-4 mt-4" style={{ fontSize }}>
            <strong>Chapter No. :</strong> {chapter.id}
            <br />
            <strong>Reciter:</strong> {reciter.name}
            <br />
            <strong>Chapter in Arabic:</strong> {chapter.name_arabic}
            <br />
            <strong>Chapter in English:</strong> {chapter.name_complex}
            <br />
            <strong>Verses Count:</strong> {chapter.verses_count}
            <br />
            <strong>Revelation Place:</strong> {chapter.revelation_place}
            <br />
            <strong>Revelation Order:</strong> {chapter.revelation_order}
          </div>
          <div className="mb-4">
            <ReactPlayer
              url={audioLink(reciter.Server, chapter.id)}
              controls={true}
              playing={true}
              width='100%'
              height='60px'
            />
          </div>
          <div className="mb-4">
            <p style={{ fontSize }}>
              If Audio is not playing, please select a different reciter or qari (it may not be available in the voice of that reciter or qari).
            </p>
          </div>
        </>
      ) : (
        <div className='d-flex justify-content-center align-items-center inf' style={{ height: '70vh' }}>
          <h2 style={{ color: '#5c6ac4', textAlign: 'center' }}>Select Reciter and Chapter to play</h2>
        </div>
      )}
    </div>
  );
};

export default Player;
