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

    this.handleFishClick = this.handleFishClick.bind(this);
    this.handleBugClick = this.handleBugClick.bind(this);
  }
  handleFishClick() {
    this.setState({
      fish: true
    });
  }
  handleBugClick() {
    this.setState({
      fish: false
    });
  }
  render() {
    const critters = this.state.fish ? Constants.FISH : Constants.BUGS;
    
    const month = new Date().getMonth() + 1;
    const available_critters = critters.filter(x => x[4].includes(month));

    const critters_type = available_critters.map(x => x.concat(this.state.fish));
    const crittersJSX = critters_type.map(MapCritterToJSX);
    return (
      <div>
        <div className='buttons'>
          <button className='critterButton' onClick={this.handleFishClick}>
            <img src={this.state.fish ? 'fish_button_activated.png':'fish_button.png'} alt="Fish"/>
          </button>
          <button className='critterButton' onClick={this.handleBugClick}>
            <img src={this.state.fish ? 'bug_button.png' : 'bug_button_activated.png'} alt="Bug"/>
          </button>
        </div>
        <div className='gallery'>
          {crittersJSX}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);