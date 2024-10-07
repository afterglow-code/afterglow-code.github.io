import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

import './Home.scss';

import Navbar from "./Navbar";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <Navbar/>

            {/* Home 0번*/}
            <div className="Home">
                <div className="Home-container">
                    <div className="Home-content">
                        <h1 className="Home-text-main">스마트ICT융합공학과<br/>학술동아리 stdio.h</h1>
                        <div className="Home-text-sub">stdio.h는 스마트ICT융합공학과 유일 학술동아리 입니다.<br/>
                            장학금 안내, 전공 스터디, 아두이노 실습 등 다양한 프로그램을 통해<br/>
                            동아리원과 함께 성장하는 동아리 입니다.
                        </div>
                    </div>

                    <div className="Home-action">
                        <div className="Home-admission">지원하기</div>
                        <Link to = "/detail" className="Home-detail-link">더 알아보기</Link>
                    </div>
                </div>
            </div>

            {/* Home 1번*/}
            <div className="Home-1">
                <div className="Home-1-container">
                    <div className="Home-1-content">
                        <h1 className="Home1-text-main">stdio.h<br/>자율적인 동아리</h1>
                        <div className="Home1-text-sub">stdio.h는 여러분의 자율적인 참여로 운영됩니다.<br/>
                            더 높은 학문적 수준의 도달과 공학적 문제 해결 능력, 협업 능력 함양, 친목 등을 목<br/>
                            표로 함께 성장하는 동아리 입니다.
                        </div>
                    </div>
                    <img className="Home-1-pic" src="./Home-1.png"></img>
                </div>
            </div>

            {/* Home 2번*/}
            <div className="Home-2">
                <div className="Home-2-wrapper-align">
                    <div className="Home-2-title-wrapper">
                        <div className="Home-2-title">
                            <h2 className="Heading">stdio.h</h2>
                            <div className="text">다양한 프로그램을 바탕으로 함께 성장합니다.<br/>
                                다양한 활동과 자율적인 참여로 열린 동아리를 만들어 갑니다.
                            </div>
                        </div>

                    </div>

                    <div className="Home-2-content">
                        <div className="Home-2-Row">
                            <div className="Home-2-column">
                                <img className="book" src="./book-open-cover.svg"></img>
                                <h4 className="Home-2-column-heading">학교생활, 진로설계, 친목</h4>
                                <div className="text">장학금 길라잡이, 진로설계 길라잡이, 다양한 친목행사를 진행합니다.</div>
                            </div>

                            <div className="Home-2-column">
                                <img className="book" src="./book-open-cover.svg"></img>
                                <h4 className="Home-2-column-heading">전공 스터디</h4>
                                <div className="text">전공과목에 대한 스터디를 진행합니다.</div>
                            </div>

                            <div className="Home-2-column">
                                <img className="book" src="./book-open-cover.svg"></img>
                                <h4 className="Home-2-column-heading">프로젝트 참여</h4>
                                <div className="text">경진대회, 공모전, 동아리 내부 프로젝트 등<br/>다양한 활동을 통해 경험을 만들어갑니다.</div>
                            </div>
                        </div>
                    </div>

                    <div className="Home-2-action">
                        <Link to = "/detail" className="Home-2-detail-link">더 알아보기</Link>
                        <div className="Home-2-admission-wrapper">
                            <div className="Home-2-admission">지원하기</div>
                            <img className="right" src="./angle-right.svg"></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* Home 3번 FAQ*/}
            <div className="Home-FAQ">
                <div className="FAQ-container">
                    <div className="FAQ-title-wrapper">
                        <div className="FAQ-title-list">
                            <h2 className="FAQ-title-header">자주 묻는 질문</h2>
                            <div className="FAQ-title-text">동아리 활동에 대해 자주 묻는 질문과 답변을 확인하세요.</div>
                        </div>
                    </div>

                    <div className="Accordion-List">
                        <div className="Accordion-item">
                            <div className="Q">
                                <div className="Q-text">동아리 가입 방법은?</div>
                                <img className="up-icon" src="./angle-up.svg"></img> 
                            </div>
                            <div className="A">
                                <div className="A-text">동아리 지원하기를 통해 지원하시면 연락드리겠습니다.</div>
                            </div>
                        </div>


                        <div className="Accordion-item">
                            <div className="Q">
                                <div className="Q-text">동아리 회비는?</div>
                                <img className="up-icon" src="./angle-up.svg"></img> 
                            </div>
                            <div className="A">
                                <div className="A-text">동아리 회비는 없습니다.<br/>
                                    다만, 대회참여, 자재 구입 등 불가피한 경우 활동에 참여한 인원들과 금액을 분담할 수 있습니다.
                                </div>
                            </div>
                        </div>

                        <div className="Accordion-item">
                            <div className="Q">
                                <div className="Q-text">경험이 없어도 프로젝트(대회)참여가 가능한가요?</div>
                                <img className="up-icon" src="./angle-up.svg"></img> 
                            </div>
                            <div className="A">
                                <div className="A-text">그럼요! stdio.h의 모든 활동은 학년, 경험 등에 제한을 두지 않습니다.<br/>
                                    하고싶다는 의지 하나면 충분합니다!
                                </div>
                            </div>
                        </div>

                        <div className="Accordion-item">
                            <div className="Q">
                                <div className="Q-text">지원 자격은?</div>
                                <img className="up-icon" src="./angle-up.svg"></img> 
                            </div>
                            <div className="A">
                                <div className="A-text">스마트ICT융합공학과 또는 전자IT미디어공학과(미디어트랙) 학생(학년무관)이면 누구나 가능합니다!</div>
                            </div>
                        </div>

                        <div className="Accordion-item">
                            <div className="Q">
                                <div className="Q-text">활동 소식은 어디서?</div>
                                <img className="up-icon" src="./angle-up.svg"></img> 
                            </div>
                            <div className="A">
                                <div className="A-text">동아리 활동 소식은 이 페이지 Achive 탭이나 네이버 카페 stdio.h를 참조해주세요.</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        
    )
}
export default Home;

