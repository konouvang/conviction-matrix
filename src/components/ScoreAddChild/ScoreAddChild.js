import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class FactorAddChild extends Component {
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
        this.props.dispatch({
            type: 'SET_SCORE',
            payload: this.state.content
        });
        this.props.addScore(this.state)
        this.setState({
            content: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Set Score:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FactorAddChild);