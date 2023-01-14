import React from 'react';
import certainWorkStyle from './CertainWork.module.css'

export type WorksType = {
    workImg: string
    workAddress: string
    skillTitle: string
    skillDescription: string
}

export const CertainWork = (props: WorksType) => {
    return (
        <div className={certainWorkStyle.certainWorkContainer}>
            <div className={certainWorkStyle.iconContainer}>
                <img className={certainWorkStyle.certainWorkIcon} src={props.workImg} alt={props.skillTitle}/>
                <button className={certainWorkStyle.watchWorkBtn}>Watch</button>
            </div>
            <h3 className={certainWorkStyle.certainWorkTitle}>{props.skillTitle}</h3>
            <span className={certainWorkStyle.certainWorkDescription}>
                {props.skillDescription} </span>
        </div>
    );
};
