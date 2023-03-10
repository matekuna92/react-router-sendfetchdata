import React from 'react';
import { redirect } from 'react-router-dom';
import EventForm from './EventForm';

const NewEventPage = () => {
    return <EventForm />
}

export default NewEventPage;

// to use get() on fields, inside Form every inputs must have the "name" attribute with the same name as here - title, image, date, description
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

    if(!response.ok) {
        throw new Error({ message: JSON.stringify('Could not create new event.') }, { status: 500 }); 
    }

    return redirect('/events');
}