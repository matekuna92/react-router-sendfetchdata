import React from 'react';
import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
    {
        "id": "e1",
        "title": "A dummy event",
        "date": "2023-02-22",
        "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
        "description": "Join this amazing event and connect with fellow developers."
      },
      {
        "id": "e2",
        "title": "Another dummy event",
        "date": "2023-02-30",
        "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
        "description": "Join this amazing event 2 and connect with fellow developers."
      },
      {
        "id": "e3",
        "title": "One more dummy event",
        "date": "2023-03-03",
        "image": "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
        "description": "Join this amazing event 3 and connect with fellow developers."
      }
]

const EventsPage = () => {
    return (
        <>
            <div>Events Page</div>
            <ul>
                {DUMMY_EVENTS.map(event => (
                    <Link to={event.id}>
                        <li 
                            key={event.id}>
                            {event.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </>
    );
}

export default EventsPage;