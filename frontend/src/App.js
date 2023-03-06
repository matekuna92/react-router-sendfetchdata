import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import EventsPage from './components/EventsPage';
import HomePage from './components/HomePage';
import RootLayout from './components/RootLayout';
import NewEventPage from './components/NewEventPage';
import EditEventPage from './components/EditEventPage';
import EventDetailPage from './components/EventDetailPage';
import EventRootLayout from './components/EventRootLayout';
import Error from './components/Error';

import { loader as eventsLoader } from './components/EventsPage';
import { loader as eventDetailLoader } from './components/EventDetailPage';


// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

// * Error page will be displayed any time an error occurs in anywhere in any routes 
//errorElement when error is thrown in EventsPage loader - if errorElement is added inside events children, then
// that's the closest errorElement which will be displayed
const router = createBrowserRouter([
    {path: '/', element: <RootLayout />,
    errorElement: <Error />,
    children: [
        {index: true, element: <HomePage />},
        
        {path: 'events', element: <EventRootLayout />,
        children: [
			{index: true, element: <EventsPage />, loader: eventsLoader},
			{path: 'new', element: <NewEventPage />},
			{path: ':id/edit', element: <EditEventPage />},
			{path: ':id', element: <EventDetailPage />, loader: eventDetailLoader}	
        ]}
    ]}
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
