import React from 'react';

import { Form, useNavigate, useNavigation, useActionData, redirect } from 'react-router-dom';

import classes from './EventForm.module.css';
import {getAuthToken} from "../util/authToken";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const actionData = useActionData();
  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  // react-router Form behaves like form, but sending date to our action instead of the backend, so action can process the data
  return (
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && <ul>
        {Object.values(actionData.errors).map(err => (
          <li key={err}> {err.message}</li>
        ))}
      </ul>}

      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event ? event.title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event ? event.image : ''} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event ? event.description : ''} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;

// to use get() on fields, inside Form every inputs must have the "name" attribute with the same name as here - title, image, date, description
// same action for New and Edit event based if request method is post or patch
export const action = async ({ request, params }) => {
  const data = await request.formData();
  const method = request.method;

  const formData = {
      title: data.get('title'),
      image: data.get('image'),
      date: data.get('date'),
      description: data.get('description')
  }

  let url = 'http://localhost:8081/events';

  if(method === 'PATCH') {
      const id = params.id;

	  url = 'http://localhost:8081/events/' + id;
  }

  const token = getAuthToken();  
  const response = await fetch(url, {
      method: method,
      body: JSON.stringify(formData),
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
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
}
