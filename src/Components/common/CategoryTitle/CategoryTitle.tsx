import React from 'react';
import stylesTitle from './CategoryTitle.module.css'

type CategoryTitlePropsType = {
    phraseBeginning: string
    accentWord: string
}

export const CategoryTitle : React.FC<CategoryTitlePropsType> = (props) => {
    return (
        <div className={stylesTitle.titleContainer}>
            <h2> {props.phraseBeginning} <span>{props.accentWord}</span> </h2>
        </div>
    );
};
