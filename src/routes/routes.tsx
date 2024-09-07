import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Signup";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import UserProfile from "../pages/UserProfile";
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
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/profile',
        element: <UserProfile />
    }
])