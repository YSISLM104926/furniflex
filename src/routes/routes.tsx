import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import App from "../App";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/signup',
        element: <Signup />
    }

])