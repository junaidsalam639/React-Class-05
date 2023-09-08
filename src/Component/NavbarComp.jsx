import React from 'react'
import { Layout, Menu, Button } from 'antd';
const { Header } = Layout;

const NavbarComp = () => {
  return (
    <div>
       <Layout className="layout">
    <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >Home</Menu.Item>
        <Menu.Item key="2" >Profile</Menu.Item>
        <Menu.Item key="3">Settings</Menu.Item>
      </Menu>
      <div>
        <Button type="primary" style={{ marginRight: '10px' }}>Sign in</Button>
        <Button>Sign up</Button>
      </div>
    </Header>
  </Layout>
    </div>
  )
}

export default NavbarComp
// https://frontendshape.com/post/how-to-use-navbar-in-react-ant-design-5#google_vignette