import React from 'react';
import homeStyle from './Home.module.scss'
import {TsParticles} from "../common/Particles/TsParticles";
import {Slide} from "react-awesome-reveal";
import Typewriter from 'react-ts-typewriter';
import {Tilt} from 'react-tilt'
import {defaultOptions} from "../common/ReactTilt/react-tilt-params";


class Properties<T, U> {
}

type AboutMePropsType = {
    style: Properties<string | number, string & {}>
}

export const Home = (props: AboutMePropsType) => {
    return (
        <div id="home" className={homeStyle.mainHome}>
            <div className={homeStyle.greetingContainer}>

                <div className={homeStyle.greetingTextContainer}>
                    <span className={homeStyle.mainHello}>Hello there!</span>
                    <h1>My name is <span>Konstantine</span></h1>
                    <p className={homeStyle.shortPrestext}>
                        <Typewriter delay={30} random={50} speed={60}
                                    text={"I'm a Frontend developer, working with React-Redux. Hi, I am a frontend developer with experience in creating\n" +
                                        "SPA using React & RTK (+Query) and TypeScript.\n" +
                                        "I'm an effective team player with strong interpersonal skills,\n" +
                                        "always looking forward to improving my expertise.\n" +
                                        "My next professional goal is to master React Native\n" +
                                        "and Angular. I have proven strengths in organizational skills,\n" +
                                        "effective management and responsibility. Open to your\n" +
                                        "suggestions."}/>
                    </p>
                </div>

                <Slide direction={"right"} duration={1200}>
                    <div className={homeStyle.greetingImgContainer}>
                        <Tilt options={defaultOptions}>
                            <div style={props.style} className={homeStyle.myImg}>
                            </div>
                        </Tilt>
                    </div>
                </Slide>

                <TsParticles/>
            </div>

        </div>
    );
};
