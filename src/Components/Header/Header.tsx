import React from 'react';
import hStyle from './Header.module.css'
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <div className={hStyle.headerMain}>
            <Nav/>

        </div>
    );
};
