import React from 'react';
import certainWorkStyle from './CertainWork.module.scss'
import {Bounce} from "react-awesome-reveal";
import {ReactComponent as GitLogo} from "../../../assets/img/git_icon.svg"
import stylesFooter from "../../Footer/Footer.module.scss";


export type WorkType = {
    key: number
    style: any
    workImg: string
    deployLink: string
    skillTitle: string
    skillDescription: string
    gitLink?: string
}

export const CertainWork = (props: WorkType) => {
    return (
        <div className={certainWorkStyle.certainWorkContainer}>
            <div style={props.style} className={certainWorkStyle.imageContainer}>
                {/*<img className={certainWorkStyle.certainWorkIcon} src={props.workImg} alt={props.skillTitle}/>
                initially the images were displayed through position property
                the links were received via props. I decided to keep this old code
                just in case.
                If you're still reading this then thank you so much for cod review =3
                */}
                <span><a href={props.deployLink} target='_blank' className={certainWorkStyle.watchWorkBtn}>Watch</a>
            </span>
            </div>
            <h3 className={certainWorkStyle.certainWorkTitle}>
                <a href={props.gitLink} target="_blank">
                    <Bounce>
                        <GitLogo className={certainWorkStyle.sNetworksLogo}/>
                    </Bounce>
                </a>
                <a href={props.deployLink} target="_blank">
                    {props.skillTitle}
                </a>

            </h3>
            <span className={certainWorkStyle.certainWorkDescription}>
                {props.skillDescription} </span>
        </div>
    );
};
