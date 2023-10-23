import { ChangeEvent } from "react";
import './index.scss';

export interface FormInputProps {
  type: 'text' | 'password' | 'email' | 'number';
  name: string;
  value: string | number;
  label?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  customLabelStyle?: string;
  customInputStyle?: string;
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
    customLabelStyle,
    customInputStyle,
  } = props;
  
  return (
    <div className="field-wrapper">
      {label && (
        <label className={customLabelStyle ? customLabelStyle : "field-wrapper--label"} htmlFor={label}>{label}</label>
      )}
      <input
        className={customInputStyle ? customInputStyle : "field-wrapper--input"}
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