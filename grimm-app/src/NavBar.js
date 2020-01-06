import React from 'react';

function NavBar(props) {
    return ( 
        <ul>
            <li>Home</li>
            <li>About {props.name}</li>
            <li>{props.contact}</li>
        </ul>
    
    );
}

export default NavBar;
