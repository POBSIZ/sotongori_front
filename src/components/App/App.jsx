import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { BrowserRouter, HashRouter } from "react-router-dom";
import axios from 'axios';

import Header from '../base/header/header'
import Footer from '../base/footer/footer'
import Linker from '../linker/linker'

// import './assets/App.scss';

import urlAdr from '../../url';

const App = () => {

    useEffect(async () => {
        // const getToken = await fetch(`${urlAdr}/api/v1/auth/login`, {
        // const getToken = await fetch(`${urlAdr}/api/v1/board/1`, {
        //     credentials: 'include',
        //     method: 'GET',
        //     mode: 'cors',
        //     headers: {
        //         'Content-Type': 'text/plain',
        //         // 'Content-Type': 'application/json',
        //         // 'Accept': 'application/json',
        //     },
        //     // body: JSON.stringify({
        //     //     username: 'test',
        //     //     password: 'test1234@',
        //     // })
        // });
        // const serToken = await getToken.json();
        // console.log(serToken);
        // window.localStorage.setItem('token', serToken.access_token)

    }, []);

    return (
        <HashRouter>
            <>
                <Header></Header>
                <Linker></Linker>
                <Footer></Footer>
            </>
        </HashRouter>
    )
}

export default App;