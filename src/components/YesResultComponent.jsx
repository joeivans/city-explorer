import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';


export default function YesResultComponent(props) {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title
          className="text-secondary fs-4">{props.result.name && props.result.name || 'This One Has No Name!'}</Card.Title>
        <Row>
          <Col className="text-end text-success">
            <Card.Text>Lat: {props.result.latitude && props.result.latitude}</Card.Text>
          </Col>
          <Col className="text-start text-success">
            <Card.Text>Long: {props.result.longitude && props.result.longitude}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

}
