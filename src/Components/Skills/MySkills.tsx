import React from 'react';
import MySkillsContainer from './MySkills.module.scss'
import {Skill, SkillType} from "./Skill/Skill";
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";


export const MySkills = () => {

    const MySkills: SkillType[] = [
        {
            skillImg: "https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png",
            skillTitle: "React",
            skillDescription: "Реакт Редакс ты знать будешь круто...Айти кама айти кама, камасутрааааааа! Реакт Редакс ты знать будешь круто..."
        },
        {
            skillImg: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png",
            skillTitle: "Redux",
            skillDescription: "Реакт Редакс ты знать будешь круто...Айти кама айти кама, камасутрааааааа! Реакт Редакс ты знать будешь круто..."
        },
        {
            skillImg: "https://cdn1.iconfinder.com/data/icons/soleicons-solid-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png",
            skillTitle: "React Native",
            skillDescription: "Реакт Редакс ты знать будешь круто...Айти кама айти кама, камасутрааааааа! Реакт Редакс ты знать будешь круто..."
        }
    ]
    return (
        <div className={MySkillsContainer.mainSkills}>
            <div className={MySkillsContainer.skillsSpecialContainer}>
                <div className={MySkillsContainer.skillsTitle}>
                    <CategoryTitle phraseBeginning={'My'} accentWord={'Advantages'}/>
                </div>
                <div className={MySkillsContainer.skillsContainer}>
                    {MySkills.map( skill =>
                        <Skill skillImg={skill.skillImg} skillTitle={skill.skillTitle} skillDescription={skill.skillDescription}/>
                    )}
                </div>

            </div>
        </div>
    );
};
