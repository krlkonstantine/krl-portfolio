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
            workAddress: "https://www.google.com/search?rlz=1C1CHBD_ruRU969RU970&sxsrf=AJOqlzUxMAs-nGTb2ENHrk1PSEptCRuogg:1673672763248&q=Hi+there&spell=1&sa=X&ved=2ahUKEwju9Zf0pMb8AhVq_SoKHTU1CokQBSgAegQIHRAB&biw=1280&bih=881&dpr=1",
            skillTitle: "Todolist",
            skillDescription: "This project consisted in developing the frontend part of a website with the backend part prepared"
        },
        {
            key: 2,
            style: {
                backgroundImage: `url(${socialNetImage})`
            },
            workImg: `url(${socialNetImage})`,
            workAddress: "https://www.google.com/search?q=Have+a+nice+day&rlz=1C1CHBD_ruRU969RU970&oq=Have+a+nice+day&aqs=chrome..69i57j0i20i263i512l2j46i512j0i512l5j46i512.384j0j7&sourceid=chrome&ie=UTF-8",
            skillTitle: "Social Network",
            skillDescription: "I  developed a website for a company which has no website before. This helped to increase profits by 149% in the first quarter!"
        }
    ]

    return (
        <div className={myWorkStyles.mainContainer}>
            <div className={myWorkStyles.worksCategoryContainer}>
                <CategoryTitle phraseBeginning={'Featured'} accentWord={'Projects'} />
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
