import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from './EventsList';

const EventsPage = () => {
    const data = useLoaderData();     // events will be the data returned in app js loader. useLoader can access the 'closest' loader data
    const events = data.events;
    
    return (
        <>
            <div>Events Page</div>
            <EventsList events={events} />
        
        </>
    );
}

export default EventsPage;

export const loader = async () => {
    const response = await fetch('http://localhost:8081/events');

    if(!response.ok) {

    }
    else {
      //  const data = await response.json();
      //  return data.events;			// returned value in loader can be accessable in other components
         return response;         // react-router supports returning the response without extracting manually
    } 
}