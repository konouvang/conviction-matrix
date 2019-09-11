import React, { Component } from 'react'

class FactorAddChild extends Component {
    state = {
        combinedFactorWeight: {
            factors: '',
            weight: ''
        }
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        const propertyKey = event.target.getAttribute('name');
        this.setState({
            combinedFactorWeight: {
                ...this.state.combinedFactorWeight,
                [propertyKey]: inputValue,
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addFactor(this.state)
        this.setState({
            factors: '',
            weight: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new factor item:</label>
                    <input type="text" placeholder="Factor" onChange={this.handleChange} value={this.state.factors} name="factors" />
                    <input type="number" placeholder="Weight" onChange={this.handleChange} value={this.state.weight} name="weight" />
                </form>
            </div>
        )
    }
}

export default FactorAddChild