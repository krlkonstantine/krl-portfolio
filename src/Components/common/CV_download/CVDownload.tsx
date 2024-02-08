import React from 'react';
import {ReactComponent as DownloadImg} from "../../../assets/img/download_img.svg"
import s from './download.module.scss'

export const DownloadFileButton = () => {

    return (
        <a className={s.downloadBtn} target={'_blank'}
           href={'https://drive.google.com/drive/folders/1KCE75Blka77n0zubW6IXzAaYhjIQRTIS?usp=sharing'}>
            <DownloadImg className={s.downloadIcon}/>
        </a>

    );
}