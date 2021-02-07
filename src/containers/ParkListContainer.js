import React, { Component } from 'react'; 
import Card from 'react-bootstrap/Card';

class ParkListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			parks: [],
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
		
		return(         
		<div className='container-fluid parks-app'>
			<div className='row'>
				{this.props.parks.slice(0, this.state.visible).map((park) => {
				return(
				<div className="tile fade-in" key={park.id}>
					<Card key={park.id} style={{ width: '14rem' }}>
						<div className = "item" key={park.id}>
						<Card.Title>{park.fullName}<br></br> </Card.Title>
						<Card.Img className="rowp" src={park.images.split("}, {",)[0].split('"url"=>"')[1].split('"')[0]}	alt='parks' key={park.id}/>
						<Card.Text>{park.description} {park.directionsUrl}</Card.Text>
						</div>
							</Card>
									</div>
									)})}
									{this.state.visible > this.state.parks.length &&
								<button onClick={this.loadMore} type="button" className="load-more">Load more</button>
								}</div>
									</div>
					
		)
		

		
	}
}

export default ParkListContainer