import React from 'react';
import ErrorModel from '../models/ErrorModel';


export class AppStateMutator extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * @param {LocationSearchResults} locationSearchResults
   */
  resultHandler = (locationSearchResults) => {
    this.setState({
      locationSearchResults: locationSearchResults
    });
  };

  clearError = () => this.setState({error: null});

  injectError = error => this.setState({
    error: new ErrorModel({title: 'Error!', message: error})
  });

  /**
   * @param {ErrorModel} error
   */
  errorHandler = (error) => {
    this.setState({
      error: error
    });
  };
}
