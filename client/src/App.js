import React from 'react';
import './App.css';
import PlayerCard from "./PlayerCard.js"
import Navbar from "./Navbar";

class App extends React.Component {
  state= {
    players: []
  };

  componentDidMount(){
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(player => {
        console.log(player);
        this.setState({...this.state, players: player})
      })
      .catch(err => console.log(err))
  };
  render() {
    return (
      <div className="playerCard">
        <Navbar />
        <h1 data-testid="sub-title">Players Ranked by Internet Search</h1>
        <div>
        {this.state.players.map(player => {
          return <PlayerCard name={player.name} country={player.country} searches={player.searches}/>
        })}
        </div>
      </div>
    )
  }
}

export default App;
