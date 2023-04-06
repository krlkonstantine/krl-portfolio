import React from 'react';
import stylesContact from './Contact.module.css'

export const Contact = () => {
    return (
        <div className={stylesContact.contactContainer}>
            <div className={stylesContact.basicContainer}>
                <div className={stylesContact.displText}>
                    Get in Touch
                </div>
                <form className={stylesContact.contactFormContainer} action="send">
                    <span className={stylesContact.sendMeAMessage}>Send me a message</span>
                    <input className={stylesContact.input} placeholder={"Name"} type="text"/>
                    <input className={stylesContact.input} placeholder={"Email"} type="text"/>
                    <textarea className={stylesContact.textArea} placeholder={"Tell me more about your needs..."} name=""
                              id="">
                    </textarea>
                </form>
                <button type="submit" className={stylesContact.frrelanceBtn}>
                    Send Message
                </button>

            </div>
        </div>
    );
};
