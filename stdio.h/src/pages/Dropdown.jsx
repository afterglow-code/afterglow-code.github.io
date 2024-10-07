import React from "react";
import './Dropdown.scss';

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

export default Dropdown;