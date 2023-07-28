import React from 'react';
import MySkillsContainer from './MySkills.module.scss'
import {Skill, SkillType} from "./Skill/Skill";
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";
import reactLogo from "../../assets/img/react_logo.png"
import reduxLogo from "../../assets/img/redux_logo.svg"
import reactNativeLogo from "../../assets/img/r_native_logo.webp"
import {Fade} from "react-awesome-reveal";


export const MySkills = () => {

    const MySkills: SkillType[] = [
        {
            skillImg: reactLogo,
            skillTitle: "React",
            skillDescription: "Реакт Редакс ты знать будешь круто...Айти кама айти кама, камасутрааааааа! Реакт Редакс ты знать будешь круто..."
        },
        {
            skillImg: reduxLogo,
            skillTitle: "Redux",
            skillDescription: "Реакт Редакс ты знать будешь круто...Айти кама айти кама, камасутрааааааа! Реакт Редакс ты знать будешь круто..."
        },
        {
            skillImg: reactNativeLogo,
            skillTitle: "React Native",
            skillDescription: "Реакт Редакс ты знать будешь круто...Айти кама айти кама, камасутрааааааа! Реакт Редакс ты знать будешь круто..."
        }
    ]
    return (
        <Fade delay={700}>
            <div className={MySkillsContainer.mainSkills}>
                <div className={MySkillsContainer.skillsSpecialContainer}>
                    <div className={MySkillsContainer.skillsTitle}>
                        <CategoryTitle phraseBeginning={'My'} accentWord={'Advantages'}/>
                    </div>
                    <div className={MySkillsContainer.skillsContainer}>
                        {MySkills.map(skill =>
                            <Skill skillImg={skill.skillImg} skillTitle={skill.skillTitle}
                                   skillDescription={skill.skillDescription}/>
                        )}
                    </div>

                </div>
            </div>
        </Fade>
    );
};
