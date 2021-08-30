import React from 'react';
import {Container, Row} from 'react-bootstrap';
import LocationSearchResults from '../models/LocationSearchResults';
import {ErrorResultComponent} from './ErrorResultComponent';
import ResultsComponent from './ResultsComponent';
import SearchFormComponent from './SearchFormComponent';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationSearchResults: new LocationSearchResults(),
      error: null,
    };
  }

  /**
   * @param {LocationSearchResults} locationSearchResults
   */
  resultHandler = (locationSearchResults) => {
    this.setState({
      locationSearchResults: locationSearchResults
    });
  };

  /**
   * @param {ErrorModel} error
   */
  errorHandler = (error) => {
    this.setState({
      error: error
    });
  };

  render() {
    return (
      <Container>
        <ErrorResultComponent error={this.state.error}/>
        <Container className="pt-5 p2 bg-info">
          <Row>
            <SearchFormComponent resultHandler={this.resultHandler}/>
          </Row>
        </Container>
        <Container className="p2 pt-5 start-50 bg-light">
          <Row>
            <ResultsComponent searchResults={this.state.locationSearchResults}/>
          </Row>
        </Container>
      </Container>
    );
  }
}
