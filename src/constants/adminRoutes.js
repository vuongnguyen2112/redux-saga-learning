import AdminHomePage from "../containers/AdminHomePage";
import TaskBoard from "../containers/TaskBoard";

export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang quản trị',
        exact: true,
        component: AdminHomePage,
    },
    {
        path: '/taskboard',
        name: 'Quản lý công việc',
        component: TaskBoard,
    }
];