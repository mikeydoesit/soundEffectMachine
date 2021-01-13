import React, { Component } from 'react';
import axios from 'axios';
import Pads from './Pads';
import SearchBox from './SearchBox';
import PowerButton from "./PowerButton";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundBank: [],
      power: false,
      input: '',
      searchQuery: 'dogs'
  }
  this.togglePower = this.togglePower.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.saveSearchTerm = this.saveSearchTerm.bind(this);
  }

  togglePower() {
    this.setState({
        power: !this.state.power
    });
}
handleChange(e) {
    this.setState({
        input: e.target.value
    })
}
async saveSearchTerm(e) {
  e.preventDefault();

  const APIKEY = 'O2p8gfZc4Fo3yDonA294ejbYX5zSaOWOr64ToRod';
  this.setState({
    searchQuery: this.state.input
  })

  const {data} = await axios.get(`https://freesound.org/apiv2/search/text/?query=${this.state.input}&filter=duration:%5B0.1%20TO%201.4%5D&fields=name,previews&token=${APIKEY}`)
  this.setState({soundBank: data.results})
}

async componentDidMount() {

  const APIKEY = 'O2p8gfZc4Fo3yDonA294ejbYX5zSaOWOr64ToRod';

  const {data} = await axios.get(`https://freesound.org/apiv2/search/text/?query=${this.state.searchQuery}&filter=duration:%5B0.1%20TO%201.4%5D&fields=name,previews&token=${APIKEY}`)

  this.setState({soundBank: data.results})
  
  console.log(this.state.soundBank)
  console.log(this.state.soundBank[2].previews["preview-hq-mp3"])
}
  
  

  render() {
    const powerColor = this.state.power ? {color: '#03e9f4',
                                          filter: 'hue-rotate(270deg)',
                                          textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #B6FF00, 0 0 35px #B6FF00, 0 0 40px #B6FF00, 0 0 50px #B6FF00, 0 0 75px #B6FF00',
                                          boxShadow: '0 0 4px #fff, 0 0 2px #03e9f4, 0 0 3px #03e9f4, 0 0 4px #03e9f4'} 
                                          : 
                                          {color: 'rgb(231, 232, 237)'};
    return (
      <div id="drum-machine">
        <div id="controls">
        <PowerButton onoff={powerColor} toggle={this.togglePower}/>
        <SearchBox searchTerm={this.state.input} saveSearchTerm={this.saveSearchTerm} trackSearchTerm={this.handleChange} />
        </div>
        <Pads payload={this.state.soundBank} />
      </div>
    );
  }
}

export default App;
