import React from 'react';
// import { Link } from 'react-router-dom';
import "./index.css"



function Header(props) {

    return(
        
        <header>
            
                <div className="header">
                    Brock's Portfolio 
                    
                </div>
                {/* <div className="icons">
                    <h1>hello</h1>
                    <GitHubIcon></GitHubIcon>

                </div> */}
                
            
            {props.children}
        </header>
    );

}

export default Header;