import { AutocompleteGetTagProps } from '@mui/material/useAutocomplete/useAutocomplete';

export interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

export default interface IMultipleSelect {
  id: string;
  label?: string;
  value: string[];
  data: string[];
  onChange: (args: string[]) => void;
}
