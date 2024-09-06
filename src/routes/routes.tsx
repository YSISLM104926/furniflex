import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import App from "../App";
import Home from "../pages/Home";
export const router = createBrowserRouter([
    {
        path: '/login',
        element: <App />,
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {

            }
        ]
    }
])