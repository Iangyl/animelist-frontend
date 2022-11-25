import React, { useEffect } from 'react';
import Root from './components/Root';
import Label from './components/Label';
import StyledTag from './components/Tag';
import Listbox from './components/ListBox';
import CheckIcon from '@mui/icons-material/Check';
import InputWrapper from './components/InputWrapper';
import useAutocomplete from '@mui/material/useAutocomplete';
import IMultipleSelect from './index.types';

export default function MultipleSelect(props: IMultipleSelect) {
  const { id, label, data, onChange } = props;
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id,
    value: props.value,
    multiple: true,
    options: data,
    getOptionLabel: (option) => option,
  });

  useEffect(() => {
    const formattedValues = value.map(
      (item: string) => item
    );
    onChange(formattedValues);
  }, [value]);

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>{label ?? 'Multiple Select'}</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option: string, index: number) => (
            // eslint-disable-next-line react/jsx-key
            <StyledTag label={option} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof data).map((option, index) => (
            // eslint-disable-next-line react/jsx-key
            <li {...getOptionProps({ option, index })}>
              <span>{option}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}
