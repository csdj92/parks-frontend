import React, { Component } from "react";
import ParkListContainer  from '../containers/ParkListContainer'
import ScrollContainer from 'react-indiana-drag-scroll'
import ParksListHeading from '../components/ParksListHeading'
import {connect} from 'react-redux';

class ParksRow extends Component {
    render(){
        return(
        <ScrollContainer className="container-fluid" >
        <div>  
            <ParksListHeading
            />
            <ParkListContainer 
            />
        </div>
            </ScrollContainer> 
        )
    }
    

}
const mapStateToProps = (state) => {
        return {
        parks: state.parksReducer.parks
        }
    }

export default connect(mapStateToProps)(ParksRow)