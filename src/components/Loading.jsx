import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../css/Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p>Loading please wait ...</p>
    </div>
  );
}

export default Loading;
