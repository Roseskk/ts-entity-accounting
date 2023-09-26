import React  from 'react';
import Team from "./pages/team";
import Main from "./pages/main";

interface Route {
    path: string;
    breadcrumb: string;
    element: React.ReactNode;
    display: boolean;
    title: string;
}

export const routes: Route[] = [
    {
        path: '/',
        breadcrumb: 'Главная',
        element: <Main />,
        display: true,
        title: 'Главная',
    },
    {
        path: '/team',
        breadcrumb: 'Команда',
        element: <Team />,
        display: true,
        title: 'Команда',
    },

];
