import React from 'react';
import {ReactComponent as DownloadImg} from "../../../assets/img/download_img.svg"
import s from './download.module.scss'

export const DownloadFileButton = () => {
    const handleDownload = () => {
        const CVPath = "/assets/CV/Konstantine_Kornitsel_CV_ru.pdf";

        const downloadLink = document.createElement('a');
        downloadLink.href = CVPath;
        downloadLink.download = 'Konstantine_Kornitsel_CV.pdf';
        downloadLink.rel = 'noopener noreferrer'
        
        document.body.appendChild(downloadLink);

        downloadLink.click();

        document.body.removeChild(downloadLink);
    };
    return (
        <button className={s.downloadBtn} onClick={handleDownload}>
            <DownloadImg className={s.downloadIcon}/>
        </button>
    );
}