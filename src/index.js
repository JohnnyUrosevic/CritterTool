import React from 'react';
import ReactDOM from 'react-dom';
import Critter from './Critter.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Critter name="Bitterling" fish={true}/>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);