import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';


export default function YesResultComponent(props) {
  return (
    <Card className="text-center" style={{width: '50%'}}>
      <Card.Img src={props.result.mapUri}/>
      <Card.Body>
        <Card.Title
          className="text-secondary fs-4">{props.result && props.result.name || 'This One Has No Name!'}</Card.Title>
        <Row>
          <Col className="text-start text-success">
            <Card.Text style={{marginBottom: 0}}>Lat: {props.result && props.result.latitude || 'N/A'}</Card.Text>
            <Card.Text style={{marginTop: 0}}>Long: {props.result && props.result.longitude || 'N/A'}</Card.Text>
          </Col>
          {/*<Col className="text-start text-success">*/}
          {/*</Col>*/}
        </Row>
      </Card.Body>
    </Card>
  );
}
