import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import ScoreItemChild from '../ScoreItemChild/ScoreItemChild';
import ScoreAddChild from '../ScoreAddChild/ScoreAddChild';

class ScoreParent extends Component {
    state = {
        scores: [
            {id: 1, content: 'placeholder for something'},
        ]
    }

    deleteScore = (id) => {
        const scores = this.state.scores.filter(score => {
            return score.id !== id
        });
        this.setState({
            scores
        })
      }
      addScore = (score) => {
        score.id = Math.random()
        let scores = [...this.state.scores, score]
        this.setState({
          scores
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
          <ScoreAddChild addScore={this.addScore} />
          </div>
        )
      }
};

export default connect(mapStateToProps)(ScoreParent);