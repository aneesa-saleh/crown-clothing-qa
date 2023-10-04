import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <>
      <h1 className="authentication-header"><CrwnLogo className='logo' /> CROWN CLOTHING</h1>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
