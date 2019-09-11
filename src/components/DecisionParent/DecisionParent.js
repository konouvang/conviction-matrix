import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import DecisionItemChild from '../DecisionItemChild/DecisionItemChild';
import DecisionAddChild from '../DecisionAddChild/DecisionAddChild';

class DecisionParent extends Component {
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
          <DecisionItemChild decisions={this.state.decisions} deleteDecision={this.deleteDecision} />
          <DecisionAddChild addDecision={this.addDecision} />
          </div>
        )
      }
};

export default connect(mapStateToProps)(DecisionParent);