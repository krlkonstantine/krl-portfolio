import React from 'react';
import homeStyle from './Home.module.css'
import stylesContainer from "../../common/styles/Container.module.css"

export const Home = () => {
    return (
        <div className={homeStyle.mainHome}>
            <div className={stylesContainer.basicContainer}>
                <div className={homeStyle.greetingText}>
                    <span>Hi there!</span>
                    <h1>I am Konstantine Kornitsel</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={homeStyle.myPhoto}>

                </div>
            </div>
        </div>
    );
};
