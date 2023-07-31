import React, {useState} from 'react';
import brgStyle from './BurgerNav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";
import menuLogo from "../../../assets/img/r_native_logo.webp"
import {ReactComponent as MenuLogo} from "../../../assets/img/menu_4.svg"


export const BurgerNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const onBurgerMenuClickHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={brgStyle.burgerNavContainer}>
            <div className={isMenuOpen
                ? `${brgStyle.burgerNavItems} ${brgStyle.show}`
                : brgStyle.burgerNavItems}>
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
            <div onClick={onBurgerMenuClickHandler} className={brgStyle.burgerButton}>
                <MenuLogo className={brgStyle.menuIcon}/>
            </div>
        </div>
    );
};
