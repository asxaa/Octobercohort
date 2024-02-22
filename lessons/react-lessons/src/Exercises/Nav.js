// rfce - react functional components exports

import React from "react";

function Nav(props){

    return(
        <div>
            <nav>
                <ul>
                    <li><a href='https://www.w3schools.com/css/css_border.asp' target='_blank' rel='noreferrer'>{props.link1}</a></li>
                    <li><a href='https://www.w3schools.com/css/css_border.asp' target='_blank' rel='noreferrer'>{props.link2}</a></li>
                    <li><a href='https://www.w3schools.com/css/css_border.asp' target='_blank' rel='noreferrer'>{props.link3}</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
