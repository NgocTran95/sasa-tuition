import LoginPage from "../pages/LoginPage";
import EnterInfoPage from "../pages/EnterInfoPage";
import AddStudentPage from "../pages/AddStudentPage";
import ExportTuitionPage from "../pages/ExportTuitionPage";

import MainLayout from "../layouts/MainLayout";

const publicRoutes = [
  { id: 1, path: "/", component: EnterInfoPage, layout: MainLayout },
  { id: 2, path: "/login", component: LoginPage },
  {
    id: 3,
    path: "/add-student",
    component: AddStudentPage,
    layout: MainLayout,
  },
  { id: 4, path: "/query", component: ExportTuitionPage, layout: MainLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
