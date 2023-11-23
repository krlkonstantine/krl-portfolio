import React from 'react';
import myWorkStyles from './MyWork.module.scss'
import {CertainWork, WorksType} from "./CertainWork/CertainWork";
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";
import todoImage from "../../assets/img/ToDoList.jpg"
import socialNetImage from "../../assets/img/sNetwork.jpg"
import {Zoom} from "react-awesome-reveal";


export const MyWork = () => {

    const MyWorks: WorksType[] = [
        {
            key: 1,
            style: {
                backgroundImage: `url(${todoImage})`,
            },
            workImg: `úrl(${todoImage})`,
            workAddress: "https://rad-youtiao-a972f6.netlify.app",
            skillTitle: "Flash Cards Learning",
            skillDescription: "This is a teamwork project for developing a website for learning using flashcards - a quite useful learning method. Stack: React, RTK-Query, Typescript, React hook form, Zod, \n" +
                "React Router DOM, Storybook, Radix UI, TailWind"
        },
        {
            key: 2,
            style: {
                backgroundImage: `url(${socialNetImage})`
            },
            workImg: `url(${socialNetImage})`,
            workAddress: "ffffffffffffffffffffffff",
            skillTitle: "Rick and Morty",
            skillDescription: "That's a small website built on Next.js, showind Rick and Morty characters, locations and episodes. Nice tip: here you can find out which character is still alive. Such a useful information!"
        },
        {
            key: 3,
            style: {
                backgroundImage: `url(${todoImage})`,
            },
            workImg: `úrl(${todoImage})`,
            workAddress: "https://krlkonstantine.github.io/Social_Network/",
            skillTitle: "Office Chat (Social Network)",
            skillDescription: "This is a social network which can be used as a office chat. A minimalistic design will not make employers spend too much time scrolling each-others pages and news feed"
        },
        {
            key: 4,
            style: {
                backgroundImage: `url(${socialNetImage})`
            },
            workImg: `url(${socialNetImage})`,
            workAddress: "ffffffffffffffffffffffff",
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
