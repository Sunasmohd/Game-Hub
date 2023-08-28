import { createBrowserRouter } from "react-router-dom";
import GamesDetail from "../components/DetailPage/GamesDetail";
import Navbar from "../components/Navbar/Navbar";
import ErrorPage from "../components/DetailPage/ErrorPage";
import HomePage from "../components/DetailPage/HomePage";

const router = createBrowserRouter([
    {path:'/',element:<Navbar/>,children:[
        {index:true,element:<HomePage/>},
        {path:'games/:id',element:<GamesDetail/>},
    ],
    errorElement:<ErrorPage/>}
])

export default router