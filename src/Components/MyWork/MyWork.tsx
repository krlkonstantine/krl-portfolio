import React from 'react';
import myWorkStyles from './MyWork.module.scss'
import {CertainWork, WorksType} from "./CertainWork/CertainWork";
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";
import todolistImg from "../../assets/img/todolistImg.jpg"
import rickMorty from "../../assets/img/rickMorty.jpg"
import flashCards from "../../assets/img/flashcards.jpg"
import itachi from "../../assets/img/itachi_pic.jpg"
import social from "../../assets/img/social.jpg"
import {Zoom} from "react-awesome-reveal";


export const MyWork = () => {

    const MyWorks: WorksType[] = [
        {
            key: 1,
            style: {
                backgroundImage: `url(${flashCards})`,
            },
            workImg: `úrl(${flashCards})`,
            workAddress: "https://rad-youtiao-a972f6.netlify.app",
            skillTitle: "Flash Cards Learning",
            skillDescription: "This is a teamwork project for developing a website for learning using flashcards - a quite useful learning method. Stack: React, RTK-Query, Typescript, React hook form, Zod, \n" +
                "React Router DOM, Storybook, Radix UI, TailWind"
        },
        {
            key: 2,
            style: {
                backgroundImage: `url(${rickMorty})`
            },
            workImg: `url(${rickMorty})`,
            workAddress: "https://rickandmorty-konstantine.vercel.app/",
            skillTitle: "Rick and Morty",
            skillDescription: "That's a small website built on Next.js, showing Rick and Morty characters, locations and episodes. Nice tip: here you can find out which character is still alive. Such a useful information!"
        },
        {
            key: 3,
            style: {
                backgroundImage: `url(${itachi})`,
            },
            workImg: `úrl(${itachi})`,
            workAddress: "https://character-edit.vercel.app/en",
            skillTitle: "RPG Character Edit",
            skillDescription: "An SPA through which users can edit characters in an abstract RPG game. The character can be exported and used by somebody else. Two languages available"
        },
        {
            key: 4,
            style: {
                backgroundImage: `url(${social})`,
            },
            workImg: `úrl(${social})`,
            workAddress: "https://krlkonstantine.github.io/Social_Network/",
            skillTitle: "Office Chat",
            skillDescription: "This is a social network which can be used as a office chat. A minimalistic design will not make employers spend too much time scrolling each-others pages and news feed"
        },
        {
            key: 5,
            style: {
                backgroundImage: `url(${todolistImg})`
            },
            workImg: `url(${todolistImg})`,
            workAddress: "https://github.com/krlkonstantine/Task-Manager-ToDo-List",
            skillTitle: "Task Manager (Todo List)",
            skillDescription: "A good task manager to boost your productivity. You can add new lists of tasks, delete and edit your tasks as you wish."
        }
    ]
    return (
        <div id="myProjects" className={myWorkStyles.mainContainer}>
            <div className={myWorkStyles.worksCategoryContainer}>
                <CategoryTitle phraseBeginning={'Featured'} accentWord={'Projects'}/>
                <div className={myWorkStyles.workContainer}>
                    {MyWorks.map(certainWork =>
                        <Zoom duration={900}>
                            <CertainWork key={certainWork.key}
                                         style={certainWork.style}
                                         workImg={certainWork.workImg}
                                         workAddress={certainWork.workAddress}
                                         skillTitle={certainWork.skillTitle}
                                         skillDescription={certainWork.skillDescription}/>
                        </Zoom>
                    )}
                </div>

            </div>
        </div>
    );
};
