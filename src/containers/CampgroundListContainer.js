import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {connect} from 'react-redux';

class CampgroundListContainer extends Component {
constructor(props) {
super(props);
this.state = {
campgrounds: [],
visible: 10,
error: false

};
this.loadMore = this.loadMore.bind(this);
}

loadMore() {
this.setState((prev) => {
return {visible: prev.visible + 10};
});
}


render(){
debugger
return(
<div className='container-fluid campgrounds-app'>
	<div className='row'>

		{this.props.campgrounds.slice(0, this.state.visible).map((campground) => {
		return(
		<div className="tile fade-in" key={campground.id}>
			<Card key={campground.id} style={{ width: '14rem' }}>
				<div className="item" key={campground.id}>
					<Card.Title>{campground.name}<br></br> </Card.Title>

					<Card.Text>{campground.description} {campground.directionsUrl}</Card.Text>
				</div>
			</Card>
		</div>
		)})}
		{this.state.visible > this.state.campgrounds.length &&
		<button onClick={this.loadMore} type="button" className="load-more">Load more</button>
		}
	</div>
</div>

)



}
}
const mapStateToProps = (state) => {
return {
campgrounds: state.campgroundsReducer.campgrounds
}
}

export default connect(mapStateToProps)(CampgroundListContainer)