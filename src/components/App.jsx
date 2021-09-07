import React from 'react';
import {Container, Row} from 'react-bootstrap';
import LocationSearchResults from '../models/LocationSearchResults';
import {AppStateMutator} from './AppStateMutator';
import {ErrorResultComponent} from './ErrorResultComponent';
import ResultsComponent from './ResultsComponent';
import SearchFormComponent from './SearchFormComponent';


export default class App extends AppStateMutator {
  constructor(props) {
    super(props);

    /**
     * @type {{locationSearchResults: LocationSearchResults, error: ErrorModel}}
     */
    this.state = {
      locationSearchResults: new LocationSearchResults(),
      error: null,
    };
  }

  render() {
    return (
      <Container>
        <ErrorResultComponent error={this.state.error}
                              clearError={this.clearError}/>
        <Container className="pt-5 p2 bg-info">
          <Row>
            <SearchFormComponent resultHandler={this.resultHandler}
                                 onError={this.injectError}/>
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
