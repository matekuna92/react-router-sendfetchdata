import React from 'react';

import { useRouteError } from 'react-router-dom';

import PageContent from './PageContent';
import EventsNavigation from './EventsNavigation';
import MainNavigation from './MainNavigation';

const Error = () => {
    const error = useRouteError();

    let message = 'An error occured.';
    let errorMessage = 'Something went wrong!';

    if(error.status === 500) {
        errorMessage = JSON.parse(error.data).message;      // error.date gives access to the data returned in EventsPage Response
    }

    if(error.status === 404) {
        message = 'Not found.';
        errorMessage = '404. Could not find page.';
    }

    return (
        <>
            <MainNavigation />
            <PageContent message={message}>
                <p> {errorMessage} </p>
            </PageContent>
        </>
    );
}

export default Error;