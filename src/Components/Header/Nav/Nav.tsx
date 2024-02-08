import React from 'react';
import nStyle from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";
import {DownloadFileButton} from "../../common/CV_download/CVDownload";


export const Nav = () => {
    return (
        <div className={nStyle.navContainer}>
            <Link
                to="home"
                duration={500}
                delay={1000}
                //activeStyle={{color:"#28e98c",textDecoration:"none",fontSize:18}}
                activeClass="activeLink"
                className={nStyle.navBarLink}
                offset={-50}
            >Home</Link>
            <Link
                to="mySkills"
                duration={500}
                delay={1000}
                //activeStyle={{color:"#28e98c",textDecoration:"none",fontSize:18}}
                activeClass="activeLink"
                className={nStyle.navBarLink}
                offset={-50}
            >Skills</Link>
            <Link
                to="myProjects"
                duration={500}
                delay={1000}
                //activeStyle={{color:"#28e98c",textDecoration:"none",fontSize:18}}
                activeClass="activeLink"
                className={nStyle.navBarLink}
                offset={-50}
            >Projects</Link>
            <Link
                to="freelance"
                duration={500}
                delay={1000}
                //activeStyle={{color:"#28e98c",textDecoration:"none",fontSize:18}}
                activeClass="activeLink"
                className={nStyle.navBarLink}
                offset={-50}
            >Freelance</Link>
            <Link
                to="contact"
                duration={500}
                delay={1000}
                //activeStyle={{color:"#28e98c",textDecoration:"none",fontSize:18}}
                activeClass="activeLink"
                className={nStyle.navBarLink}
                offset={-50}
            >Contact</Link>
            <DownloadFileButton/>
            {/*<a className={nStyle.navBarLink} href="#mySkills">Skills</a>*/}
        </div>
    );
};
