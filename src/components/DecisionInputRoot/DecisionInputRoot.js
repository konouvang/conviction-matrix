import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import DecisionItemTwo from '../DecisionItemTwo/DecisionItemTwo';
import DecisionAdd from '../DecisionAdd/DecisionAdd';

class DecisionInputRoot extends Component {
    state = {
        decisions: [
            {id: 1, content: 'Stay'},
            {id: 2, content: 'Move'}
        ]
    }

    deleteDecision = (id) => {
        const decisions = this.state.decisions.filter(decision => {
            return decision.id !== id
        });
        this.setState({
            decisions
        })
      }
      addDecision = (choice) => {
        choice.id = Math.random()
        let decisions = [...this.state.decisions, choice]
        this.setState({
          decisions
        })
      }
      render() {
        return (
          <div>
          <h1>Decision Item</h1>
          <p>Decision Items are choices that this app is used for to help determine the best decision. There needs to be at least two.</p>
          <DecisionItemTwo decisions={this.state.decisions} deleteDecision={this.deleteDecision} />
          <DecisionAdd addDecision={this.addDecision} />
          </div>
        )
      }
};

export default connect(mapStateToProps)(DecisionInputRoot);