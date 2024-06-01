import { Card } from "antd";
import { SideMenu } from "../../components/helper";
import { ReadOutlined, FileTextOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons';

const data = {
  blogs: 10,
  articles: 5,
  guides: 7,
  community: 15,
};
const Dashboard = () => {
  const breadCrumb = [
    { title: 'Dashboard' }
  ];

  return (
    <SideMenu breadCrumb={breadCrumb}>
    <div className="dashboard-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="shadow rounded-lg" title="Blogs" bordered={false}>
            <ReadOutlined style={{ fontSize: '2rem' }} />
            <p className="text-2xl font-semibold">{data.blogs}</p>
          </Card>
          <Card className="shadow rounded-lg" title="Articles" bordered={false}>
            <FileTextOutlined style={{ fontSize: '2rem' }} />
            <p className="text-2xl font-semibold">{data.articles}</p>
          </Card>
          <Card className="shadow rounded-lg" title="Guides" bordered={false}>
            <AppstoreOutlined style={{ fontSize: '2rem' }} />
            <p className="text-2xl font-semibold">{data.guides}</p>
          </Card>
          <Card className="shadow rounded-lg" title="Community" bordered={false}>
            <TeamOutlined style={{ fontSize: '2rem' }} />
            <p className="text-2xl font-semibold">{data.community}</p>
          </Card>
        </div>
      </div>
    </SideMenu>
  );
};

export default Dashboard;
