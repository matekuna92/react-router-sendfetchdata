import React from 'react';

import { useLoaderData } from 'react-router-dom';
import EventItem from './EventItem';

const EventDetailPage = () => {
    const data = useLoaderData();
    console.log('data:', data);

    return (
            <EventItem event={data.event} />
    );
}

export default EventDetailPage;

// react-router passes an object automatically when called with request+params properties
// hooks cant be used in loaders, but params can access the event id the same way
export const loader = async ({ request, params }) => {
    const id = params.id;
    const response = await fetch('http://localhost:8081/events/' + id);    

    console.log('request:', request);
    console.log('params:', params);

    if(!response.ok) {
        throw new Error({ message: JSON.stringify('Could not fetch data for selected event.') }, { status: 500});
    }
    else {
        return response;
    }

}