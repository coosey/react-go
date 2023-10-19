import { ChangeEvent } from "react";

export interface FormInputProps {
  type: 'text' | 'password' | 'email' | 'number';
  name: string;
  value: string | number;
  label?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const FormInput = (props: FormInputProps) => {
  const {
    type,
    name,
    value,
    label,
    placeholder,
    onChange,
    disabled,
  } = props;
  return (
    <div>
      {label && (
        <label htmlFor={label}>{label}</label>
      )}
      <input 
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        type={type} 
      />
    </div>
  )
}