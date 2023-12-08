import React from 'react';
import MySkillsContainer from './MySkills.module.scss'
import {Skill, SkillType} from "./Skill/Skill";
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";
import reactLogo from "../../assets/img/react_logo.png"
import reduxLogo from "../../assets/img/redux_logo.svg"
import nextLogo from "../../assets/img/next_js_logo.png"
import typescriptLogo from "../../assets/img/ts_logo.svg"
import javascriptLogo from "../../assets/img/js_logo.svg"
import rtkQuery from "../../assets/img/rtk_query.jpg"
import axiosLogo from "../../assets/img/axios_logo.png"
import cssLogo from "../../assets/img/css_logo.svg"
import flexLogo from "../../assets/img/flexbox_logo.jpg"
import gitLogo from "../../assets/img/git_logo.svg"
import gitHubLogo from "../../assets/img/github_logo.svg"
import htmlLogo from "../../assets/img/html_logo.svg"
import jestLogo from "../../assets/img/jest_logo.svg"
import materialLogo from "../../assets/img/material_ui_logo.jpg"
import postmanLogo from "../../assets/img/postman_logo.svg"
import reactHookForm from "../../assets/img/react_hook_form_logo.png"
import zodLogo from "../../assets/img/zod_logo.png"
import tailwindLogo from "../../assets/img/tailwind_logo.svg"
import sassLogo from "../../assets/img/sass_logo.svg"
import storybookLogo from "../../assets/img/storybook_logo.svg"
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
            skillImg: typescriptLogo,
            skillTitle: "Typescript",
        },
        {
            skillImg: nextLogo,
            skillTitle: "Next.js",
        },
        {
            skillImg: rtkQuery,
            skillTitle: "RTK Query",
        },
        {
            skillImg: gitLogo,
            skillTitle: "Git",
        },
        {
            skillImg: gitHubLogo,
            skillTitle: "GitHub",
        },
        {
            skillImg: javascriptLogo,
            skillTitle: "Javascript",
        },
        {
            skillImg: storybookLogo,
            skillTitle: "Storybook",
        },
        {
            skillImg: tailwindLogo,
            skillTitle: "Tailwind CSS",
        },
        {
            skillImg: jestLogo,
            skillTitle: "Jest Testing",
        },
        {
            skillImg: axiosLogo,
            skillTitle: "Axios",
        },
        {
            skillImg: postmanLogo,
            skillTitle: "Postman",
        },
        {
            skillImg: reactHookForm,
            skillTitle: "React Hook Form",
        },
        {
            skillImg: zodLogo,
            skillTitle: "Zod Validation",
        },
        {
            skillImg: materialLogo,
            skillTitle: "Material UI",
        },
        {
            skillImg: flexLogo,
            skillTitle: "FlexBox",
        },
        {
            skillImg: sassLogo,
            skillTitle: "Sass",
        },
        {
            skillImg: cssLogo,
            skillTitle: "CSS",
        },
        {
            skillImg: htmlLogo,
            skillTitle: "HTML",
        },

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
