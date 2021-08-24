import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import HttpClient from './HttpClient';


export default class LocationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchCity: '',
    };
  }

  exploreButtonClickHandler = async () => {
    // https://us1.locationiq.com/v1/search.php?key=pk.db29a490c914c2aa15fc9f0fe63e5fab;&appid=city-explorer&q=seattle&format=json
    const queryString = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&appid=city-explorer&q=${this.state.searchCity}&format=json`;
    console.log(queryString);
    const response = await new HttpClient().getAsync(queryString);
    console.log(response);
  };

  render() {

    return (
      <Container className="w-25">
        <Form>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>Let's explore a city!</Form.Label>
            <Form.Control onChange={this.updateSearchCity} type="text" placeholder="Enter a city"/>
            <Form.Text className="text-muted">
              What city do you want to search for?
            </Form.Text>
          </Form.Group>

          <Button onClick={this.exploreButtonClickHandler} variant="primary">
            Explore!
          </Button>
        </Form>
      </Container>
    );
  }

  updateSearchCity = (event) => {
    if (event.target.value)
      this.setState({
        searchCity: event.target.value
      });
  };
}
