import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "../src/components/Home";
import Login from "../src/components/Login";

const router = createBrowserRouter([
{
    path:'/',
    element:<Layout/>,
    children:[
        {  path:'/login', element:<Login/>},
        {
            path:'/', element:<Home/>,
        },
    ]
}
])
export default router 