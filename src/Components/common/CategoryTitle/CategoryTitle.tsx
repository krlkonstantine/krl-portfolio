import React from 'react';
import stylesTitle from './CategoryTitle.module.scss'

type CategoryTitlePropsType = {
    phraseBeginning: string
    accentWord?: string
}

export const CategoryTitle: React.FC<CategoryTitlePropsType> = (props) => {
    return (
        <h2 className={stylesTitle.titleContainer}> {props.phraseBeginning} <span>{props.accentWord}</span></h2>
    );
};
