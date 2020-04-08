import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import _ from 'lodash';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import styles from './style.module.less';
const { Header, Content, Footer } = Layout;

const Index = (props) => {
  const [location, setLocation] = useState('');
  let history = useHistory();
  const handleEntryAdmin = () => {
    history.push('/admin');
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      // console.log('navigator.geolocation:', navigator.geolocation.)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position:', position);
          // const { } = position
          const latitude = _.get(position, 'coords.latitude', '');
          const longitude = _.get(position, 'coords.longitude', '');
          const location = `经度:${longitude}-纬度:${latitude}`;
          setLocation(location);
        },
        (error) => {
          console.log('error:', error);
        },
      )
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }

  // const showPosition = 

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <Button className={styles.right} type="link" onClick={handleEntryAdmin}>控制台</Button>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
        </div>
        <Button type="primary" onClick={getLocation}>获取当前位置</Button>
        <div>
          <span>{location}</span>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}

export default Index;