import React from 'react';

import classes from './NewsLetterSignup.module.css';

const NewsLetterSignup = () => {
    return (
        <form className={classes.newsletterForm}>
            <input type='email' placeholder='Sign up for newsletter' />
            <button type='submit'>Sign Up</button>
        </form>
    );
}   

export default NewsLetterSignup;