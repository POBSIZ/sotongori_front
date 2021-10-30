import React from 'react';
import { Link } from "react-router-dom";
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

const Home = () => {
    return (
        <>
            <h1 className="organ-title">함께하는 기관</h1>
            <ul className="organ_list">

                <Link className="organ" to={{ pathname: `chart/project` }}>
                    <img className="organ-img" src={project} alt="" />
                    <div className="organ_info">
                        <h3 className="info-name">PROJECT</h3>
                        <hr className="line" />
                        <span className="info-locate">
                            위치: 부산광역시 남구 전포대로 77번길 39-2
                        </span>
                        <p className="info-text">
                            부산 연합 소프트웨어 동아리
                        </p>
                    </div>
                </Link>

                <Link className="organ" to={{ pathname: `chart/volteer` }}>
                    <img className="organ-img" src={volteer} alt="" />
                    <div className="organ_info">
                        <h3 className="info-name">자원봉사센터</h3>
                        <hr className="line" />
                        <span className="info-locate">
                            위치: 부산광역시 남구 전포대로 77번길 39-2
                        </span>
                        <p className="info-text">
                            자원봉사센터
                        </p>
                    </div>
                </Link>

                <Link className="organ" to={{ pathname: `chart/hyouth` }}>
                    <img className="organ-img" src={hyouth} alt="" />
                    <div className="organ_info">
                        <h3 className="info-name">해운대 청소년 수련관</h3>
                        <hr className="line" />
                        <span className="info-locate">
                            위치: 부산광역시 남구 전포대로 77번길 39-2
                        </span>
                        <p className="info-text">
                            해운대 청소년 수련관
                        </p>
                    </div>
                </Link>

                <Link className="organ" to={{ pathname: `chart/deunsol` }}>
                    <img className="organ-img" src={deunsol} alt="" />
                    <div className="organ_info">
                        <h3 className="info-name">든솔 아카데미</h3>
                        <hr className="line" />
                        <span className="info-locate">
                            위치: 부산광역시 수영구 수영로 594번길 107
                        </span>
                        <p className="info-text">
                            든솔 아카데미
                        </p>
                    </div>
                </Link>

                <Link className="organ" to={{ pathname: `chart/ksu` }}>
                    <img className="organ-img" src={ksu} alt="" />
                    <div className="organ_info">
                        <h3 className="info-name">경성대학교</h3>
                        <hr className="line" />
                        <span className="info-locate">
                            위치: 부산광역시 수영구 수영로 594번길 107
                        </span>
                        <p className="info-text">
                            경성대학교 보건소
                        </p>
                    </div>
                </Link>

                <Link className="organ" to={{ pathname: `chart/vitamin` }}>
                    <img className="organ-img" src={vitamin} alt="" />
                    <div className="organ_info">
                        <h3 className="info-name">비타민 의원</h3>
                        <hr className="line" />
                        <span className="info-locate">
                            위치: 부산광역시 수영구 수영로 594번길 107
                        </span>
                        <p className="info-text">
                            비타민 의원
                        </p>
                    </div>
                </Link>

                <Link className="organ" to={{ pathname: `chart/bobel` }}>
                    <img className="organ-img" src={bobel} alt="" />
                    <div className="organ_info">
                        <h3 className="info-name">카베 보벨르</h3>
                        <hr className="line" />
                        <span className="info-locate">
                            위치: 부산광역시 수영구 수영로 594번길 107
                        </span>
                        <p className="info-text">
                            눈길을 사로잡는 화려한 인테리어는 없지만
                            밝고 차분하며 아주 편안한 분위기 입니다.
                            사진으로는 그 분위기가 다 담기지 않는데,
                            직접 방문하면 특유의 코지한 느낌이 있어요.
                        </p>
                    </div>
                </Link>

            </ul>
        </>
    );


}

export default hot(module)(Home);