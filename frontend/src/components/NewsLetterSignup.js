import React, { useEffect } from 'react';

import classes from './NewsLetterSignup.module.css';
import { Form, useFetcher } from 'react-router-dom';

const NewsLetterSignup = () => {
    // Form triggers action only on its route, so navbar signup cant be used.
    // fetcher.Form prevent navigation to the page to which the action belongs. (action=/newsletter)
    // with useFetcher actions can be used from any route without transitioning to route
    // https://reactrouter.com/en/main/hooks/use-fetcher
    const fetcher = useFetcher();
    const data = fetcher.data;
    const state = fetcher.state;

    useEffect(() => {
        // if not executing a loader or action anymore
        if(state === 'idle' && data && data.message)            // *newsletter action returns with an object with "message" property!
        window.alert(data.message);
         //   fetcher.submit(data);
    }, [data, state])

    return (
        <fetcher.Form method='POST' action='/newsletter' className={classes.newsletterForm}>
            <input type='email' name='email' placeholder='Sign up for newsletter' />
            <button type='submit'>Sign Up</button>
        </fetcher.Form>
    );
}   

export default NewsLetterSignup;