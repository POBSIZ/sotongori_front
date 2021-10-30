import React from 'react';
import { Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Home from '../pages/home/home';
import Chart from '../pages/chart/chart';
import NotFound from '../pages/err/notfound';


import './assets/style.scss';

const Linker = () => {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/chart/:data" component={Chart}></Route>
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}

export default hot(module)(Linker);