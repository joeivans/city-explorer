import React from 'react';
import {Container} from 'react-bootstrap';
import LocationFormComponent from './LocationFormComponent';


export default function SearchFormComponent(props) {
  return (
    <Container>
      <LocationFormComponent resultHandler={props.resultHandler}/>
    </Container>
  );
}
