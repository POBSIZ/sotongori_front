import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from '../base/header/header'
import Footer from '../base/footer/footer'
import Linker from '../linker/linker'

// import './assets/App.scss';

class App extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <Linker></Linker>
                <Footer></Footer>
            </>             
        );
    }
}

export default App;