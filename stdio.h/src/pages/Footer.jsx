import React from "react";

import './Footer.scss';

function Footer(){
    return(
        <div className="Footer">
            <div className="end">
                <div className="divider"></div>
                <div className="Footer-row">
                    <div className="credits">© 2024 stdio.h. All Right Reserved.</div>
                    <img src="./logo.png" className="logo"></img>
                </div>
            </div>
        </div>

    )
}

export default Footer;