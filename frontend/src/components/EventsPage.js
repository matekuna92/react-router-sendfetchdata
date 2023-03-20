import React, { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import EventsList from './EventsList';

const EventsPage = () => {
    const data = useLoaderData();     // events will be the data returned in app js loader. (data returned by loader function in this component, it was moved from app js)
    //useLoader can access the 'closest' loader data
    const events = data.events;
    
    // now return is different because of the refered events -> cant return events={events}, need to use Await!
    return (
        <Suspense fallback={<p style={{ textAlign: 'center'}}>Loading...</p>}>
            <Await resolve={events}>
                {loadedEvents => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
    /* return (
        <>
            <div>Events Page</div>
            <EventsList events={events} />
        
        </>
    ); */
    
}

export default EventsPage;

const loadEvents = async () => {
    const response = await fetch('http://localhost:8081/events');

    if(!response.ok) {
       // return {isError: true, message: 'Could not fetch events.'};
       // when error is thrown inside loader, it uses the closest errorElement from routes in App js*
      // throw new Error('Could not fetch events.');
      throw new Response(JSON.stringify({ message: 'Could not fetch events.'}), { status: 500 });
    }
    else {
        //  return data.events;			// returned value in loader can be accessable in other components
        const responseData = await response.json();
        return responseData.events;       // return response; was working when loader directly got response,
                                          // now it has to be manually parsed, because we are using defer instead of direct call
    } 
}

export const loader = () => {
    // pass all http request to defer, if there are more
    return defer({
        events: loadEvents()
    });
}