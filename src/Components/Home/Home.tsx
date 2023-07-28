import React from 'react';
import homeStyle from './Home.module.scss'
import {TsParticles} from "../common/Particles/TsParticles";
import {AttentionSeeker} from "react-awesome-reveal";
import {Slide } from "react-awesome-reveal";


class Properties<T, U> {
}

type AboutMePropsType = {
    style: Properties<string | number, string & {}>
}

export const Home = (props: AboutMePropsType) => {
    return (
        <div className={homeStyle.mainHome}>
            <div className={homeStyle.greetingContainer}>

                <div className={homeStyle.greetingTextContainer}>
                    <span className={homeStyle.mainHello}>Hello there!</span>
                    <h1>My name is <span>Konstantine</span></h1>
                    <p className={homeStyle.shortPrestext}>I'm a Frontend developer, working with React-Redux</p>
                </div>
                <Slide direction={"right"} duration={1200}>
                    <div className={homeStyle.greetingImgContainer}>
                        <div style={props.style} className={homeStyle.myImg}>

                        </div>
                    </div>
                </Slide >
                <TsParticles />
            </div>

        </div>
    );
};
