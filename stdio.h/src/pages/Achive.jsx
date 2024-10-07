import React from "react";
import './Achive.scss';


import Navbar from "./Navbar";
import Footer from "./Footer";


function Achive(){
    return(
        <div className="Achive">
            <Navbar/>
            <div className="Achive-header">Achive</div> 
            <div className="Achive-list">
                <div className="Achive-text">1. 2023 RE-UP Cycle Thon(GREEN TECH MAKER) 대회 최수우상</div>
                <div className="Achive-text">2. 2023학년도 적응설계방 - 디자인 씽킹 우수팀 선정</div>
                <div className="Achive-text">3. 2023 한이음 ICT 멘토링 공모전</div>
                <div className="Achive-text">4. 2023 ST 커리어 경진대회 진로설계 부문 장려상 수상</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Achive;