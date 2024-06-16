import SuspenseLoader from 'src/components/SuspenseLoader';

import Authenticated from 'src/components/Authenticated';
// import { Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import accountRoutes from './account';
import baseRoutes from './base';
// import studentRoutes from './student';
// import associatedRoutes from './associated';
// import memberRoutes from './member';
// import adminRoutes from './admin';
import managerRoutes from './manager';
// import hotelRoutes from './hotel';
// import employeeOpeRoutes from './employeeOpe';
import raffleRoutes from'./raffle';
import hotelRoutes from './hotel';


// import { Navigate } from 'react-router-dom';


const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Resultado  = Loader(lazy(() => import('src/content/administration/search/base')));
const Lista  = Loader(lazy(() => import('src/content/administration/search/list')));
const Detalle  = Loader(lazy(() => import('src/content/administration/search/detail')));
const Pago  = Loader(lazy(() => import('src/content/administration/search/pay')));
// const IniciarSesion  = Loader(lazy(() => import('src/content/pages/Auth/Login/Cover/antiguo')));
const router = [
  {
  path:'raffle_ticket',
  children: raffleRoutes
  },
  {
    path: 'bar_order',
    children: accountRoutes
  },
  {
    path: '/',
    element: <BaseLayout />,
    children: baseRoutes
  },
  {
    path:'sign-in',
    children:[
      {
        path: '/',
        children:hotelRoutes
      }
    ]
  },
  {
    path:'lista',
    element:<Lista/>
  },
  {
    path:'detalle',
    element:<Detalle/>
  },     
  // {
  //   path: 'bar_order',
  //   children: accountRoutes
  // },
  
  {
    path: 'hotel',
    element: (
      <Authenticated>
        <AccentHeaderLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '/',
        children: managerRoutes
      }
      ,
      {
        path: 'busqueda',
        element: <Resultado />
      },
      {
        path: 'lista',
        element: <Lista />
      },
      {
        path: 'detalle',
        element: <Detalle />
      },
      {
        path: 'pago',
        element: <Pago />
      },
    ]
  },
  // {
  //   path: 'home',
  //   element: (
  //     <Authenticated>
  //       <AccentHeaderLayout />
  //     </Authenticated>
  //   ),
  //   children: [
  //     {
  //       path: '/',
  //       children: managerRoutes
  //     }
  //     ,
  //     {
  //       path: 'results',
  //       element: <Resultado />
  //     },
  //     {
  //       path:'employeeOpe',
  //       children:employeeOpeRoutes
  //     }
  //   ]
  // }
];

export default router;
