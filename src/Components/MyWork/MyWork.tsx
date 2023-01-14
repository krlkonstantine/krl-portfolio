import React from 'react';
import myWorkStyles from './MyWork.module.css'
import {CertainWork, WorksType} from "./CertainWork/CertainWork";


export const MyWork = () => {

    const MyWorks: WorksType[] = [
        {
            workImg: "https://livecodestream.dev/post/top-productivity-tools-for-react-developers/featured.jpg",
            workAddress: "https://www.google.com/search?rlz=1C1CHBD_ruRU969RU970&sxsrf=AJOqlzUxMAs-nGTb2ENHrk1PSEptCRuogg:1673672763248&q=Hi+there&spell=1&sa=X&ved=2ahUKEwju9Zf0pMb8AhVq_SoKHTU1CokQBSgAegQIHRAB&biw=1280&bih=881&dpr=1",
            skillTitle: "Frontend",
            skillDescription: "This project consisted in developing the frontend part of a website with the backend part prepared"
        },
        {
            workImg: "https://contentstatic.techgig.com/photo/88751917/7-programming-languages-every-beginner-should-explore.jpg?35120",
            workAddress: "https://www.google.com/search?q=%D0%A0%D1%84%D0%BC%D1%83+%D1%84+%D1%82%D1%88%D1%83+%D0%B2%D1%84%D0%BD&rlz=1C1CHBD_ruRU969RU970&oq=%D0%A0%D1%84%D0%BC%D1%83+%D1%84+%D1%82%D1%88%D1%83+%D0%B2%D1%84%D0%BD&aqs=chrome..69i57j0i13i512l9.14956j1j9&sourceid=chrome&ie=UTF-8",
            skillTitle: "Company's 1st website",
            skillDescription: "I developed a website for a company which has no website before. This helped to increase profits by 149% in the first quarter!"
        }
    ]
    return (
        <div className={myWorkStyles.mainContainer}>
            <div className={myWorkStyles.worksCategoryContainer}>
                <h2 className={myWorkStyles.workCategoryTitle}>
                    My work
                </h2>
                <div className={myWorkStyles.workContainer}>
                    {MyWorks.map( certainWork =>
                        <CertainWork workImg={certainWork.workImg}
                                     workAddress={certainWork.workAddress}
                                     skillTitle={certainWork.skillTitle}
                                     skillDescription={certainWork.skillDescription}/>
                    )}
                </div>

            </div>
        </div>
    );
};
