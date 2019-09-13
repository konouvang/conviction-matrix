import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ScoreItemChild from '../ScoreItemChild/ScoreItemChild'

class ScoreParent extends Component {
    state = {
        scores: [
            {id: 1, content: 'placeholder for something'},
        ]
    }

    deleteScore = (id) => {
        const scores = this.state.scores.filter(factor => {
            return factor.id !== id
        });
        this.setState({
            scores
        })
      }
      addScore = (factor) => {
        factor.id = Math.random()
        let factors = [...this.state.scores, factor]
        this.setState({
          factors
        })
      }
      render() {
        return (
          <div>
          <h1>Score</h1>
          <p>The Score will be based on your rating of each Factor for all Decision Items. This can be based on facts,
              personal bias or any metric you choose to use. Rate scores between 1 and 10. When all inputs are made, click
              on Compute Matrix. You will see the scores for all Decision Items in a table which will help you decide what the
              best decision is.
          </p>
          <ScoreItemChild scores={this.state.scores} deleteScore={this.deleteScore} />
          <FactorAddChild addScore={this.addScore} />
          </div>
        )
      }
};

export default connect(mapStateToProps)(ScoreParent);