import { Logo } from 'components/logo';
import './index.scss';
import { FormButton } from 'components/form-components/formButton';

export const LoginPage = () => {
  return (
    <div className="login-page">
      {/* LEFT PANEL */}
      <section className="left-panel">
        <div className="img-container">
          <div className="img-box">
          </div>
        </div>
      </section>
      {/* RIGHT PANEL */}
      <section className="right-panel">
        {/*
          Components in this panel:
            1. logo
            2. signup-btn
            3. login-form
        */}
        <div className="top-container">
          <div className="top-container-logo">
            <Logo alt="logo" src="https://cdn.dribbble.com/userupload/10056937/file/original-b185c3532b852114025434d4e2bd14dd.png?resize=752x" />
          </div>
          <div className="top-container-signup">
              <a href="">Don't have an account?</a>
              <FormButton btnName="sign up" onBtnClick={() => console.log('SIGN UP BTN CLICKED')}/>
          </div>
        </div>
        <div className="signup-container"></div>
      </section>
    </div>
  )
}