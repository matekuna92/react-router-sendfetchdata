import React from 'react';

import MainNavigation from "./MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";


const RootLayout = () => {
   // const navigation = useNavigation();

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