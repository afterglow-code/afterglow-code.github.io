import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import MediaQuery, {useMediaQuery} from 'react-responsive'
import './Navbar.scss';

import {Dropdown, MDropdown} from "./Dropdown";
import './Dropdown.scss';


function Navbar(){
    const [view, setView] = useState(false);
    const [Mview, MsetView] = useState(false);
    const Mobile = ({children})=>{
        const isMobile = useMediaQuery({maxWidth: 800})
        return isMobile ? children : null
    }



    return(
        <div className="Nav-bar">
            <MediaQuery minWidth={801}>
                <div className="Nav-wrapper-Desktop">
                    <div className="Content">
                        <div className="text-wrapper">
                            <Link to = "/"><img src="./logo.png" className="logo"></img></Link> 
                            <Link to="/detail" className="Aboutus">About Us</Link>
                            <Link to="/achive" className="Link">Achive</Link>
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
                    {view && <Dropdown/>}
                </div>
            </MediaQuery>

            <Mobile>
                <div className="Nav-wrapper-Mobile">
                    <Link to = "/"><img src="./logo.png" className="logo"></img></Link>
                    <div className="Click-area" onClick={() => {MsetView(!Mview)}}>
                        <img src="./grip-dots.svg" className="down"></img> 
                    </div>
                </div>
                {Mview && <MDropdown/>}
            </Mobile>
            
        </div>
    )
}

export default Navbar;

