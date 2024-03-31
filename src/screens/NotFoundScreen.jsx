import React from 'react';

const NotFoundScreen = () => {
  return (
    <div className="container-fluid" style={styles.container}>
      <div className="row justify-content-center align-items-center" style={styles.content}>
        <div className="col-md-6">
          <h1 style={styles.heading}>404 Not Found</h1>
          <p style={styles.paragraph}>The page you're looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
  },
  content: {
    minHeight: '80vh',
  },
  heading: {
    fontSize: '36px', 
    color: '#333', 
    textAlign: 'center', 
  },
  paragraph: {
    fontSize: '18px', 
    color: '#666', //
    textAlign: 'center', 
  },
};

export default NotFoundScreen;
