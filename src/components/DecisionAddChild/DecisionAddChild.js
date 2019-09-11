import React, { Component } from 'react'

class DecisionAddChild extends Component {
    state = {
        content: ''
    }
    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addDecision(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new decision item:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default DecisionAddChild