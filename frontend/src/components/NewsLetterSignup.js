import React from 'react';

import classes from './NewsLetterSignup.module.css';
import { Form } from 'react-router-dom';

const NewsLetterSignup = () => {
    return (
        <Form method='POST' className={classes.newsletterForm}>
            <input type='email' placeholder='Sign up for newsletter' />
            <button type='submit'>Sign Up</button>
        </Form>
    );
}   

export default NewsLetterSignup;