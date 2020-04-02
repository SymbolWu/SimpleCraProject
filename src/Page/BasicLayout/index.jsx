import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Layout, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { AdminRoute } from '@/Routes';
import Menu from './Menu';
import styles from './style.module.less';

const { Header, Sider, Content } = Layout;

const Basic = (props) => {
  let history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed)
  };

  const handleEntryIndex = () => {
    history.push('/');
  }
  return (
    <Layout className={styles.container}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
        <div className={styles.logo} />
        <Menu />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: toggle,
          })}
          <Button type="link" onClick={handleEntryIndex}>回到首页</Button>
        </Header>
        <Content className={styles.content}>
          <AdminRoute />
        </Content>
      </Layout>
    </Layout>
  )
}
export default Basic