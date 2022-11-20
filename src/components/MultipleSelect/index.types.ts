import { AutocompleteGetTagProps } from '@mui/material/useAutocomplete/useAutocomplete';

export interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

export interface IMultipleSelectData {
  title: string;
}

export default interface IMultipleSelect {
  id: string;
  label?: string;
  data: IMultipleSelectData[];
}
