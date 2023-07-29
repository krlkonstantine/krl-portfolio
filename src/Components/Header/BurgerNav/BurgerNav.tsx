import React from 'react';
import brgStyle from './BurgerNav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";


export const BurgerNav = () => {
    return (
        <div className={brgStyle.burgerNavContainer}>
            <div className={brgStyle.burgerNavItems}>
                <Link
                    to="home"
                    duration={500}
                    delay={1000}
                    className={brgStyle.navBarLink}
                    offset={-50}
                >Home</Link>
                <Link
                    to="mySkills"
                    duration={500}
                    delay={1000}
                    className={brgStyle.navBarLink}
                    offset={-50}
                >Skills</Link>
                <Link
                    to="myProjects"
                    duration={500}
                    delay={1000}
                    className={brgStyle.navBarLink}
                    offset={-50}
                >Projects</Link>
                <Link
                    to="freelance"
                    duration={500}
                    delay={1000}
                    className={brgStyle.navBarLink}
                    offset={-50}
                >Freelance</Link>
                <Link
                    to="contact"
                    duration={500}
                    delay={1000}
                    className={brgStyle.navBarLink}
                    offset={-50}
                >Contact</Link>
            </div>
            <div className={brgStyle.burgerButton}>

            </div>
        </div>
    );
};
