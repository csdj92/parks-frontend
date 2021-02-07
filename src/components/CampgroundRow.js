import React, { Component } from "react";
import CampgroundListContainer  from '../containers/CampgroundListContainer'
import ScrollContainer from 'react-indiana-drag-scroll'
import ParksListHeading from './ParksListHeading'
import {connect} from 'react-redux';

class CampgroundsRow extends Component {
    render(){
        debugger
        return(
        <ScrollContainer className="container-fluid" >
        <div>  
            <ParksListHeading 
            />
            <CampgroundListContainer 
            />
        </div>
            </ScrollContainer> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
    campgrounds: state.campgroundsReducer.campgrounds
    }
}

export default connect(mapStateToProps)(CampgroundsRow)