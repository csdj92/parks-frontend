import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {connect} from 'react-redux';

const ParksListHeading = (props) => {
	return (
		<Jumbotron fluid>    
    
		</Jumbotron>
	);
};
const mapStateToProps = (state) => {
    return {
    parks: state.parksReducer.parks
    }
}
export default connect(mapStateToProps)(ParksListHeading)