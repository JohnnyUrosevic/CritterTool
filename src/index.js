import React from 'react';
import ReactDOM from 'react-dom';
import Critter from './Critter.js'
import * as Constants from './constants'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fish: true
    }
  }
  render() {
    const critters = this.state.fish ? Constants.FISH : Constants.BUGS;
    return (
      <div>
        <Critter name={critters[0][0]} fish={this.state.fish}/>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);