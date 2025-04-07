import React from 'react';
import { Container } from 'react-bootstrap';
import '../css/Header.css';

function Header() {
  const flags = [
    'turkey.png', 'deu.png', 'eng.png', 'mexico.png', 
    'china.png', 'italy.png', 'usa.png', 
    'france.png', 'rusia.png', 'iran.png'
  ];

  return (
    <div>
        <Container fluid className='header-container flex-wrap text-center'>
            <div className="d-flex flex-wrap justify-content-center img-container">
             {flags.slice(0,5).map((flag, index) => (
        <img key={index} src={`/images/flags/${flag}`} alt={flag} className="flag-img" />
      ))}
      </div>
        <p className="header-title">World on a Plate</p>
        <div className="d-flex flex-wrap justify-content-center img-container">
            {flags.slice(5).map((flag, index) => (
        <img key={index} src={`/images/flags/${flag}`} alt={flag} className="flag-img"  />
      ))}
      </div>
        </Container>
    </div>
  );
}

export default Header;