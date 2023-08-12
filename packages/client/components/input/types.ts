export interface InputProps {
  placeholder: string;
  type?: 'submit' | 'text' | 'number';
  errMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}