import React from 'react';
import { redirect } from 'react-router-dom';
import EventForm from './EventForm';

const NewEventPage = () => {
    return <EventForm method='POST' />
}

export default NewEventPage;

/* // to use get() on fields, inside Form every inputs must have the "name" attribute with the same name as here - title, image, date, description
export const action = async ({ request, params }) => {
    const data = await request.formData();

    const formData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    const response = await fetch('http://localhost:8081/events', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // events.js returns a 422 error if any validation error occurs, which can be accessed in action
    if(request.status === 422) {
        return response;
    }

    if(!response.ok) {
        throw new Error({ message: JSON.stringify('Could not create new event.') }, { status: 500 }); 
    }

    return redirect('/events');
} */