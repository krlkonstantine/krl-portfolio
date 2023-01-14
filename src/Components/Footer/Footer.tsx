import React from 'react';
import stylesFooter from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={stylesFooter.footerContainer}>
            <div className={stylesFooter.basicContainer}>
                <div className={stylesFooter.displText}>
                    Konstantine Kornitsel
                </div>
                <div className={stylesFooter.sNetworksImgLinksContainer}>
                    <a href="https://www.facebook.com/krlkostya/" target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                             src="https://louisville.edu/english/images/facebookicon.png/image"
                                                                             alt="fb-logo"/></a>
                    <a href="https://vk.com/kornitsel/" target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                             src="https://cdn-icons-png.flaticon.com/512/2111/2111747.png"
                                                                             alt="vk-logo"/></a>
                    <a href="https://t.me/kornitsel/" target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                                                                              alt="tg-logo"/></a>
                    <a href="https://github.com/krlkonstantine/" target="_blank"><img className={stylesFooter.sNetworksImgs}
                                                                             src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
                                                                             alt="gitHub-logo"/></a>

                </div>
                <span className={stylesFooter.frrelanceBtn}>
                    Copyright © 2023 KornitselDev. All rights reserved.
                </span>

            </div>
        </div>
    );
};
