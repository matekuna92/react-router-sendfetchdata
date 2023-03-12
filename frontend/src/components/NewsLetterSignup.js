import React from 'react';

import classes from './NewsLetterSignup.module.css';

const NewsLetterSignup = () => {
    return (
        <>
        <div className={classes.newsletterForm  }>
            <h1> Join our awesome newsletter! </h1>
            <form className={classes.newsletterForm}>
                <input type='email' placeholder='Sign up for newsletter' />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
        </>
    )
}   

export default NewsLetterSignup;