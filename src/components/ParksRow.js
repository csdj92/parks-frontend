import React, { Component } from "react";
import ParkListContainer  from '../containers/ParkListContainer'
import ScrollContainer from 'react-indiana-drag-scroll'
import ParksListHeading from '../components/ParksListHeading'
import {connect} from 'react-redux';
import ParkReviewForm from './ParkReviewForm'

class ParksRow extends Component {
    render(){
        return(<div>
        <ScrollContainer className="container-fluid" >
        <div>  
            <ParksListHeading parks={this.props.parks}
            />
            <ParkListContainer parks={this.props.parks}
            />
        </div>  
        
            </ScrollContainer> 
            <ParkReviewForm/></div>
        
        )
    }
    

}
const mapStateToProps = (state) => {
        return {
        parks: state.parksReducer.parks
        }
    }

export default connect(mapStateToProps)(ParksRow)