import React, { Component } from 'react'

class FactorAddChild extends Component {
    state = {
        content: '',
        weight: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFactor(this.state)
        this.setState({
            content: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new factor item:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default FactorAddChild