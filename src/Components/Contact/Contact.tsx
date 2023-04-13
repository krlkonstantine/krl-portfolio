import React from 'react';
import stylesContact from './Contact.module.scss'
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";

export const Contact = () => {
    return (
        <div className={stylesContact.contactContainer}>
            <div className={stylesContact.formContainer}>
                <div className={stylesContact.categoryTitleContainer}>
                    <CategoryTitle phraseBeginning={"Contact"} />
                </div>
                <form className={stylesContact.contactForm} action="send">
                    <span className={stylesContact.sendMeAMessage}>Send me a message</span>
                    <input className={stylesContact.input} placeholder={"Name"} type="text"/>
                    <input className={stylesContact.input} placeholder={"Email"} type="text"/>
                    <textarea className={stylesContact.textArea} placeholder={"Tell me more about your needs..."} name=""
                              id="">
                    </textarea>
                </form>
                <button type="submit" className={stylesContact.sendButton}>
                    Send Message
                </button>

            </div>
        </div>
    );
};
