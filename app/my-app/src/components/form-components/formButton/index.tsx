import './index.scss';

export interface FormButtonProps {
  customDivStyle?: string;
  customBtnStyle?: string;
  btnName: string;
  btnDisabled?: boolean;
  onBtnClick: () => void;
}

export const FormButton = (props: FormButtonProps) => {
  const {
    customDivStyle,
    customBtnStyle,
    btnName,
    btnDisabled,
    onBtnClick,
  } = props;

  return (
    <div className={customDivStyle ? customDivStyle : "btn-container"}>
      <button 
        className={customBtnStyle ? customBtnStyle : "btn-container-button"} 
        onClick={onBtnClick} 
        disabled={btnDisabled}
      >
        {btnName}
      </button>
    </div>
  )
}