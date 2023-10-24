import { FormButton, FormInput } from "components";
import './index.scss';

export const LoginForm = () => {
  return (
    <form className="form-container">
    <h1>Sign In</h1>
    <p>Please enter your login details below</p>
    <FormInput type="email" name="email" value="" placeholder="Email Address" onChange={(e) => console.log(e)} />
    <FormInput type="password" name="password" value="" placeholder="Password" onChange={(e) => console.log(e)} />
    <div>
      <FormButton btnName="Log In" onBtnClick={(e) => {
        e?.preventDefault();
        console.log('LOG IN BTN CLICKED')
      }}
      />
    </div>
  </form>
  )
}