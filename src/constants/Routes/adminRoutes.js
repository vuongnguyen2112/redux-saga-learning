import AdminHomePage from "../../containers/AdminHomePage";
import TaskBoard from "../../containers/TaskBoard";

export const ADMIN_ROUTES = [
    {
        name: 'Trang quản trị',
        path: '/admin',
        exact: true,
        component: AdminHomePage,
    },
    {
        name: 'Quản lý công việc',
        path: '/admin/taskboard',
        component: TaskBoard,
    }
];