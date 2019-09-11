import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { withRouter } from 'react-router-dom';

import './SiteBackdrop.css';

const STYLING = {
    suitBg: 'site-bd-backdrop_suit',
    base: 'site-bd-backdrop',
}

class SiteBackdrop extends Component {
    render() {
        const currentPath = this.props.history.location.pathname;
        let backdropStyle = STYLING.base;

        if (currentPath === '/') {
            backdropStyle += ` ${STYLING.suitBg}`
        }

        return (
            <div item={12} className={backdropStyle}></div>
        )
    }
};

export default connect(mapStateToProps)(withRouter(SiteBackdrop));
