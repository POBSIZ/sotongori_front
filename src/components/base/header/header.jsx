import React from 'react';
import { Link, HashRouter, BrowserRouter, browserHistory, MemoryRouter, Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { createBrowserHistory, createHashHistory } from 'history';
const newHistory = createBrowserHistory();
const hashHistory = createHashHistory();

// import CSS
import './assets/style.scss'

class Header extends React.Component {

    props = this.props;
    constructor(props) {
        super(props);
        this.state = {
            top: 0,
        }
    }
    
    componentDidMount(){
        var i = 0;
        var n = 0;
        setInterval(() => {
            if(i+1 > 4){
                i = 0;
                n = 0;
                this.setState({
                    top: 0
                })
                console.log(this.state.top)
            }else{
                this.setState({
                    top: n + 50
                })
                console.log(this.state.top)
                n += 50;
            }
            i++;
        }, 2000);
    }

    render() {
        return (
            <header className="header">
                <article className="header_content">
                    <section className="logo">PROJECT</section>

                    <section className="organ_changer">
                        <span>with</span>
                        <ul className="organ-list">
                            <div className="list-wrapper" style={{bottom: this.state.top}}>
                                <li className="organ">카페 보벨르</li>
                                <li className="organ">비타민 의원</li>
                                <li className="organ">방과후 든솔</li>
                                <li className="organ">동아대학교</li>
                                <li className="organ">해운대 구청</li>
                            </div>
                        </ul>
                        <hr className="line"/>
                    </section>

                    <section className="project_info">
                        <span className="info-num">No. 002</span>
                        <p className="info-text">
                            Corona 19 Pandemics have constrained many activities; 
                            reflecting this current situation, PROJECT has participated in creating a 
                            corona anti-virus kit to help society.
                        </p>
                    </section>
                    <hr className="line"/>
                </article>
                {/* <nav>
                    <Link to={{pathname:'/'}}>Home</Link>
                    <Link to={{pathname:'/new/hello'}}>New</Link>
                </nav> */}
            </header>             
        );
    }
}

export default hot(module)(Header);