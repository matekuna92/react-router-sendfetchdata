import React from 'react';

import classes from './PageContent.module.css';

const PageContent = ({ message, children }) => {
    return (
        <div className={classes.content}>
            <h1>{message}</h1>
            {children}
        </div>
    );
}

export default PageContent;