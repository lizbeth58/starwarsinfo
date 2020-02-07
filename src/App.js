import React, { Component } from 'react';
import './App.css';

import Selection from './components/Selection';
import CardList from './components/CardList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      search: '',
      people: '',
    };
  }

  onClickSearch = (event) => {
    this.setState({search: event.target.value}, function() {
      this.get();
    });
  }

  async get() {
    console.log(`https://swapi.co/api/${this.state.search}`);
    const response = await fetch(`https://swapi.co/api/${this.state.search}`);
    const data = await response.json();
    this.setState({people: data});
    console.log(data);
  } 

  render(){

   return ( 
   
    <div>
      <Selection click={this.onClickSearch}/>
      {
        this.state.people === '' ? <div></div> : <CardList data={this.state.people} />
      }
    </div>
   );
  }
}

export default App;
