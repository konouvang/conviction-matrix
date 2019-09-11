import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';

class Template extends Component {
    render() {
        return(
            <div>
                YOUR CONTENT
            </div>
        )
    }
};

export default connect(mapStateToProps)(Template);
