import React from 'react';
import stylesFreelance from './Freelance.module.scss'
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";

export const Freelance = () => {
    return (
        <div className={stylesFreelance.freelanceContainer}>
            <div className={stylesFreelance.infoAndBtnContainer}>
                <CategoryTitle phraseBeginning={"I am ready for Remote"} accentWord={" Cooperation"}/>
                <button className={stylesFreelance.freelanceBtn}>
                    Hire me!
                </button>
            </div>
        </div>
    );
};
