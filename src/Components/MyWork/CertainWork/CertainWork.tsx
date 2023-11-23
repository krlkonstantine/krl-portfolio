import React from 'react';
import certainWorkStyle from './CertainWork.module.scss'

export type WorksType = {
    key: number
    style: any
    workImg: string
    workAddress: string
    skillTitle: string
    skillDescription: string
}

export const CertainWork = (props: WorksType) => {
    return (
        <div className={certainWorkStyle.certainWorkContainer}>
            <div style={props.style} className={certainWorkStyle.imageContainer}>
                {/*<img className={certainWorkStyle.certainWorkIcon} src={props.workImg} alt={props.skillTitle}/>
                initially the images were displayed through position property
                the links were received via props. I decided to keep this old code
                just in case.
                If you're still reading this then thank you so much for cod review =3
                */}
                <span><a href={props.workAddress} target='_blank' className={certainWorkStyle.watchWorkBtn}>Watch</a>
            </span>
            </div>
            <h3 className={certainWorkStyle.certainWorkTitle}>{props.skillTitle}</h3>
            <span className={certainWorkStyle.certainWorkDescription}>
                {props.skillDescription} </span>
        </div>
    );
};
