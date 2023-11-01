
import { Logo, FormButton, LoginForm } from 'components';
import './index.scss';

export const LoginPage = () => {
  return (
    <div className="login-page">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="img-container">
          <div className="img-box">
            <img src={require("assets/images/app-dev.png")} alt="team planning" />
          </div>
        </div>
      </div>
      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="top-container">
          <div className="top-container-logo">
            <Logo alt="logo" src="https://cdn.dribbble.com/userupload/10056937/file/original-b185c3532b852114025434d4e2bd14dd.png?resize=752x" />
          </div>
          <div className="top-container-signup">
            <a href=".">Don't have an account?</a>
            {/* <FormButton btnName="sign up" onBtnClick={() => console.log('SIGN UP BTN CLICKED')} /> */}
          </div>
        </div>
        <div className="form-wrapper">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}