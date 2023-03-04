import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventsList from './EventsList';

const EventsPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedEvents, setFetchedEvents] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            const response = await fetch('http://localhost:8081/events');

            if(!response.ok) {
                setError('Data fetch failed');
            }
            else {
                const data = await response.json();
                console.log(data);
                setFetchedEvents(data.events);
            } 

            setIsLoading(false);
        }

        fetchEvents();
    }, []);

    return (
        <>
            <div>Events Page</div>
            <div>
                {isLoading && <p> Loading data... </p>}
                {error && <p> {error} </p>}
            </div>
            {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
        
        </>
    );
}

export default EventsPage;