import React from 'react';
import Toast from 'react-bootstrap/Toast';


export class ErrorResultComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: this.props.error,
    };
  }

  toggleShowA() {
    this.setState({
      showA: !this.state.showA
    });
  }

  render() {
    if (this.props.error === null) {
      return <></>;
    }

    return (
      <>
        <Toast className="bg-danger"
               show={this.props.error}
               onClose={this.toggleShowA.bind(this)}>
          <Toast.Header>
            <strong className="me-auto">{this.props.error.title}</strong>
          </Toast.Header>
          <Toast.Body>{this.props.error.message}</Toast.Body>
        </Toast>
      </>
    );
  }
}
