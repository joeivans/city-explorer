import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';


export default function LocationForm(props) {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>Let's explore a city!</Form.Label>
          <Form.Control type="text" placeholder="Enter a city"/>
          <Form.Text className="text-muted">
            What city do you want to search for?
          </Form.Text>
        </Form.Group>

        <Button onClick={props.exploreButtonClickHandler} variant="primary">
          Explore!
        </Button>
      </Form>
    </Container>
  );
}
