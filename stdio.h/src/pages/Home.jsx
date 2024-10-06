import React from "react";
import { useState } from "react";
import './Home.scss';

function Home(){
    return(
        <div>
            <Navbar/>
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
                        <div className="Home-detail-link">더 알아보기</div>
                    </div>
                </div>
            </div>
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
        </div>
        
    )
}
export default Home;

function Navbar(){
    const [view, setView] = useState(false);

    return(
        <div className="Nav-bar">
            <div className="Nav-wrapper">
                <div className="Content">
                    <div className="text-wrapper">
                        <img src="./logo.png" className="logo"></img>
                        <div className="Aboutus">About Us</div>
                        <div className="Achive">Achive</div>
                        <div className="Community">Community</div>
                        <div className="Dropdown-wrapper">
                            <div className="Click-area" onClick={() => {setView(!view)}}>
                                <div className="Program-Info">프로그램 안내</div>
                                <img src="./dropdown.png" className="Nav-Dropdown"></img>
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="Actions">
                    <div>지원하기</div>
                </div>
                
            </div>
            {view && <Dropdown/>}
        </div>
    )
}

function Dropdown(){
    return(
        <div className="Dropdown">
            <div className="Menu-List">
                <div className="List-title">전공기초 프로그램</div>
                <div className="List">
                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">장학금 길라잡이</div>
                            <div className="content-text-sub">선배가 알려주는 장학금 꿀팁</div>
                        </div>
                    </div>

                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">진로설계 길라잡이</div>
                            <div className="content-text-sub">나도 몰랐던 진로설계 팁</div>
                        </div>
                    </div>

                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">아두이노 실습</div>
                            <div className="content-text-sub">나도 할 수 있다! 아두이노</div>
                        </div>
                    </div>

                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">전공기초 스터디</div>
                            <div className="content-text-sub">하나보단 둘, 둘보단 셋!</div>
                            <div className="content-text-sub">전공 기초과목을 함께 스터디합니다.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Menu-List">
                <div className="List-title">전공심화 프로그램</div>
                <div className="List">
                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">전공심화 스터디</div>
                            <div className="content-text-sub">하나보단 둘, 둘보단 셋!</div>
                            <div className="content-text-sub">전공 심화과목을 함께 스터디합니다</div>
                        </div>
                    </div>

                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">공모전, 경진대회</div>
                            <div className="content-text-sub">다양한 대회 참가로 프로젝트 경험 만들기</div>
                        </div>
                    </div>
                </div>
                <div className="List-title">친목활동</div>
                <div className="List">
                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">MT 가나요?</div>
                            <div className="content-text-sub">원하신다면 언제든지</div>
                            <div className="content-text-sub">시험만 아니면 갑니다!</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Menu-List">
                <div className="List-title">지원하기</div>
                <div className="List">
                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">자주 묻는 질문</div>
                            <div className="content-text-sub">궁금해하실것 같아서 미리 준비했습니다</div>
                        </div>
                    </div>

                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">연락처</div>
                            <div className="content-text-sub">문의사항은 여기로 연락주세요!</div>
                        </div>
                    </div>

                    <div className="List-item">
                        <img className="rocket" src="./rocket.svg"></img>
                        <div className="List-ccontent-wrapper">
                            <div className="content-text-title">지원해요</div>
                            <div className="content-text-sub">여기에요 여기!</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

