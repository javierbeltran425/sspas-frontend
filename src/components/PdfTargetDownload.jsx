import React from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'

export default function PdfTargetDownload() {
  return (
    <div className="flex flex-col items-center w-32 h-40 bg-white shadow-md rounded-md hover:scale-105 transform duration-300 cursor-pointer">
        <Icon icon={faFilePdf} className="text-4xl text-red-500 mt-5" />
        <div className="flex flex-row flex-wrap w-full h-full text-black text-clip overflow-hidden mt-3">
            <h1 className="text-black text-sm text-center m-2 ">Nombre del documento</h1>
        </div>
        <div className="flex flex-row justify-center w-full text-blue-300">
            <Icon icon={faCloudDownloadAlt} className="text-lg m-1" />
        </div>
    </div>
  );
}
