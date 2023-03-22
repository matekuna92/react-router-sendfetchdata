import React from 'react';
import { json, redirect } from 'react-router-dom';

import AuthForm from '../components/AuthForm';

const AuthenticationPage = () => {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
    // useParams hook cant be used inside action, only inside components
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';   // login as default if undefined
    const formData = await request.formData();
    const authData = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    // send request to backend  
    const response = fetch('/http://localhost:8081/' + mode, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    if(response.status === 422 || response.status === 401) {
        return response;
    }

    if(!response.ok) {
        throw json({ message: 'Could not authenticate user', status: 500 });
    }

    return redirect('/');
}