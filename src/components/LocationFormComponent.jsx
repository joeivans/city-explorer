import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import SearchResult from '../models/SearchResult';
import SearchResults from '../models/SearchResults';
import getAsync from '../utilities/HttpClient';


export default class LocationFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawSearchString: '',
    };
  }

  searchFormSubmitHandler = async (event) => {
    event.preventDefault();

    const BASE_URL = process.env.REACT_APP_LOCATIONIQ_BASE_URL;
    const FORMAT = 'json';
    const {rawSearchString: QUERY} = this.state; // <-- const QUERY = this.state.rawSearchString;

    const response = await getAsync(
      BASE_URL,
      [
        ['key', process.env.REACT_APP_LOCATIONIQ_API_KEY],
        ['appid', process.env.REACT_APP_LOCATIONIQ_APP_ID],
        ['q', QUERY],
        ['format', FORMAT],
        ['addressdetails', 1],
      ]);

    this.props.resultHandler(this.transformResponse(response));
  };

  transformResponse = (response) =>
    new SearchResults(response.content.map(
      result => new SearchResult()
        .addId(result.place_id)
        .addLatitude(result.lat)
        .addLongitude(result.lon)
        .addName(result.display_name)
        .addHouseNumber(result.address.house_number)
        .addRoad(result.address.road)
        .addNeighborhood(result.address.neighbourhood)
        .addSuburb(result.address.suburb)
        .addIsland(result.address.island)
        .addCity(result.address.city)
        .addCounty(result.address.county)
        .addState(result.address.state)
        .addStateCode(result.address.state_code)
        .addPostalCode(result.address.postcode)
        .addCountry(result.address.country)
        .addCountryCode(result.address.country_code)
    ));

  render() {
    return (
      <Container className="p-2 w-75">
        <Form onSubmit={this.searchFormSubmitHandler}
              className="input-group input-group-lg">
          <span className="input-group-text">City: </span>
          <input onChange={this.searchStringChangeHandler}
                 type="text"
                 className="form-control"
                 placeholder="Search"
                 aria-label="City"
                 aria-describedby="city-search-input"
                 required/>
          <Button type="submit"
                  variant="primary">
            Explore!
          </Button>
        </Form>
      </Container>
    );
  }

  searchStringChangeHandler = (event) => {
    if (event.target.value)
      this.setState({
        rawSearchString: event.target.value
      });
  };
}
