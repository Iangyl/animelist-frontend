import React, { useEffect, useState } from 'react';
import { converterBetweenUnitsOfDigitalInformation } from 'utils/helpers';
import styles from './index.module.sass';

interface IFileUpload {
  uploadFile: (value: File) => Promise<void>;
  onError: (message: string) => void;
}

export default function FileUpload(props: IFileUpload) {
  const [file, setFile] = useState<File>();

  const handleChange = (val: React.ChangeEvent<HTMLInputElement>) => {
    if (val.target.files) {
      const file = val.target.files[0];
      const fileSize = converterBetweenUnitsOfDigitalInformation(
        { unitType: 'b', value: file.size },
        'kb'
      );
      if (fileSize && fileSize > 4096)
        props.onError('File size cannot exceed more than 4MB');
      else setFile(file);
    }
  };

  useEffect(() => {
    if (file) {
      props.uploadFile(file);
    }
  }, [file]);

  return (
    <>
      <label>
        <input
          accept=".png, .jpg, .jpeg"
          type="file"
          draggable
          onChange={handleChange}
        />
      </label>
    </>
  );
}
