import React from 'react';
import MySkillsContainer from './MySkills.module.css'
import commonContainer from "../../common/styles/Container.module.css"

export const MySkills = () => {
    return (
        <div className={MySkillsContainer.mainHome}>
            <div className={MySkillsContainer.basicContainer}>
                <div className={MySkillsContainer.greetingText}>
                    <span>Hi there!</span>
                    <h1>I am Konstantine Kornitsel</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={MySkillsContainer.myPhoto}>

                </div>
            </div>
        </div>
    );
};
