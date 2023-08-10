import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import { Comida } from "../src/productos/Comida";
import ComidaDeGato from "../src/productos/ComidaDeGato";
import Juguetes from "../src/productos/Juguetes";
import Literas from "../src/productos/Literas";
import Peluquerias from "../src/productos/Peluquerias";
import Transportadoras from "../src/productos/Transportadoras";
import Vacunas from "../src/productos/Vacunas";

const router = createBrowserRouter([
{
    path:'/',
    element:<Layout/>,
    children:[
        {  path:'/login', element:<Login/>},
        {
            path:'/', element:<Home/>,
        },
        {
            path:'/comidaperro', element:<Comida/>
        },
        {
            path:'/comidagato', element:<ComidaDeGato/>
        },
        {
            path:'/juguetes', element:<Juguetes/>
        },
        {
            path:'/literas', element:<Literas/>
        },
        {
            path:'/peluquerias', element:<Peluquerias/>
        },
        {
            path:'/transportadoras', element: <Transportadoras/>
        },
        {
            path:'/vacunas', element:<Vacunas/>
        }
    ]
}
])
export default router 