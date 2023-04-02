import React, {useEffect} from 'react';

import MainNavigation from "./MainNavigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";


const RootLayout = () => {
   // const navigation = useNavigation();
    const token = useLoaderData();    // no need for useRouterLoaderData here, because it's the Component what renders for '/' path where the tokenLoader is used - same level
    const submit = useSubmit();      // programatically submit a form - send Logout form after 1 hour, when the token expires

    useEffect(() => {
        if(!token) {
            return;
        }

        setTimeout(() => {
            console.log('token: ', token);
            submit(null, { action: '/logout', method: 'POST' });
        }, 5000);     // setTimeout expects milliseconds
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Data is loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;