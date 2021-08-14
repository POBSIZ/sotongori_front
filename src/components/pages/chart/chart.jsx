import React from 'react';
import { Link, HashRouter, BrowserRouter, MemoryRouter, Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss'

import scatterChartGen from './assets/js/test';

class Chart extends React.Component {

    props = this.props;

    constructor(props) {
        super(props);
        this.state={
            organ: 'default'
        }
    }

    async componentWillMount(){}

    async componentDidMount(){
        const getName = await fetch(`http://3.35.243.239/api/organ/${this.props.match.params.data}`, {
            method: 'GET',
            mode: 'cors',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        var organName = await getName.json();
        await this.setState({
            organ: organName.name
        })
        // console.log(this.state.organ)
        // console.log(this.props.match)

        scatterChartGen();
    }

    render() {
        return (
            <>
                <h1 className="organ-name">{this.state.organ}</h1>
                <div className="chart" id="scatter"></div>
            </>
        );
    }
}

export default hot(module)(Chart);