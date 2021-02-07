import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


class campground extends Component {

render() {
    const urlArray = this.props.match.url.split('/')
    const campgroundId = parseInt(urlArray[urlArray.length-1])    
    const campground = this.props.campgrounds.find(campground => campground.id === campgroundId)   
    return (
    <div>
    <h1>{campground.fullName}</h1> <p>{campground.description} {campground.directionsInfo}</p> <Link to={campground.url}></Link>  
    </div>
    );
}
}
const mapStateToProps = (state) => {
    return {
    campgrounds: state.campgroundsReducer.campgrounds
    }
}

export default connect(mapStateToProps)(campground);