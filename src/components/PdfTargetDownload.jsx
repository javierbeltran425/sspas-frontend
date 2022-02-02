import React from "react";
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'

/**
 * Components imports
 */
import { Tooltip } from 'primereact/tooltip';
import '../components/cssFiles/TooltipDemo.css';

export default function PdfTargetDownload(props) {
  const { id, name, description, url, ext } = props;

  function redirect(){
    window.open(process.env.REACT_APP_DOC_DOWNLOAD + url);
  }

  function renderSwitch() {
    switch (ext) {
      case 'pdf':
        return <Icon icon={faFilePdf} className="text-4xl text-red-500 mt-5" />
        break;
      
      case 'doc':
        return <Icon icon={faFileWord} className="text-4xl text-blue-500 mt-5" />
        break;

      case 'docx':
        return <Icon icon={faFileWord} className="text-4xl text-blue-500 mt-5" />
        break;

      case 'xls':
        return <Icon icon={faFileExcel} className="text-4xl text-green-500 mt-5" />
        break;
      
      case 'xlsx':
        return <Icon icon={faFileExcel} className="text-4xl text-green-500 mt-5" />
        break;
      
      case 'jpg':
        return <Icon icon={faImage} className="text-4xl text-gray-500 mt-5" />
        break;

      case 'png':
        return <Icon icon={faImage} className="text-4xl text-gray-500 mt-5" />
        break;

      case 'jpeg':
        return <Icon icon={faImage} className="text-4xl text-gray-500 mt-5" />
        break;

      case 'gif':
        return <Icon icon={faImage} className="text-4xl text-gray-500 mt-5" />
        break;

      case 'bmp':
        return <Icon icon={faImage} className="text-4xl text-gray-500 mt-5" />
        break;
      
      default:
        return <Icon icon={faFile} className="text-4xl text-blue-500 mt-5" />
        break;
    }
  }

  return (
    <>
      <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
      <div data-pr-tooltip={description} className="logo flex flex-col items-center w-32 h-40 mx-2 bg-white shadow-md rounded-md hover:scale-105 transform duration-300 cursor-pointer" onClick={() => redirect()} >
          {renderSwitch()}
          <div className="flex flex-row flex-wrap w-full h-full text-black text-clip overflow-hidden mt-3">
              <h1 className="text-black text-sm text-center m-2 ">{name}</h1>
          </div>
          <div className="flex flex-row justify-center w-full text-blue-300">
              <Icon icon={faCloudDownloadAlt} className="text-lg m-1" />
          </div>
      </div>
    </>
  );
}
