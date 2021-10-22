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
            organ_visit: '',
        }
    }

    async componentWillMount(){}

    async componentDidMount(){
        // const url=`http://3.35.243.239/api/info?search=${this.props.match.params.data}`
        const url=`http://3.35.43.53/api/organ/${this.props.match.params.data}`
        const getName = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        var organName = await getName.json();

        const urlV=`http://3.35.243.239/api/visitor/${this.props.match.params.data}`
        const getVisit = await fetch(urlV, {
            method: 'GET',
            mode: 'cors',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        var visitInfo = await getVisit.json();
        await this.setState({
            organ: organName.name,
            organ_visit: visitInfo,
        })
        // console.log(visitInfo)
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
                            <p className="attr-itm">누적 방문자수 <strong>{this.state.organ_visit.totaluser}</strong>명</p>
                            <p className="attr-itm">일일 방문자수 <strong>{this.state.organ_visit.todayuser}</strong>명</p>
                            <p className="attr-itm">일일 평균 방문자수 <strong>{this.state.organ_visit.avguser}</strong>명</p>
                            <p className="attr-itm">일일 최대 방문자수 <strong>{this.state.organ_visit.maxuser}</strong>명</p>
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