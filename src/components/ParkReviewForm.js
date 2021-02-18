import React, { Component } from 'react'
import {addReview} from '../actions/ReviewCampground'
import {connect} from 'react-redux'

class ParkReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: '',
            parkCode: '',
            description: '',
            fullName: '',
            url: '',
            name: '',
            latitude: '',
            longitude: '',
            activities:'',
            states: '',
            phoneNumber: '',
            entranceFees: '',
            directionsInfo: '',
            directionsUrl: '',
            standardHours: '',
            images: '',
        }
    }
    

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        if (this.state.fullName === '') {
            alert('Please fill in all boxes')
        } else { 
        this.props.addReview(this.state)
        this.setState({
            state: '',
            parkCode: '',
            description: '',
            fullName: '',
            url: '',
            name: '',
            latitude: '',
            longitude: '',
            activities:'',
            states: '',
            phoneNumber: '',
            entranceFees: '',
            directionsInfo: '',
            directionsUrl: '',
            standardHours: '',
            images: '',
        })}
    }

    render() {
        return (
            
            <form onSubmit={this.handleOnSubmit}>
            <h1>Create A Park</h1>
            <label >State: </label>            
            <input type="text" name='state' value={this.state.state} onChange={(event) => this.handleOnChange(event)} />
            <label >Park Code: </label>
            <input type="text" name='parkCode' value={this.state.parkCode} onChange={(event) => this.handleOnChange(event)} />
            <label >Description: </label>
            <input type="text" name='description' value={this.state.description} onChange={(event) => this.handleOnChange(event)} />
            <label >Full Park Name: </label>
            <input type="text" name='fullName' value={this.state.fullName} onChange={(event) => this.handleOnChange(event)} />
            <label >URL: </label>
            <input type="text" name='url' value={this.state.url} onChange={(event) => this.handleOnChange(event)} />
            <label >State: </label>
            <input type="text" name='name' value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
            <label >latitude: </label>
            <input type="text" name='latitude' value={this.state.latitude} onChange={(event) => this.handleOnChange(event)} />
            <label >Phone Number: </label>
            <input type="text" name='phoneNumber' value={this.state.phoneNumber} onChange={(event) => this.handleOnChange(event)} />
            <label >Image url: </label>
            <input type="text" name='images' value={this.state.images} onChange={(event) => this.handleOnChange(event)} />




            <button type="submit">Add Review</button>
            </form>
        )
    }
}

export default connect(null, {addReview})(ParkReviewForm)
