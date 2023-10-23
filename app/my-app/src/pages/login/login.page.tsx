import { Logo } from 'components/logo';
import './index.scss';
import { FormButton } from 'components/form-components/formButton';
import { FormInput } from 'components/form-components/formInput';

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
        <div className="top-container">
          <div className="top-container-logo">
            <Logo alt="logo" src="https://cdn.dribbble.com/userupload/10056937/file/original-b185c3532b852114025434d4e2bd14dd.png?resize=752x" />
          </div>
          <div className="top-container-signup">
              <a href="">Don't have an account?</a>
              <FormButton btnName="sign up" onBtnClick={() => console.log('SIGN UP BTN CLICKED')}/>
          </div>
        </div>
        <div className="form-container">
          <form className="form-container-form">
            <h1>Sign In</h1>
            <p>Please enter your login details below</p>
            <div className="inputField">
              <FormInput type="email" name="email" value="" onChange={(e) => console.log(e)} />
              <FormInput type="password" name="password" value="" onChange={(e) => console.log(e)} />
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}