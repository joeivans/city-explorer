import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  exploreButtonClickHandler = (cityName) => {
    alert(cityName);
  };

  render() {
    return (
      <>
        <LocationForm exploreButtonClickHandler={this.exploreButtonClickHandler}/>
      </>
    );
  }
}
