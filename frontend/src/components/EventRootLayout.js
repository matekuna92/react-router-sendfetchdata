import { Outlet } from "react-router-dom";
import EventsNavigation from "./EventsNavigation";


const EventRootLayout = () => {
    return (
        <>
            <EventsNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default EventRootLayout;