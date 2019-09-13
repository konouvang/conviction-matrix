import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

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
        this.props.dispatch({
            type: 'SET_DECISION',
            payload: this.state.gentInfo
        });
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
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DecisionAddChild);