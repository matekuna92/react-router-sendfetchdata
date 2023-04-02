import React from 'react';

import { NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

// end prop marks the end of NavLink, so class wont be active on events/new, only on /events route
function EventsNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/events' className={({ isActive }) => isActive ? classes.active : undefined} end>All Events</NavLink>
          </li>
          {token &&
          <li>
            <NavLink to='/events/new' className={({ isActive }) => isActive ? classes.active : undefined}>New Event</NavLink>
          </li>
          }
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
