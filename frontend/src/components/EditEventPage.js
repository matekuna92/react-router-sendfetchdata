import React from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from './EventForm';

const EditEventPage = () => {
    const data = useRouteLoaderData('event-detail');
    console.log('data:', data);

    return <EventForm event={data.event} method='PATCH' />
}

export default EditEventPage;