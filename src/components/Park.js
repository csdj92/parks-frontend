import React, { Component } from "react";
import { connect } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'
import { CarouselItem } from "react-bootstrap";
import Container from 'react-bootstrap/Container'



class Park extends Component {

render() {
const urlArray = this.props.match.url.split('/')
const parkId = parseInt(urlArray[urlArray.length-1])

const park = this.props.parks.find(park => park.id === parkId)

if (parkId > 468){
    return(
        <div>
        <br></br>
        <img src={park.images} alt='parks'/>
        <h1>{park.fullName}</h1> <br></br>
        <p>{park.description} {park.directionsInfo}</p> <br></br>
        <a href={park.url} target='_blank' rel="noreferrer">Directions</a>
        <br></br>
        </div>
    )
}else{

return (
<Container fluid>
    <Carousel>
        <CarouselItem>
            <img className="d-block " src={park.images.split("}, {",)[0].split('"url"=>"')[1].split('"')[0]}
            alt='parks' key={park.id} />
            <Carousel.Caption>
                <h1>{park.images.split("}, {",)[0].split('"caption"=>"')[1].split('"')[0]}</h1>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img className="d-block " src={park.images.split("}, {",)[1].split('"url"=>"')[1].split('"')[0]}
            alt='parks' key={park.id} />
            <Carousel.Caption>
                <h1>{park.images.split("}, {",)[1].split('"caption"=>"')[1].split('"')[0]} </h1>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img className="d-block w-500" src={park.images.split("}, {",)[2].split('"url"=>"')[1].split('"')[0]}
            alt='parks' key={park.id} />
            <Carousel.Caption>
                <h1>{park.images.split("}, {",)[2].split('"caption"=>"')[1].split('"')[0]}</h1>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img className="d-block " src={park.images.split("}, {",)[3].split('"url"=>"')[1].split('"')[0]}
            alt='parks' key={park.id} />
            <Carousel.Caption>
                <h1>{park.images.split("}, {",)[3].split('"caption"=>"')[1].split('"')[0]}</h1>
            </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img className="d-block " src={park.images.split("}, {",)[4].split('"url"=>"')[1].split('"')[0]}
            alt='parks' key={park.id} />
            <Carousel.Caption>
                <h1>{park.images.split("}, {",)[4].split('"caption"=>"')[1].split('"')[0]} </h1>
            </Carousel.Caption>
        </CarouselItem>
    </Carousel>

    <br></br>
    <h1>{park.fullName}</h1> <br></br>
    <p>{park.description} {park.directionsInfo}</p> <br></br>
    <a href={park.url} target='_blank' rel="noreferrer">Directions</a>
    <br></br>
    
</Container>
);
}}
}
const mapStateToProps = (state) => {
return {
parks: state.parksReducer.parks
}
}

export default connect(mapStateToProps)(Park);