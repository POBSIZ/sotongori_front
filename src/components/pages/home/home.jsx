import React from 'react';
import { Link } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss'

import timg from './assets/img/test.jpg'
import banner from './assets/img/banner.jpg'
import bobel from './assets/img/bobel.png'

class Home extends React.Component {

    props = this.props;

    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        return (
            <>
                <ul className="organ_list">

                    <li className="organ">
                        <img className="organ-img" src={bobel} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={banner} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={timg} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={bobel} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={banner} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={timg} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={bobel} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={banner} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                    <li className="organ">
                        <img className="organ-img" src={timg} alt=""/>
                        <div className="organ_info">
                            <h3 className="info-name">카베 보벨르</h3>
                            <hr className="line"/>
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
                    </li>

                </ul>
            </>
        );
    }
}

export default hot(module)(Home);