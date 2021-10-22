import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from '../base/header/header'
import Footer from '../base/footer/footer'
import Linker from '../linker/linker'

// import './assets/App.scss';

import urlAdr from '../../url';

class App extends React.Component {

    async componentDidMount(){

        const getToken = await fetch(`${urlAdr}/api/v1/auth/login/`,{
            method: 'POST',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                username: 'admin', 
                password: 'admin',
            })
        })
        const serToken = await getToken.json()
        window.localStorage.setItem('token', serToken.access_token)
    }

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