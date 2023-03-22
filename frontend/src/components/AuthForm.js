import React from 'react';
import { Form, Link, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLogin = searchParams.get('mode') === 'login';

  return (
    <>
        <Form method="POST" className={classes.form}>
            <h1>{isLogin ? 'Login' : 'Create new user'}</h1>

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
                <button type='button'>Save</button>
            </div>
        </Form>
    </>
  );
}
  /* return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <button onClick={switchAuthHandler} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </button>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}  }*/

export default AuthForm;