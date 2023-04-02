import React from 'react';
import { Link, useSubmit, useRouteLoaderData } from 'react-router-dom';

import classes from './EventItem.module.css';

function EventItem({ event }) {
	const submit = useSubmit();
  const token = useRouteLoaderData('root');

  function startDeleteHandler() {
  	const proceed = window.confirm('Are you sure you want to delete item?');

    if(proceed) {
		// data to be sent, options - no data needed for deletion
		submit(null, { method: 'DELETE' });
	}
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {token &&
        <menu className={classes.actions}>
          <Link to='edit'>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      }
    </article>
  );
}

export default EventItem;
