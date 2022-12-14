import { useState } from 'react';
import { apiPaths } from 'utils/constants';

export default function useFileUpload() {
  const [fileIds, setFileIds] = useState<string>('');

  const uploadFile = async (data: File) => {
    const formData = new FormData();
    formData.append('img', data);

    try {
      const response = await fetch(apiPaths.uploadFile, {
        method: 'POST',
        /*  headers: {
          'Content-Type': 'multipart/form-data',
        }, */ // or this header or using FormData
        body: formData,
      });
      const result = await response.json();

      setFileIds(result.data);
    } catch (e: unknown) {
      console.error(e);
    }
  };

  return { fileIds, uploadFile };
}
