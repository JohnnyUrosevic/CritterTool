import React from 'react';
import ReactDOM from 'react-dom';
import Critter from './Critter.js'
import * as Constants from './constants'
import './index.css'

const MapCritterToJSX = (x, i) => (<Critter key={i} name={x[0]} price={x[1]}
   location={x[2]} time={x[3]} months={x[4]} fish={x[5]}/>)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fish: true
    }
  }
  render() {
    const critters = this.state.fish ? Constants.FISH : Constants.BUGS;
    
    const month = new Date().getMonth() + 1;
    const available_critters = critters.filter(x => x[4].includes(month));

    const critters_type = available_critters.map(x => x.concat(this.state.fish));
    const crittersJSX = critters_type.map(MapCritterToJSX);
    return (
      <div>
        {crittersJSX}
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);