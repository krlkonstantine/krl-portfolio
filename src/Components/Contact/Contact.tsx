import React from 'react';
import stylesContact from './Contact.module.scss'
import {CategoryTitle} from "../common/CategoryTitle/CategoryTitle";
import {Slide} from "react-awesome-reveal";

export const Contact = () => {
    return (
        <Slide duration={2000}>
        <div id="contact" className={stylesContact.contactContainer}>
            <div className={stylesContact.formContainer}>
                <CategoryTitle phraseBeginning={"Contact"}/>
                    <form className={stylesContact.contactForm} action="send">
                        <span className={stylesContact.sendMeAMessage}>Send me a message</span>
                        <input className={stylesContact.input} placeholder={"Name"} type="text"/>
                        <input className={stylesContact.input} placeholder={"Email"} type="text"/>
                        <textarea className={stylesContact.textArea} placeholder={"Tell me more about your needs..."}
                                  name=""
                                  id="">
                    </textarea>
                    </form>

                <button type="submit" className={stylesContact.sendButton}>
                    Send Message
                </button>

            </div>
        </div>
        </Slide>
    );
};
