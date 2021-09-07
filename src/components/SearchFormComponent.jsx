import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import LocationSearchResult from '../models/LocationSearchResult';
import LocationSearchResults from '../models/LocationSearchResults';
import MapSearchResult from '../models/MapSearchResult';
import QueryString from '../models/QueryString';
import QueryStringParameter from '../models/QueryStringParameter';
import getAsync from '../utilities/HttpClient';


export default class SearchFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rawSearchString: '',
    };
  }

  locationSearchFormSubmitHandler = async event => {
    event.preventDefault();

    this.props.resultHandler(
      await this.locationSearchResultsFactory());
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
        .addParameter(new QueryStringParameter('addressdetails', 1)),
      error => {
        if (error.response) {
          console.error('Error in response:', error.response.status);
          this.props.onError(error.response.status);
        } else if (error.request) {
          console.error('Error in request', error.request);
          this.props.onError(error.request.status);
        } else {
          console.error('General error:', error.message);
          this.props.onError(500);
        }
      }
    );

    if (!response) {
      return new LocationSearchResults();
    }

    return new LocationSearchResults(response.content.map(
      ({address, display_name, lat, lon, place_id}) =>
        new LocationSearchResult()
          .addId(place_id)
          .addLatitude(lat)
          .addLongitude(lon)
          .addName(display_name)
          .addHouseNumber(address.house_number)
          .addRoad(address.road)
          .addNeighborhood(address.neighbourhood)
          .addSuburb(address.suburb)
          .addIsland(address.island)
          .addCity(address.city)
          .addCounty(address.county)
          .addState(address.state)
          .addStateCode(address.state_code)
          .addPostalCode(address.postcode)
          .addCountry(address.country)
          .addCountryCode(address.country_code)
          .addMapUri(this.mapFactory(lat, lon).imageUri)
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

  searchStringChangeHandler = ({target}) => {
    if (target.value) {
      this.setState({
        rawSearchString: target.value
      });
    }
  };
}
