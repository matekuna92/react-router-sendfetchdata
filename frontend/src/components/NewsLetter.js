import React from 'react';
import PageContent from './PageContent';
import NewsLetterSignup from './NewsLetterSignup';

const NewsLetter = () => {
    return (
        <PageContent message='Join our awesome newsletter!'>
            <NewsLetterSignup />
        </PageContent>
    );
}   

export default NewsLetter;

export const action = async ({ request, params }) => {
    const data = await request.formData();
    const email = data.get('email');        // name='email' attribute required on Form element to access here
    console.log('email: ', email);
    return { message: 'Signup successful!' };   // *
}