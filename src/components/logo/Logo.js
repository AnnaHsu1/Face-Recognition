import React from "react";
import './Logo.css'
import logo from './logo.png'


const Logo = () => {
        return(
            <div className="ma3">
                <div className="innerLogo pa2">
                <img src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/344/external-machine-learning-automation-technology-flaticons-flat-circular-flat-icons.png" />
                </div>
            </div>
        );
    }

export default Logo;

// <img style={{paddingTop:'30px'}}src={logo} alt="logo" />