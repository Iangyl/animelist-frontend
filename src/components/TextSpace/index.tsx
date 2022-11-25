import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import styles from './index.module.sass';

interface ITextSpace {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextSpace(props: ITextSpace) {
  const { value, placeholder, onChange } = props;

  return (
    <TextareaAutosize
      value={value}
      maxRows={20}
      aria-label="maximum height"
      placeholder={placeholder}
      onChange={onChange}
      className={styles.textarea}
    />
  );
}
