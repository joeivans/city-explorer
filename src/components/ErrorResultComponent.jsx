import React from 'react';
import Toast from 'react-bootstrap/Toast';


export class ErrorResultComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: this.props.error,
      show: false,
    };
  }

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
    this.props.clearError();
  };

  conditionallyRender = () => {
    if (this.props.error) {
      this.toggleShow();
    }
  };

  render() {
    if (this.props.error === null) {
      return <></>;
    }

    return (
      <>
        <Toast className="bg-danger"
               show={this.conditionallyRender}
               onClose={this.toggleShow}>
          <Toast.Header>
            <strong className="me-auto">{this.props.error.title}</strong>
          </Toast.Header>
          <Toast.Body>{this.props.error.message}</Toast.Body>
        </Toast>
      </>
    );
  }
}
