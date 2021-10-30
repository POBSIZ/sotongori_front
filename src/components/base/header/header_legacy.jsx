import React, {useEffect, useState} from 'react';
import { Link, HashRouter, BrowserRouter, browserHistory, MemoryRouter, Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import project from './assets/img/project.jpg';
import bobel from './assets/img/bobel.png';
import ksu from './assets/img/ksu.jpg';
import vitamin from './assets/img/vitamin.jpg';
import hyouth from './assets/img/hyouth.jpg';
import volteer from './assets/img/volteer.jpg';
import deunsol from './assets/img/deunsol.jpg';

// import CSS
import './assets/style.scss'

import urlAdr from '../../../url';

class OrganChanger extends React.Component {
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
            if(i+1 > 6){
                i = 0;
                n = 0;
                this.setState({
                    top: 0
                })
            }else{
                this.setState({
                    top: n + 50
                })
                n += 50;
            }
            i++;
        }, 2000);
    }

    render(){
        return(
            <section className="organ_changer">
                <span>with</span>
                <hr className="line"/>
                <ul className="organ-list">
                    <div className="list-wrapper" style={{bottom: this.state.top}}>
                        <li className="organ">PROJECT</li>
                        <li className="organ">자원 봉사센터</li>
                        <li className="organ">든솔 아카데미</li>
                        <li className="organ">청소년 수련관</li>
                        <li className="organ">경성대학교</li>
                        <li className="organ">비타민 의원</li>
                        <li className="organ">카페 보벨르</li>
                    </div>
                </ul>
            </section>
        )
    }
    
}


class Header extends React.Component {

    props = this.props;
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            currImg: project,
            imgList: [
                volteer, 
                deunsol,
                hyouth, 
                ksu, 
                vitamin, 
                bobel, 
                project, 
            ]
        }
    }
    
    async componentDidMount(){
        const url = `${urlAdr}/api/sotong/usercnt/`
        const getTotal = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        var totalVal = await getTotal.json();
        await this.setState({
            total: totalVal.count
        });

        var i = 0;
        setInterval(() => {
            if(i+1 > 7){
                i = 0;
                this.setState({
                    currImg: this.state.imgList[i]
                })
            }else{
                this.setState({
                    currImg: this.state.imgList[i]
                })
            }
            i++;
        }, 2000);
        
    }

    render() {
        return (
            <header className="header" style={{backgroundImage: `url(${this.state.currImg})`}}>
                <div className="header-inwrapper">
                    <article className="header_content">
                        <Link to={{pathname:`/`}}>
                            <section className="logo">PROJECT</section>
                        </Link>

                        <OrganChanger></OrganChanger>

                        <section className="project_info">
                            <span className="info-num">No. 002</span>
                            <p className="info-text">
                                코로나19 팬데믹으로 인해 많은 활동들에 제약이 생겼습니다. 
                                이런 현 상황을 반영하여 PROJECT는 코로나 방역 키트를 만들어 
                                사회에 도움이 되는 것을 목표로 참여하였습니다.
                            </p>
                        </section>
                        <hr className="line"/>
                        <h2 className="total">총 <strong>{this.state.total}</strong>명이 사용해주셨습니다.</h2>
                    </article>
                    <span className="material-icons down">expand_more</span>
                </div>
            </header>             
        );
    }
}

export default hot(module)(Header);