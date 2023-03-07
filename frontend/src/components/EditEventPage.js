import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventForm from './EventForm';

const EditEventPage = () => {
    const data = useLoaderData();
    console.log('data:', data);

    return <EventForm event={data.event} />
}

export default EditEventPage;