import React from 'react';
import { Link, HashRouter, BrowserRouter, MemoryRouter, Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss'

import bobel from './assets/img/bobel.png'
import won from './assets/img/won.jpg'

import ScatterChartGen from './assets/js/scatter';
import StockChartGen from './assets/js/stock';
import BarChartGen from './assets/js/bar';

class Chart extends React.Component {

    props = this.props;

    constructor(props) {
        super(props);
        this.state={
            organ: 'default',
        }
    }

    async componentWillMount(){}

    async componentDidMount(){
        // const url=`http://3.35.243.239/api/info?search=${this.props.match.params.data}`
        const url=`http://3.35.243.239/api/organ/${this.props.match.params.data}`
        const getName = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        var organName = await getName.json();
        await this.setState({
            organ: organName.name,
        })
        // console.log(organName)
        ScatterChartGen(this.props.match.params.data);
        StockChartGen(this.props.match.params.data, this.state.organ)
        BarChartGen(this.props.match.params.data, this.state.organ)
    }

    render() {
        return (
            <>
                <section className="organ_banner" style={{backgroundImage: `url(${won})`}}>
                    <Link className="to-home" to='/'>
                        <span className="material-icons to-home">arrow_back</span>
                    </Link>
                    <div className="banner-inwrapper">
                        <h1 className="organ-name">{this.state.organ}</h1>
                        <div className="organ-attr">
                            <p className="attr-itm">누적 방문자수 <strong>100</strong>명</p>
                            <p className="attr-itm">일일 방문자수 <strong>80</strong>명</p>
                            <p className="attr-itm">일일 평균 방문자수 <strong>80</strong>명</p>
                            <p className="attr-itm">일일 최대 방문자수 <strong>80</strong>명</p>
                        </div>
                    </div>
                </section>
                <div className="chart" id="scatter"></div>
                <div className="chart" id="stock"></div>
                <div className="chart" id="bar"></div>
            </>
        );
    }
}

export default hot(module)(Chart);