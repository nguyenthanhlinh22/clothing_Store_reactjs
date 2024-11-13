import { lazy } from 'react';

const routers = [
    {
        path: '/',
        component: lazy(() => import('../compoents/HomePage/HomePage')) // Corrected import path
    },
    // Add other routes here
];

export default routers;