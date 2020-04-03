import React from 'react';
import PropTypes from 'prop-types'

class Critter extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
    const img_file = '/images/' + (this.props.fish ? "fish/" : "bug/")
        + this.props.name.split(' ').join('') + '.png';
    return (
        <img src={img_file} alt=''/>
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
}

export default Critter;