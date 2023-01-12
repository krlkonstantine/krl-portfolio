import React from 'react';
import nStyle from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={nStyle.navContainer}>
            <a className={nStyle.NavBarLink} href="">Home</a>
            <a className={nStyle.NavBarLink} href="">About Me</a>
            <a className={nStyle.NavBarLink} href="">What I Do</a>
            <a className={nStyle.NavBarLink} href="">Resume</a>
            <a className={nStyle.NavBarLink} href="">Portfolio</a>
            <a className={nStyle.NavBarLink} href="">Contact</a>

        </div>
    );
};
