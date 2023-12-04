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
        },
        {
            skillImg: reduxLogo,
            skillTitle: "Redux",
        },
        {
            skillImg: reactNativeLogo,
            skillTitle: "React Native",
        }
    ]
    return (

        <div id="mySkills" className={MySkillsContainer.mainSkills}>
            <div className={MySkillsContainer.skillsSpecialContainer}>
                <div className={MySkillsContainer.skillsTitle}>
                    <CategoryTitle phraseBeginning={'My'} accentWord={'Advantages'}/>
                </div>

                <div className={MySkillsContainer.skillsContainer}>
                    <Fade delay={700}>
                        {MySkills.map(skill =>
                            <Skill key={skill.skillTitle} skillImg={skill.skillImg} skillTitle={skill.skillTitle}
                                   />
                        )}
                    </Fade>
                </div>

            </div>
        </div>

    );
};
