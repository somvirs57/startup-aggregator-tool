import { Layout, Menu, Button } from 'antd';
import {
  LeftOutlined,
  RightOutlined ,
  DashboardOutlined,
  AppstoreOutlined,
  FileOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { Card } from '../../components/helper';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <Link to="/applications">Applications</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileOutlined />}>
            <Link to="/pages">Pages</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, background: '#fff' }}>
          <Button type="primary" className='flex justify-center items-center m-4' onClick={toggle} >
            {collapsed ? <LeftOutlined /> :<RightOutlined />}
          </Button>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
          <Card title={'Hi'} description={'Hello'} imageSrc={'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'}/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
