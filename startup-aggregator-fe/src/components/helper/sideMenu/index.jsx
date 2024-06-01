import { Breadcrumb, Button, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  LeftOutlined,
  RightOutlined,
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  ReadOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "/dashboard",
    icon: <DashboardOutlined />,
    label: <Link to="/dashboard">Dashboard</Link>,
  },
  {
    key: "/learing",
    icon: <ReadOutlined />,
    label: <Link to="/learing">Resources</Link>,
  },
  {
    key: "/mentor",
    icon: <UserOutlined />,
    label: <Link to="/mentor">Mentor</Link>,
  },
  {
    key: "/investor",
    icon: <TeamOutlined />,
    label: <Link to="/investor">Investor</Link>,
  },
  {
    key: "/educate",
    icon: <DashboardOutlined />,
    label: <Link to="/educate">Educate</Link>,
  },
  {
    key: "/forum",
    icon: <GlobalOutlined />,
    label: <Link to="/forum">Forum</Link>,
  },
];

// eslint-disable-next-line react/prop-types
const SideMenu = ({ children, breadCrumb }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="h-[100vh]"
      >
        <div
          className="logo"
          style={{
            height: "32px",
            margin: "16px",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
        />
      </Sider>
      <Layout className="site-layout overflow-auto h-[100vh] bg-white">
        <Header
          className=" flex gap-6 items-center sticky top-0 h-[60px] z-10 justify-between"
          style={{ padding: 0, background: "#fff" }}
        >
          <div className="flex gap-6 items-center">
          <Button
            type="primary"
            className="flex justify-center items-center mx-4 relative right-1"
            onClick={toggle}
          >
            {collapsed ? <LeftOutlined /> : <RightOutlined />}
          </Button>
          {breadCrumb && (
            <div className="font-semibold ">
              <Breadcrumb items={breadCrumb} />
            </div>
          )}
          </div>
         <div className="mx-5">
         <Button type='link' href="/" className="border-red-500 text-red-600 ">
            Logout
          </Button>
         </div>
        </Header>
        <Content className="p-4">{children}</Content>
      </Layout>
    </Layout>
  );
};

export { SideMenu };
