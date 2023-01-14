import React from 'react';
import stylesFreelance from './Freelance.module.css'

export const Freelance = () => {
    return (
        <div className={stylesFreelance.freelanceContainer}>
            <div className={stylesFreelance.basicContainer}>
                <div className={stylesFreelance.greetingText}>
                    I'm ready for remote cooperation
                </div>
                <button className={stylesFreelance.frrelanceBtn}>
                    Hire me
                </button>
            </div>
        </div>
    );
};
