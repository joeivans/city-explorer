import React from 'react';
import {Container, Row} from 'react-bootstrap';
import SearchResults from '../models/SearchResults';
import ResultsComponent from './ResultsComponent';
import SearchFormComponent from './SearchFormComponent';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: new SearchResults(),
    };
  }

  /**
   * @param {SearchResult[]} results
   */
  resultHandler = (results) =>
    this.setState({
      results: results
    });

  render() {
    return (
      <Container>
        <Container className="pt-5 p2 bg-info">
          <Row>
            <SearchFormComponent resultHandler={this.resultHandler}/>
          </Row>
        </Container>
        <Container className="p2 pt-5 start-50 bg-light">
          <Row>
            <ResultsComponent searchResults={this.state.results}/>
          </Row>
        </Container>
      </Container>
    );
  }
}
