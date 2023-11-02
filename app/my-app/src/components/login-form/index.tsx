import { useState } from "react";
import './index.scss';
import { FormButton, FormInput } from "components";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <form className="form-container">
      <h1>Sign In</h1>
      <p>Please enter your login details below</p>
      <FormInput
        label="Email"
        type="email" 
        name="email"
        value={email}
        placeholder="Email Address"
        required
        onChange={(e) => setEmail(e?.target?.value)} 
      />
      <FormInput
        id="current-password"
        autoComplete="current-password"
        label="Password"
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        showPassword
        required
        onChange={(e) => setPassword(e?.target?.value)} 
      />
      <div className="forgot-password">
        {/* TODO: add href */}
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