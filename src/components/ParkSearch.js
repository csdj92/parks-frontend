import React, {Component} from 'react'
import {connect} from 'react-redux';
import { Button, Input, Container } from 'semantic-ui-react'

class ParkSearch extends Component {
    state ={
        search: '',  
        parks: [],
    }

    handleChange= (e) =>{
        this.setState({
            ...this.state,
            search: e.target.value
        })
    }

    handleClick= () =>{
        const matchedPark = this.props.park.find(park =>park.fullName.substring(0,3)=== this.state.search.substring(0,3))       
        this.props.history.push(`/parks/${matchedPark.id}`)
    }

    render() {
        return (
            <Container>   
                <Button onClick={this.handleClick} floated="right" color='yellow' padding='15px'>
                    Search
                </Button>
                <Input fluid type="text" name="category" onChange={this.handleChange} value={this.state.search} placeholder="Search here..'"/>
                <br/>        
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
    park: state.parksReducer.parks
    }
}

export default connect(mapStateToProps)(ParkSearch);