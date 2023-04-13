import React from 'react';
import homeStyle from './Home.module.scss'
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";

type AboutMePropsType = {
    style: any
}

export const Home = (props: AboutMePropsType) => {
    return (
        <div className={homeStyle.mainHome}>
                <div className={homeStyle.greetingAngImgContainer}>

                    <div className={homeStyle.greetingTextContainer}>
                        <span className={homeStyle.mainHello}>Hello there!</span>
                        <h1>My name is <span>Konstantine</span></h1>
                        <p className={homeStyle.shortPrestext}>I'm a Frontend developer, working with React-Redux</p>
                    </div>
                    <div style={props.style} className={homeStyle.greetingImgContainer}>

                    </div>

            </div>

        </div>
    );
};
