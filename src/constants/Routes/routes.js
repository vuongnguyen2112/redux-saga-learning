import LoginPage from "../../containers/LoginPage";
import SignupPage from "../../containers/SignupPage";

export const ROUTES = [
    {
        name: 'Trang đăng nhập',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'Trang đăng ký',
        path: '/signup',
        component: SignupPage
    }
]