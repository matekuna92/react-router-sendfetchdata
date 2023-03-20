import React, { Suspense } from 'react';

import { defer, redirect, useRouteLoaderData, Await } from 'react-router-dom';
import EventItem from './EventItem';
import EventsList from './EventsList';

const EventDetailPage = () => {
    const { event, events } = useRouteLoaderData('event-detail');       // event = data.event, events = data.events

    return (
        <>
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={event}>
                {loadedEvent => <EventItem event={loadedEvent} />}
            </Await>
        </Suspense>

        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {loaddEvents => <EventsList events={loaddEvents} />}
            </Await>
        </Suspense>
        </>
    );
}

export default EventDetailPage;

const loadEvent = async (id) => {
    const response = await fetch('http://localhost:8081/events/' + id);

    if(!response.ok) {
        throw new Error({ message: JSON.stringify('Could not fetch data for selected event.') }, { status: 500 });
    }
    else {
        const responseData = await response.json();
        return responseData.event; 
    }
}

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

// react-router passes an object automatically when called with request+params properties
// hooks cant be used in loaders, but params can access the event id the same way
export const loader = async ({ request, params }) => {
    const id = params.id;

    return defer({
        event: loadEvent(id),
        events: loadEvents()  
    });
}

export const action = async ({ request, params }) => {
    const id = params.id;

    const response = await fetch('http://localhost:8081/events/' + id, {
        method: request.method
    });

    if(!response.ok) {
        throw new Error({ message: JSON.stringify('Could not delete event.') }, { status: 500 });
    }
    
    return redirect('/events');
}