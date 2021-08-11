import React from 'react';
import { Link } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss'

import timg from './assets/img/test.jpg'

class Home extends React.Component {

    props = this.props;

    constructor(props) {
        super(props);
        this.state={}
    }

    async componentWillMount(){}

    async componentDidMount(){
        console.log(this.props.location)
    }

    render() {
        return (
            <>
                {
                    [...Array(10)].map((item, i)=>{
                        return(
                            <div className="move" key={i}>
                                <Link to={{pathname:`new/${i}`}}>{i}</Link>
                            </div>
                        )
                    })
                }
                {/* <img src={timg} alt="" /> */}
            </>
        );
    }
}

export default hot(module)(Home);