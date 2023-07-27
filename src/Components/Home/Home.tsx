import React from 'react';
import homeStyle from './Home.module.scss'

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
                <div  className={homeStyle.greetingImgContainer}>
                    <div style={props.style} className={homeStyle.myImg}>

                    </div>
                </div>

            </div>

        </div>
    );
};
