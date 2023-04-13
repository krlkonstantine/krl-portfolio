import React from 'react';
import nStyle from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={nStyle.navContainer}>
            <a className={nStyle.navBarLink} href="">Home</a>
            <a className={nStyle.navBarLink} href="">About Me</a>
            <a className={nStyle.navBarLink} href="">What I Do</a>
            <a className={nStyle.navBarLink} href="">Resume</a>
            <a className={nStyle.navBarLink} href="">Portfolio</a>
            <a className={nStyle.navBarLink} href="">Contact</a>

        </div>
    );
};
