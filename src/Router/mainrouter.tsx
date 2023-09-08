import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../Block/Layout";
import Homescreen from "../Pages/Homescreen"
export const mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element:<Homescreen/>
            }
            
        ],
    },
]);