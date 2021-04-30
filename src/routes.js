import { LOGIN_PAGE, MAIN_PAGE, CONSTRUCTOR_PAGE } from './utils/consts'
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import ConstructorPage from "./components/constructor/ConstructorPage";


export const publicRoutes = [
    {
        path: LOGIN_PAGE,
        Component: Login
    },
    {
        path: MAIN_PAGE,
        Component: Main
    }, 
]

export const privateRoutes = [
    {
        path: CONSTRUCTOR_PAGE,
        Component: ConstructorPage
    },
    {
        path: MAIN_PAGE,
        Component: Main
    }, 
]