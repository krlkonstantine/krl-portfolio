import React from 'react';
import MySkillsContainer from './MySkills.module.css'
import {Skill} from "./Skill/Skill";
import stylesContainer from "../../common/styles/Container.module.css"


export const MySkills = () => {
    return (
        <div className={MySkillsContainer.mainSkills}>
            <div className={stylesContainer.basicContainer}>
            <span className={MySkillsContainer.skillsTitle}>
            </span>
                <Skill/>
            </div>
        </div>
    );
};
