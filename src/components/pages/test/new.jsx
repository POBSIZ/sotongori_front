import React from 'react';
import { Link, HashRouter, BrowserRouter, MemoryRouter, Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import nimg from '../home/assets/img/test.jpg';

class NewTest extends React.Component {

    props = this.props;

    constructor(props) {
        super(props);
        this.state={
            company: []
        }
    }

    async componentWillMount(){}

    async componentDidMount(){
        console.log(this.props.match)
    }

    render() {
        return (
            <>
                <h1>Hello {this.props.match.params.data}</h1>
                {/* <img src={nimg}/> */}
            </>
        );
    }
}

export default hot(module)(NewTest);