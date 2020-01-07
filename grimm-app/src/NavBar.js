import React from 'react';

function NavBar(props) {
    const navTabs = props.navTabs;
    const navItems = navTabs.map((navItem) => {
        return <li className="navlist">{navItem}</li>
    });
    return <ul className="nav">{navItems}</ul>
};

export default NavBar;
