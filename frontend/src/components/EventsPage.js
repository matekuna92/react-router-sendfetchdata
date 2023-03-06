import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventsList from './EventsList';

const EventsPage = () => {
    const data = useLoaderData();     // events will be the data returned in app js loader. (data returned by loader function in this component, it was moved from app js)
    //useLoader can access the 'closest' loader data
    const events = data.events;

   /*  if(data.isError) {
        return <p> {data.message} </p>
    } */
    
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
       // return {isError: true, message: 'Could not fetch events.'};
       // when error is thrown inside loader, it uses the closest errorElement from routes in App js*
      // throw new Error('Could not fetch events.');
      throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), { status: 500 });
    }
    else {
      //  const data = await response.json();
      //  return data.events;			// returned value in loader can be accessable in other components
         return response;         // react-router supports returning the response without extracting manually
    } 
}