import React from 'react';
import stylesFooter from './Footer.module.scss'

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
                    <a href={socialMediaLinks.fb} target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                             src="https://louisville.edu/english/images/facebookicon.png/image"
                                                                             alt="fb-logo"/></a>
                    <a href={socialMediaLinks.vk} target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                             src="https://cdn-icons-png.flaticon.com/512/2111/2111747.png"
                                                                             alt="vk-logo"/></a>
                    <a href={socialMediaLinks.tg} target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                                                                              alt="tg-logo"/></a>
                    <a href={socialMediaLinks.gt} target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                             src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                                                                             alt="gitHub-logo"/></a>

                </div>
                <span className={stylesFooter.copyryghtText}>
                    Copyright © 2023 KornitselDev. All rights reserved.
                </span>

            </div>
        </div>
    );
};
