import React from 'react';
import PropTypes from 'prop-types'
import './Popup.css'


class Popup extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    const closePopup = () => this.props.setPopup(null);
    const style = {top: this.props.windowY, left: this.props.windowX};
    return (
        <div className="popup" onClick={closePopup} style={style}>
            <h1> {this.props.name} </h1>
            <p>Price: {this.props.price} Bells</p>
            <p>Location: {this.props.location}</p>
            <p>Time: {this.props.time}</p>
        </div>
    );
  }
}

Popup.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    setPopup: PropTypes.func.isRequired,
    windowX: PropTypes.number.isRequired,
    windowY: PropTypes.number.isRequired
}

export default Popup;
