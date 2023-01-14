import React from 'react';
import homeStyle from './Home.module.css'

export const Home = () => {
    return (
        <div className={homeStyle.mainHome}>
            <div className={homeStyle.basicContainer}>
                <div className={homeStyle.greetingText}>
                    <span>Hi there!</span>
                    <h1>I am Konstantine Kornitsel</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={homeStyle.myPhoto}>
{/*
                    <img className={homeStyle.img} src="https://avatars.githubusercontent.com/u/82206018?v=4" alt=""/>
*/}
                </div>
            </div>
        </div>
    );
};
