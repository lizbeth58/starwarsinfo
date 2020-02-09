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
      planets: '',
      spaceships: '',
      vehicles: '',
    };
  }

  onClickSearch = (event) => {
    if(this.getFromState(event.target.value) === ''){
      this.setState({search: event.target.value}, function() {
        this.get();
      });
      console.log(this.getFromState(event.target.value));
    }else{
      this.setState({search: event.target.value});
      console.log(this.getFromState(event.target.value));
    }
  }

  getFromState(string){
    switch(string){
      case 'people/':
        return this.state.people;
      case 'planets/':
        return this.state.planets;
      case 'spaceshps/':
        return this.state.spaceships;
      case 'vehicles/':
        return this.state.vehicles;
      default:
        return '';
    }
  }

  SelectionChooser(data)
  {
    switch(this.state.search){
      case 'people/':
        this.setState({people: data});
        break;
      case 'planets/':
        this.setState({planets: data});
        break;
      case 'spaceshps/':
        this.setState({spaceships: data});
        break;
      case 'vehicles/':
        this.setState({vehicles: data});
        break;
      default:
        this.setState({...this.state});
    }
  }

  async get() {
    console.log(`https://swapi.co/api/${this.state.search}`);
    const response = await fetch(`https://swapi.co/api/${this.state.search}`);
    const data = await response.json();

    this.SelectionChooser(data);
  } 

  listChooser(){
    console.log(this.getFromState(this.state.search),'lc');
    return (
      this.getFromState(this.state.search) === '' ?
       <div></div> : 
       <CardList selection={this.state.search} data={this.getFromState(this.state.search)} />
    );
  }

  render(){

   return ( 
   
    <div>
      <Selection click={this.onClickSearch}/>
      {
        this.listChooser()
      }
    </div>
   );
  }
}

export default App;
