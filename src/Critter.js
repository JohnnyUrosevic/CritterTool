import React from 'react';
import PropTypes from 'prop-types'
import './Critter.css'
import Popup from './Popup.js'


class Critter extends React.Component {
  constructor(props) {
      super(props);

      this.createPopup = this.createPopup.bind(this);
  }
  createPopup () {
    const popup = <Popup name={this.props.name} setPopup={this.props.setPopup}
        price={this.props.price} location={this.props.location} time={this.props.time}/>;
    this.props.setPopup(popup);
  }
  render() {
    const month = new Date().getMonth() + 1;
    const expiring = !this.props.months.includes(month + 1);
    const img_file = '/images/' + (this.props.fish ? "fish/" : "bug/")
        + this.props.name.split(' ').join('') + '.png';
    return (
        <div className={`critterContainer ${expiring ? 'critterExpiring' : ''}`} onClick={this.createPopup}>
            <img src={img_file} alt={this.props.name} title={this.props.name}/>
        </div>
    );
  }
}

Critter.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    months: PropTypes.array.isRequired,
    fish: PropTypes.bool.isRequired,
    setPopup: PropTypes.func.isRequired,
}

export default Critter;