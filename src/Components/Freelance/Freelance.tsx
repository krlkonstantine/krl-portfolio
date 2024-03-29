import React from 'react';
import stylesFreelance from './Freelance.module.scss'
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";

export const Freelance = () => {
    return (
        <div id="freelance" className={stylesFreelance.freelanceContainer}>
            <div className={stylesFreelance.infoAndBtnContainer}>
                <div className={stylesFreelance.categoryTitleContainer}>
                    <CategoryTitle phraseBeginning={"I am ready for Remote"} accentWord={" Cooperation"}/>
                </div>
                <button className={stylesFreelance.freelanceBtn}>
                    Hire me!
                </button>
            </div>
        </div>
    );
};
