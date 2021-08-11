import React from 'react';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
            </footer>             
        );
    }
}

export default hot(module)(Footer);