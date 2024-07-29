import {createBrowserRouter} from "react-router-dom";
import Shop from "../pages/Shop/Shop.tsx";
import Root from "../pages/Root.tsx";
import Home from "../pages/Home/Home.tsx";
import Service from "../pages/Service/Service.tsx";
import About from "../pages/About/About.tsx";
import Contact from "../pages/Contact/Contact.tsx";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'shop',
                element: <Shop/>,
            },
            {
                path: 'service',
                element: <Service/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'contact',
                element: <Contact/>,
            }
        ],
    },
])

export default router;