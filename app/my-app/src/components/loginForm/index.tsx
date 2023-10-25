import { FormButton, FormInput } from "components";
import './index.scss';
import { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <form className="form-container">
      <h1>Sign In</h1>
      <p>Please enter your login details below</p>
      <FormInput type="email" name="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e?.target?.value)} />
      <FormInput type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e?.target?.value)} />
      <div className="forgot-password">
        <a>Forgot Password?</a>
      </div>
      <div className="login-btn">
        <FormButton
          btnName="Log In"
          onBtnClick={() => {
            console.log('email: ', email, 'pw: ', password)
          }}
        />
      </div>
      <p className="or">OR</p>
      <div className="login-btn-google">
        <FormButton
          btnName="Sign in with Google"
          onBtnClick={() => {
            console.log('SIGN IN WITH GOOGLE CLICKED')
          }}
        />
      </div>
    </form>
  )
}