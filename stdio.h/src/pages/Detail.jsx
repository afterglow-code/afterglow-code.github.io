import React from "react";
import './Detail.scss';

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Detail(){
    return(
        <div className="Detail">
            <Navbar/>

            <div className="Detail-0">
                <div className="Detail-0-container">
                    <div className="Detail-0-content">
                        <div className="Detail-0-content-text-header">다양한 활동</div>
                        <div className="Detail-0-content-text">stdio.h는 다양한 활동들을 진행하고 있습니다.<br/>
                        교내 대회, 임베디드SW경진대회, RE-UP Cycle Thon, 한이음 공모전 참여 등 다양한 활동을 진행하고 있습니다.
                        </div>
                        <div className="Detail-0-content-text-alert">모든 활동은 자율적인 참여로 운영되며, 활동에 참여하는 인원들의 의견에 따라 변경될 수 있습니다.</div>
                    </div>
                    <img src="./robot.png" className="Detail-0-robot"></img>
                </div>
            </div>
            <div className="Detail-1-wrapper">
                <div className="Detail-1">
                    <div className="Detail-1-content">
                        <div className="Detail-1-content-text-header">장학금, 진로설계 길라잡이</div>
                        <div className="Detail-1-content-text"><b>장학금 길라잡이는</b><br/>
                        복잡한 장학선발 절차를 안내하고<br/>장학선발 지원을 위한 자기소개서, 장학금 수혜 후기 등을 공유합니다.</div>
                        <div className="Detail-1-content-text"><b>진로설계 길라잡이는</b><br/>
                        다양한 진로들을 소개하고 준비방법을 공유합니다.</div>
                    </div>

                    <div className="Detail-1-content">
                        <div className="Detail-1-content-text-header">전공, 기술 스터디</div>
                        <div className="Detail-1-content-text"><b>전공 스터디에서는</b><br/>공학수학, 신호 및 시스템, 전력전자, 딥러닝 등<br/> 
                        전공 관련 소규모 스터디를 통해 전공이해도를 높입니다.</div>
                        <div className="Detail-1-content-text"><b>기술 스터디에서는</b><br/>HW/FW, SW, ML/DL 등 각 직무별로 스터디를 진행하며<br/> 
                        SW팀에서는 동아리 웹페이지 제작, 운영을 진행할 예정입니다.</div>
                    </div>



                    <div className="Detail-1-content">
                        <div className="Detail-1-content-text-header">아두이노, 라즈페리파이 실습</div>
                        <div className="Detail-1-content-text"><b>아두이노, 라즈베리파이</b>등을 이용해<br/>IOT제어, 모터 제어 등 다양한 실습을 진행합니다. </div>
                    </div>

                    <div className="Detail-1-content">
                        <div className="Detail-1-content-text-header">공모전, 경진대회</div>
                        <div className="Detail-1-content-text"><b>공모전, 경진대회를</b>통해 다양한 경험과 수상기회를 얻습니다.<br/>
                        임베디드SW경진대회, 한이음 등<br/>
                        다양한 공모전, 경진대회에 참여중입니다.</div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Detail;

