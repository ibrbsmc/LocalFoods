import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../css/CountryDishes.css';

function CountryDishes({ dishes }) {
  return (
    <div className="country-dishes-container">
      <Row className="d-flex justify-content-center g-5 mb-5">
        {dishes.map((dish, index) => (
          <Col key={index} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
            <Card className="country-card">
              <Card.Img className="country-img" variant="top" src={dish.image} alt={dish.name} />
              <Card.Body>
                <Card.Title className="country-title">{dish.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CountryDishes;
