import React from 'react';
// import { Link } from 'react-router-dom';
import "./index.css"
import GitHubIcon from '@mui/icons-material/GitHub';


function Header(props) {

    return(
        
        <header>
            <div>
                <div className="header">
                    Brocks Portfolio
                    {/* <div className='icons'><GitHubIcon></GitHubIcon></div> */}
                    
                    
                </div>
                
            </div>
            {props.children}
        </header>
    );

}

export default Header;