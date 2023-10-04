import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [formError, setFormError] = useState('')

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    setFormError('');
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      resetFormFields();
      navigate('/')
    } catch(error) {
      console.log(error)
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate('/')
    } catch (error) {
      console.log(error);
      setFormError(error.message)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>SIGN IN</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <span className={`form-error ${formError && formError.length > 0 ? 'show' : ''}`}>
          {formError}
        </span>
        <div className='buttons-container'>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
          <Button type='submit'>Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
