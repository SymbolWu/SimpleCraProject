import React from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { Menu } from 'antd';
import { AdminRouteTree, defaultSelected } from '@/Routes/routesTree';

const { SubMenu } = Menu;

const AdminMenu = () => (
  <Menu
    defaultSelectedKeys={[defaultSelected]}
    // defaultOpenKeys={['sub1']}
    mode="inline"
    theme="dark"
  >
    {
      AdminRouteTree.map(route => {
        const children = _.get(route, 'children', []);
        // const component = _.get(route, 'component', '');
        if (children.length) {
          return (
            <SubMenu key={route.name} title={route.name}>
              {
                children.map(subRoute => (
                  <Menu.Item key={subRoute.name}>
                    <Link to={subRoute.path}>{subRoute.name}</Link>
                  </Menu.Item>
                ))
              }
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </Menu.Item>
        )
      })
    }
  </Menu>
)
export default AdminMenu;