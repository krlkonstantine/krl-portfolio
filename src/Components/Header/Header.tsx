import React from 'react';
import hStyle from './Header.module.scss'
import {Nav} from "./Nav/Nav";
import {BurgerNav} from "./BurgerNav/BurgerNav";

export const Header = () => {
    return (
        <div className={hStyle.headerMain}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};
