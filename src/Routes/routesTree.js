import Index from '@/Page/Index';
import Admin from '@/Page/BasicLayout';

import Overview from '@/Page/Overview';
import ProductConfig from '@/Page/ProductConfig';
import ProductList from '@/Page/ProductList';

export const defaultSelected = 'Overview';
export const AdminRouteTree = [
  {
    name: 'Overview',
    path: '/admin/overview',
    exact: true,
    component: Overview
  },
  {
    name: 'Product',
    children: [
      {
        name: 'ProductConfig',
        path: '/admin/productConfig',
        component: ProductConfig
      },
      {
        name: 'ProductList',
        path: '/admin/productList',
        component: ProductList
      },
    ]
  }
  // {
  //   name: 'ProductConfig',
  //   path: '/admin/productConfig',
  //   component: ProductConfig
  // },
  // {
  //   name: 'ProductList',
  //   path: '/admin/productList',
  //   component: ProductList
  // },
]

export const BasicRouteTree = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/home',
    component: Index
  },
  {
    path: '/admin',
    component: Admin
  },
]