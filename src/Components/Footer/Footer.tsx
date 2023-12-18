import React from 'react';
import stylesFooter from './Footer.module.scss'
import {ReactComponent as LinkedLogo} from "../../assets/img/linked_in_logo.svg"
import {ReactComponent as CwLogo} from "../../assets/img/cw_logo.svg"
import {ReactComponent as TgLogo} from "../../assets/img/tg_icon.svg"
import {ReactComponent as GitLogo} from "../../assets/img/git_icon.svg"
import {Bounce} from "react-awesome-reveal";

export const Footer = () => {

    let socialMediaLinks = {
        in: "https://www.linkedin.com/in/front-end-konstantiner/",
        cw: "https://www.codewars.com/users/KrlKonstantine",
        tg: "https://t.me/kornitsel/",
        gt: "https://github.com/krlkonstantine/",
    }

    return (
        <div className={stylesFooter.footerContainer}>
            <div className={stylesFooter.footerContentContainer}>
                <div className={stylesFooter.displText}>
                    Konstantine
                </div>
                <div className={stylesFooter.sNetworksImgLinksContainer}>
                    <a href={socialMediaLinks.gt} target="_blank">
                        <Bounce>
                            <GitLogo className={stylesFooter.sNetworksLogo}/>
                        </Bounce>
                    </a>
                    <a href={socialMediaLinks.tg} target="_blank">
                        <Bounce>
                            <TgLogo className={stylesFooter.sNetworksLogo}/>
                        </Bounce>
                    </a>
                    <a href={socialMediaLinks.in} target="_blank">
                        <Bounce>
                            <LinkedLogo className={stylesFooter.sNetworksLogo}/>
                        </Bounce>
                    </a>
                    <a href={socialMediaLinks.cw} target="_blank">
                        <Bounce>
                            <CwLogo className={stylesFooter.sNetworksLogo}/>
                        </Bounce>
                    </a>


                </div>

                <span className={stylesFooter.copyrightText}>
                    Copyright © 2023 KornitselDev. All rights reserved.
                </span>

            </div>
        </div>
    );
};
