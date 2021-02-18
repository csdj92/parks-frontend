import React, { Component } from 'react'

export default class Upvote extends Component {
    state = {
        upvotes: 0
    }
    handleClick = (e) =>{
        this.setState({
            upvotes: this.state.upvotes + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.upvotes}</button>
            </div>
        )
    }
}
