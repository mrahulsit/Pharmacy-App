import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className="banner">
      <Container fluid>
        <img 
          src="https://t4.ftcdn.net/jpg/05/77/84/27/360_F_577842756_DWiS65lNLDG5DPaozrJk3c9TgkGGBwCb.jpg" 
          alt="Banner" 
          className="img-fluid w-100"
        />
      </Container>
    </div>
  );
};

export default Banner;
