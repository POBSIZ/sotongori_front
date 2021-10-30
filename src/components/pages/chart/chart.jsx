import React, { useState, useEffect } from 'react';
import { Link, HashRouter, BrowserRouter, MemoryRouter, Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss'

import project from './assets/img/project.jpg';
import bobel from './assets/img/bobel.png';
import ksu from './assets/img/ksu.jpg';
import vitamin from './assets/img/vitamin.jpg';
import hyouth from './assets/img/hyouth.jpg';
import volteer from './assets/img/volteer.jpg';
import deunsol from './assets/img/deunsol.jpg';

import ScatterChartGen from './assets/js/scatter';
import StockChartGen from './assets/js/stock';
import BarChartGen from './assets/js/bar';

import urlAdr from '../../../url';

const Chart = (props) => {
    const [organ, setOrgan] = useState('default');
    const [organVisit, setOrganVisit] = useState('');
    const [organUrl, setOrganUrl] = useState(project);

    useEffect(async () => {
        let imgUrl = project;
        switch (props.match.params.data) {
            case 'project': imgUrl = project; break;
            case 'bobel': imgUrl = bobel; break;
            case 'ksu': imgUrl = ksu; break;
            case 'vitamin': imgUrl = vitamin; break;
            case 'hyouth': imgUrl = hyouth; break;
            case 'volteer': imgUrl = volteer; break;
            case 'deunsol': imgUrl = deunsol; break;
            default: imgUrl = project; break;
        }

        const url = `${urlAdr}/api/sotong/organ/${props.match.params.data}`
        const getName = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Authorization: `jwt ${localStorage.getItem('token')}`
            }
        });
        var organName = await getName.json();

        const urlV = `${urlAdr}/api/sotong/visitor/${props.match.params.data}`
        const getVisit = await fetch(urlV, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Authorization: `jwt ${localStorage.getItem('token')}`
            }
        });
        var visitInfo = await getVisit.json();
        await setOrgan(organName.name);
        await setOrganVisit(visitInfo);
        await setOrganUrl(imgUrl);

        ScatterChartGen(props.match.params.data, organ);
        StockChartGen(props.match.params.data, organ)
        BarChartGen(props.match.params.data, organ)
    }, []);

    return (
        <>
            <section className="organ_banner" style={{ backgroundImage: `url(${organUrl})` }}>
                <Link className="to-home" to='/'>
                    <span className="material-icons to-home">arrow_back</span>
                </Link>
                <div className="banner-inwrapper">
                    <h1 className="organ-name">{organ}</h1>
                    <div className="organ-attr">
                        <p className="attr-itm">누적 방문자수 <strong>{organVisit.totaluser}</strong>명</p>
                        <p className="attr-itm">일일 방문자수 <strong>{organVisit.todayuser}</strong>명</p>
                        <p className="attr-itm">일일 평균 방문자수 <strong>{organVisit.avguser}</strong>명</p>
                        <p className="attr-itm">일일 최대 방문자수 <strong>{organVisit.maxuser}</strong>명</p>
                    </div>
                </div>
            </section>
            <div className="chart" id="scatter"></div>
            <div className="chart" id="stock"></div>
            <div className="chart" id="bar"></div>
        </>
    );
}

export default hot(module)(Chart);