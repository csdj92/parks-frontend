import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { fetchParks } from './actions/parksActions'
import { connect } from 'react-redux'




export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     parks: []
  //   }
  // }

 

  componentDidMount() {
    fetch('http://localhost:3000/parks')
    .then(response => response.json())
    .then(data => this.setState({ parks: data.slice(0,10) }))
    }
    //{this.state.parks.map((parks, index) => <img src={parks.images.split("}, {",)[2].split('"url"=>"')[1].split('"')[0]} alt='parks' key={index}></img>)}

  noPic = () => {
  let parks = this.state.parks
  parks = parks.filter((park) => park.images===[]); console.log(parks)
}

  render() {   
    console.log(this.state) 
    //debugger
    return(   

      
        
      <div className='container-fluid parks-app'>
			<div className='row'>
        {this.state.parks.map((park, index) => <div className = "item" key={index}>{park.fullName}<br></br>
        <img src={park.images.split("}, {",)[0].split('"url"=>"')[1].split('"')[0]} alt='parks' key={index}></img><p>{park.description}</p></div>)}
        
      </div>
        </div>
        
    )
  }
} 
// get data from state then map through each park to find if any == null
