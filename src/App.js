import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { fetchParks } from './actions/parksActions'
import { fetchCampgrounds } from './actions/CampgroundsActions' 
import { connect } from 'react-redux'
import ParksRow from './components/ParksRow'
import CampgroundsRow from './components/CampgroundRow'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ParkSearch from './components/ParkSearch'
import Park from './components/Park'
import NavBar from './components/Navbar'
import Campground from './components/Campground';


class App extends Component {

componentDidMount() {
    this.props.fetchParks();     
    this.props.fetchCampgrounds() 
  }
  render() {   
    return(
      <Router>
      <NavBar/>
      <Route exact path='/' component={ParkSearch}/>
      <Route exact path="/parks/:id" component={Park} />
      <Route exact path="/" component={ParksRow}/> 
      <Route exact path="/campgrounds/:id" component={Campground} />
      <Route exact path="/campgrounds" component={CampgroundsRow}/>
      </Router> 
    )
  }
} 



const mapStateToProps = state => {
  return {
    parks: state.parks,
    campgrounds: state.campgrounds,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchParks: () => dispatch(fetchParks()),
    fetchCampgrounds: () => dispatch(fetchCampgrounds())
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(App);



//{this.state.parks.map((parks, index) => <img src={parks.images.split("}, {",)[2].split('"url"=>"')[1].split('"')[0]} alt='parks' key={index}></img>)}