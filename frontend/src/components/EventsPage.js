import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from './EventsList';

const EventsPage = () => {
    const events = useLoaderData();     // events will be the data returned in app js loader. useLoader can access the 'closest' loader data

    return (
        <>
            <div>Events Page</div>
            <EventsList events={events} />
        
        </>
    );
}

export default EventsPage;