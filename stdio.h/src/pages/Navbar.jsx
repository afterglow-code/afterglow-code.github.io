import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import './Navbar.scss';

import Dropdown from "./Dropdown";
import './Dropdown.scss';


function Navbar(){
    const [view, setView] = useState(false);

    return(
        <div className="Nav-bar">
            <div className="Nav-wrapper">
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
                
            </div>
            {view && <Dropdown/>}
        </div>
    )
}

export default Navbar;

