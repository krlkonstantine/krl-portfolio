import React from 'react';
import skillStyle from './Skill.module.scss'
import {CategoryTitle} from "../../common/CategoryTitle/CategoryTitle";

export type SkillType = {
    skillImg: string
    skillTitle: string
}

export const Skill = (props: SkillType) => {
    return (
        <div className={skillStyle.skillContainer}>
            <div className={skillStyle.iconContainer}>
                <img className={skillStyle.skillIcon} src={props.skillImg} alt={props.skillTitle}/></div>
            <CategoryTitle phraseBeginning={props.skillTitle} />
        </div>
    );
};
