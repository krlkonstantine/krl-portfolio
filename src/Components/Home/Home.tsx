import React from 'react';
import homeStyle from './Home.module.scss'

type AboutMePropsType = {
    style: any
}

export const Home = (props:AboutMePropsType) => {
    return (
        <div className={homeStyle.mainHome}>
            <div className={homeStyle.basicContainer}>
                <div className={homeStyle.greetingText}>
                    <span>Hi there!</span>
                    <h1>I am Konstantine Kornitsel</h1>
                    <p>A Frontend developer</p>
                </div>
                <div style={props.style} className={homeStyle.myPhotoContainer}>

                </div>
            </div>
        </div>
    );
};
