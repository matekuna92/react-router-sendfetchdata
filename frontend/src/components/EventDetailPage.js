import React from 'react';

import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams();

    return (
        <>
            <div>Event Detail Page</div>
            <p> {params.id} </p>
        </>
    )
}

export default EventDetailPage;