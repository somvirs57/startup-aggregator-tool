import { Tabs, List, Avatar, Button } from 'antd';
import { EyeOutlined, CommentOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { SideMenu } from '../../../components/helper';

const { TabPane } = Tabs;

const dataAll = [
  {
    title: "New to Airtable - best way to conceptualize solutions",
    description: "I know about the various training resources for Airtable. I am wondering what more advanced users may suggest as far as approaching how to apply the tool to particular problems. We are an HOA management group and are moving away from Town Square in o...",
    user: "HOA_manager 1",
    role: "Visitor",
    time: "May 31, 2024 3:31:34 PM",
    views: 45,
    comments: 1,
    likes: 0,
    status: null,
    category: "Other questions"
  }
];

const dataSolutions = [
  {
    title: "Removing Lines After a Specific Text",
    description: "Hello everyone! I'm a new member in the airtable community and wanted help on my airtable problems. I currently have a base table that receives emails, the problem currently is that it saves the whole email chain instead of just the email itself. I w...",
    user: "Nariesss 4",
    role: "Data Explorer",
    time: "May 29, 2024 11:03:14 PM",
    views: 67,
    comments: 2,
    likes: 0,
    status: "Solved",
    category: "Formulas"
  }
];

const dataUnanswered = [
  {
    title: "When will Airtable make the 'create a table from scratch' start from scratch?",
    description: "mainly a tiny rant. but i pretty much always create a new table from scratch. and Every. Single. Time i have to go in and delete the extra fields that airtable always includes. i don't want Notes, and user, and status and whatnot.if it is 'from scratch'...",
    user: "Erin_Alter 6",
    role: "Interface Innovator",
    time: "May 31, 2024 3:04:33 PM",
    views: 30,
    comments: 0,
    likes: 0,
    status: null,
    category: "Other questions"
  }
];

const CommunityActivity = () => {
  const breadCrumb = [
    {title:<a href='/learing'>Learing</a>},
    {title:'Community'}
  ]
  return (
   <SideMenu breadCrumb={breadCrumb}>
     <div className=" p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Community Activity</h1>
        <Button type="primary">Create a Post</Button>
      </div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="All" key="1">
          <List
            itemLayout="vertical"
            dataSource={dataAll}
            renderItem={item => (
              <List.Item
                actions={[
                  <span key={item.title}><EyeOutlined /> {item.views}</span>,
                  <span key={item.title}><CommentOutlined /> {item.comments}</span>,
                  <span key={item.title}><CheckCircleOutlined /> {item.likes}</span>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg" />}
                  title={<a href={`/learing/community/questions/${item.title}`}>{item.title}</a>}
                  description={<span>{item.user} - {item.role}</span>}
                />
                <div>{item.description}</div>
                <div className="text-gray-500 text-sm mt-2">{item.time} | Posted in {item.category}</div>
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Solutions" key="2">
          <List
            itemLayout="vertical"
            dataSource={dataSolutions}
            renderItem={item => (
              <List.Item
                actions={[
                  <span key={item.title}><EyeOutlined /> {item.views}</span>,
                  <span key={item.title}><CommentOutlined /> {item.comments}</span>,
                  <span key={item.title}><CheckCircleOutlined /> {item.likes}</span>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg" />}
                  title={<a href="">{item.title}</a>}
                  description={<span>{item.user} - {item.role}</span>}
                />
                <div>{item.description}</div>
                <div className="text-gray-500 text-sm mt-2">{item.time} | Posted in {item.category}</div>
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="Unanswered" key="3">
          <List
            itemLayout="vertical"
            dataSource={dataUnanswered}
            renderItem={item => (
              <List.Item
                actions={[
                  <span key={item.title}><EyeOutlined /> {item.views}</span>,
                  <span key={item.title}><CommentOutlined /> {item.comments}</span>,
                  <span key={item.title}><CheckCircleOutlined /> {item.likes}</span>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg" />}
                  title={<a href="">{item.title}</a>}
                  description={<span>{item.user} - {item.role}</span>}
                />
                <div>{item.description}</div>
                <div className="text-gray-500 text-sm mt-2">{item.time} | Posted in {item.category}</div>
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    </div>
   </SideMenu>
  );
};

export default CommunityActivity;
