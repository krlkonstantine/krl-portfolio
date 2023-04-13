import React from 'react';
import skillStyle from './Skill.module.scss'

export type SkillType = {
    skillImg: string
    skillTitle: string
    skillDescription: string
}

export const Skill = (props: SkillType) => {
    return (
        <div className={skillStyle.skillContainer}>
            <div className={skillStyle.iconContainer}>
                <img className={skillStyle.skillIcon} src={props.skillImg} alt={props.skillTitle}/></div>
            <h3 className={skillStyle.skillTitle}>{props.skillTitle}</h3>
            <span className={skillStyle.skillDescription}>
                {props.skillDescription} </span>
        </div>
    );
};
