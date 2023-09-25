import React, { lazy } from 'react';

const Main = lazy(() => import('./pages/main'));

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
];
