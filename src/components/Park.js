import React, { Component } from "react";
import { connect } from 'react-redux'


class Park extends Component {

render() {
        const urlArray = this.props.match.url.split('/')
        const parkId = parseInt(urlArray[urlArray.length-1])  
        
        const park = this.props.parks.find(park => park.id === parkId)
        
        
    
    return (
    <container>
    <img src= {park.images.split("}, {",)[0].split('"url"=>"')[1].split('"')[0]}	alt='parks' key={park.id} />
    <img src= {park.images.split("}, {",)[1].split('"url"=>"')[1].split('"')[0]}	alt='parks' key={park.id} />
    <img src= {park.images.split("}, {",)[2].split('"url"=>"')[1].split('"')[0]}	alt='parks' key={park.id} />
    <img src= {park.images.split("}, {",)[3].split('"url"=>"')[1].split('"')[0]}	alt='parks' key={park.id} />
    <img src= {park.images.split("}, {",)[4].split('"url"=>"')[1].split('"')[0]}	alt='parks' key={park.id} />
    
    <br></br>
    {park.fullName}<br></br>
    {park.description}<br></br> 
    {park.directionsInfo}{park.url}
    </container>
    );
}
}
const mapStateToProps = (state) => {
    return {
    parks: state.parksReducer.parks
    }
}

export default connect(mapStateToProps)(Park);