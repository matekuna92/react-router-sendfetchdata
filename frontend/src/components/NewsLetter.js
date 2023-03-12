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
   console.log('request:', request);
}