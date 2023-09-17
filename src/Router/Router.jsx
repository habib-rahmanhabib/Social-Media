
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home/Home";
import Login from "../Component/Page/Login/Login";
import SignUp from "../Component/SignUp/SignUp";
import NewsFeed from "../Component/Page/NewsFeed/NewsFeed/NewsFeed";
import Chat from "../Component/Page/Message/Chat";
import About from "../Component/About/About";
import ErrorPage from "../Component/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
         errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "news-feed",
                element: <NewsFeed></NewsFeed>
            },
            {
                path:"group-message",
                element:<Chat></Chat>
            },
            {
                path: "login",
                element: <Login></Login>

            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            },
            {
                path : "about",
                element : <About></About>
            }

        ]
    },
]);


export default router;
