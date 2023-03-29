import React from 'react';
import { json, redirect } from 'react-router-dom';

import AuthForm from '../components/AuthForm';

const AuthenticationPage = () => {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
    // useSearchParams hook cant be used inside action, only inside components
    const searchParams = new URLSearchParams(request.url);
    console.log('searchParams: ', searchParams);

    const mode = searchParams.entries().next().value[1] || 'login';     // login as default if undefined  
    const formData = await request.formData();
    const authData = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    console.log('authData: ', authData);
    console.log('mode:', mode);
    console.log("mode === 'login'", mode === 'login');

    // send request to backend  
    const response = await fetch('http://localhost:8081/' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          //  'credentials': 'same-origin'
        },
        body: JSON.stringify(authData)
    })
    .catch(err => console.warn('err:', err));

    if(response.status === 422 || response.status === 401) {
        console.log('422 or 401');
        return response;
    }

    console.log('response hiba előtt: ', response, response.status);

    if(!response.ok) {
        console.log('could not authenticate user, error 500');
        throw json({ message: 'Could not authenticate user', status: 500 });
    }

    // extract token from backend response
    const resData = await response.json();
    console.log('resData: ', resData);
    const token = resData.token;

    localStorage.setItem('token', token);

    return redirect('/');
}