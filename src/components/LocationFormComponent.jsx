import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import LocationSearchResult from '../models/LocationSearchResult';
import LocationSearchResults from '../models/LocationSearchResults';
import MapSearchResult from '../models/MapSearchResult';
import QueryString from '../models/QueryString';
import QueryStringParameter from '../models/QueryStringParameter';
import getAsync from '../utilities/HttpClient';


export default class LocationFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawSearchString: '',
    };
  }

  locationSearchFormSubmitHandler = async event => {
    event.preventDefault();

    this.props.resultHandler(await this.locationSearchResultsFactory());
  };

  async locationSearchResultsFactory() {
    const {
      REACT_APP_LOCATIONIQ_LOCATION_DATA_BASE_URL: BASE_URL,
      REACT_APP_LOCATIONIQ_API_KEY,
      REACT_APP_LOCATIONIQ_APP_ID
    } = process.env;
    const {rawSearchString: QUERY} = this.state; // <-- const QUERY = this.state.rawSearchString;
    const FORMAT = 'json';

    const response = await getAsync(
      new QueryString(BASE_URL)
        .addParameter(new QueryStringParameter('key', REACT_APP_LOCATIONIQ_API_KEY))
        .addParameter(new QueryStringParameter('appid', REACT_APP_LOCATIONIQ_APP_ID))
        .addParameter(new QueryStringParameter('q', QUERY))
        .addParameter(new QueryStringParameter('format', FORMAT))
        .addParameter(new QueryStringParameter('addressdetails', 1))
    );

    return new LocationSearchResults(response.content.map(
      result => {
        return new LocationSearchResult()
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
          .addMapUri(this.mapFactory(result.lat, result.lon).imageUri);
      }
    ));
  }

  /**
   * @param {number} latitude
   * @param {number} longitude
   * @returns {Promise<MapSearchResult>}
   */
  mapFactory(latitude, longitude) {
    const {
      REACT_APP_LOCATIONIQ_MAP_BASE_URL: BASE_URL,
      REACT_APP_LOCATIONIQ_API_KEY,
      REACT_APP_LOCATIONIQ_APP_ID
    } = process.env;

    const queryString = new QueryString(BASE_URL)
      .addParameter(new QueryStringParameter('key', REACT_APP_LOCATIONIQ_API_KEY))
      .addParameter(new QueryStringParameter('appid', REACT_APP_LOCATIONIQ_APP_ID))
      .addParameter(new QueryStringParameter('center', `${latitude},${longitude}`));

    return new MapSearchResult()
      .addImageUri(queryString.urlFactory());
    // .addImageBlob(response.content);
  }

  render() {
    return (
      <Container className="p-2 w-75">
        <Form onSubmit={this.locationSearchFormSubmitHandler}
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

  searchStringChangeHandler = event => {
    if (event.target.value)
      this.setState({
        rawSearchString: event.target.value
      });
  };
}
