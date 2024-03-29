import React from 'react';
import { Form, Link, useSearchParams, useActionData, useNavigation } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  console.log('islogin', isLogin);

  return (
    <>
        <Form method='POST' className={classes.form}>
            <h1>{isLogin ? 'Login' : 'Create new user'}</h1>
            {data && data.errors && (<ul>
                {Object.values(data.errors).map(err => (
                        <li key={err}>{err}</li>
                        ))}
            </ul>)}

            {data && data.message && <p className={classes.error}>{data.message}</p>}
            
            <p>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' required />
            </p>
            <p>
                <label htmlFor='password'>Password</label>
                <input id='password' type='password' name='password' required />
            </p>

            <div className={classes.actions}>
                <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>{isLogin ? 'Create new user' : 'Login'}</Link>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>
        </Form>
    </>
  );
}

export default AuthForm;
