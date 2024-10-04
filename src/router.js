import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './css/index.css';

import Home from './routes/home';
import Board from './routes/board'
import Error404 from './errors/404';
import Events from './routes/events';
import Leaderboard from './routes/leaderboard';
import Hackathons from "./routes/hackathons";
import PointsBreakdown from "./routes/points";
import AdminDashboard from "./routes/admin";
// import Login from './routes/login';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />,
    },
    {
        path: "/board",
        element: <Board />,
    },
    {
        path: "/events",
        element: <Events />,
    },
    {
        path: "/leaderboard",
        element: <Leaderboard />
    },
    {
        path: "/hackathons",
        element: <Hackathons />
    },
    {
        path: "/points-breakdown",
        element: <PointsBreakdown />
    },
    {
        path: "/admin",
        element: <AdminDashboard />
    }
    // {
    //     path: "/login",
    //     element: <Login />
    // }
]);

export default function Router() {
    return (
        <RouterProvider router={routes} />
    );
}