import React from 'react';
import stylesFooter from './Footer.module.scss'
import {ReactComponent as FbLogo} from "../../assets/img/fb_icon.svg"
import {ReactComponent as VkLogo} from "../../assets/img/vk_icon.svg"
import {ReactComponent as TgLogo} from "../../assets/img/tg_icon.svg"
import {ReactComponent as GitLogo} from "../../assets/img/git_icon.svg"
import {Bounce} from "react-awesome-reveal";

export const Footer = () => {

    let socialMediaLinks = {
        fb: "https://www.facebook.com/krlkostya/",
        vk: "https://vk.com/kornitsel/",
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
                    <a href={socialMediaLinks.fb} target="_blank">
                        <Bounce>
                            <FbLogo className={stylesFooter.sNetworksLogo}/>
                        </Bounce>
                    </a>
                    <a href={socialMediaLinks.vk} target="_blank">
                        <Bounce>
                            <VkLogo className={stylesFooter.sNetworksLogo}/>
                        </Bounce>
                    </a><a href={socialMediaLinks.tg} target="_blank">
                    <Bounce>
                        <TgLogo className={stylesFooter.sNetworksLogo}/>
                    </Bounce>

                </a><a href={socialMediaLinks.gt} target="_blank">
                    <Bounce>
                        <GitLogo className={stylesFooter.sNetworksLogo}/>
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
