import React from 'react';
import PropTypes from 'prop-types'
import './Popup.css'


class Popup extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    const closePopup = () => this.props.setPopup(null);
    return (
        <div className="popup" onClick={closePopup}>
            <h1> {this.props.name} </h1>
        </div>
    );
  }
}

Popup.propTypes = {
    name: PropTypes.string.isRequired,
    setPopup: PropTypes.func.isRequired,
}

export default Popup;