import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import FileUpload from 'components/FileUpload';
import React from 'react';
import styles from './index.module.sass';

export default function AddAnimeForm() {
  return (
    <section>
      <FileUpload />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={1}
          label="Age"
          onChange={() => {
            ('');
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <input type="date" />
    </section>
  );
}
