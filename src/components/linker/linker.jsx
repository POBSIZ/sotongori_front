import React from 'react';
import { Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import home from '../pages/home/home';
import NewTest from '../pages/test/new';
import Chart from '../pages/chart/chart';

import './assets/style.scss';

class Linker extends React.Component {
    render() {
        return (
            <main className="main">
                <Switch>
                    <Route exact path="/" component={home}/>
                    <Route path="/chart/:data" component={Chart}/>
                </Switch>
            </main>
        );
    }
}

export default hot(module)(Linker);