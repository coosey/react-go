import { ChangeEvent } from "react";
import './index.scss';

export interface FormInputProps {
  type: 'text' | 'password' | 'email' | 'number';
  id?: string;
  autoComplete?: string;
  name: string;
  value: string | number;
  label?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  showPassword?: boolean;
  required?: boolean;
  customLabelStyle?: string;
  customInputStyle?: string;
}

export const FormInput = (props: FormInputProps) => {
  const {
    type,
    id,
    autoComplete,
    name,
    value,
    label,
    placeholder,
    onChange,
    disabled,
    showPassword,
    required,
    customLabelStyle,
    customInputStyle,
  } = props;

  return (
    <section className="field-wrapper">
      {label && (
        <label className={customLabelStyle ? customLabelStyle : "field-wrapper--label"} htmlFor={label}>{label}</label>
      )}
      <input
        id={id}
        autoComplete={autoComplete}
        className={customInputStyle ? customInputStyle : "field-wrapper--input"}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        required={required}
      />
      {showPassword && (
        <div className="show-password">
          <input id="toggle-password" type="checkbox" aria-label="Show password as plain text. Warning: this will display your password on the screen." /> Show Password
        </div>
      )}
    </section>
  )
}