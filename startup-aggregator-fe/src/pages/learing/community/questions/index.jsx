import { useParams } from "react-router-dom";
import { SideMenu } from "../../../../components/helper";
import {
  EyeOutlined,
  CommentOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Avatar, List } from "antd";

export default function CommunityQuestions() {
  const dataAll = [
    {
      title: "New to Airtable - best way to conceptualize solutions",
      description:
        "I know about the various training resources for Airtable. I am wondering what more advanced users may suggest as far as approaching how to apply the tool to particular problems. We are an HOA management group and are moving away from Town Square in o...",
      user: "HOA_manager 1",
      role: "Visitor",
      time: "May 31, 2024 3:31:34 PM",
      views: 45,
      comments: 1,
      likes: 0,
      status: null,
      category: "Other questions",
    },
    {
        title: "Local Farmers' Market",
        description: "A weekly gathering where local farmers and artisans sell fresh produce and handmade goods, fostering a sense of community.",
        user: "HOA_manager 1",
        role: "Visitor",
        time: "May 31, 2024 3:31:34 PM",
        views: 45,
        comments: 1,
        likes: 0,
        status: null,
        category: "Other questions",
        imageSrc: "https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg"
      },
      {
        title: "Community Clean-Up Event",
        description: "An organized event where community members come together to clean and beautify local parks and public spaces.",
        user: "HOA_manager 1",
        role: "Visitor",
        time: "May 31, 2024 3:31:34 PM",
        views: 45,
        comments: 1,
        likes: 0,
        status: null,
        category: "Other questions",
        imageSrc: "https://thumbs.dreamstime.com/b/diverse-people-circle-community-concept-43888196.jpg"
      },
      {
        title: "Neighborhood Watch Program",
        description: "A community-driven initiative aimed at enhancing safety and security through vigilant and cooperative efforts.",
        user: "HOA_manager 1",
        role: "Visitor",
        time: "May 31, 2024 3:31:34 PM",
        views: 45,
        comments: 1,
        likes: 0,
        status: null,
        category: "Other questions",
        imageSrc: "https://st2.depositphotos.com/1037987/5934/i/450/depositphotos_59344707-stock-photo-multi-ethnic-crowd.jpg"
      }
  ];
  const { title } = useParams();
  console.log(title);
  const item = dataAll.find((d) => d.title === decodeURIComponent(title));
  const breadCrumb =[
    {title:<a href="/learing">Learing</a>},
    {title:<a href="/learing/community">Community</a>},
    {title:item.title}


  ]
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className=" bg-blue-300 flex justify-center p-10">
        <div className=" rounded-lg p-4 max-w-2xl flex items-start gap-6  bg-gray-300">
          <div>
            <h1 className="text-xl font-bold mb-4">{item.title}</h1>
            <p className="text-sm font-semibold">{item.time}</p>
          </div>
          <div className="flex gap-2">
            <span>
              <EyeOutlined /> {item.views}
            </span>

            <span>
              <CommentOutlined /> {item.comments}
            </span>

            <span>
              <CheckCircleOutlined /> {item.likes}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-5 items-start py-5 justify-between">
        <section>
          <div className="">
            <List
              itemLayout="vertical"
              dataSource={dataAll}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <span key={item.title}>
                      <CheckCircleOutlined /> {item.likes}
                    </span>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg" />
                    }
                    // title={<p>{item.title}</p>}
                    description={
                      <div className="flex flex-col gap-2">
                        <span>{item.user}</span> <span>{item.role}</span>
                      </div>
                    }
                  />
                  <div className=" text-justify max-w-2xl">
                    {item.description}
                  </div>
                  <div className="text-gray-500 text-sm mt-2">
                    {item.time} | Posted in {item.category}
                  </div>
                </List.Item>
              )}
            />
          </div>
          <div className=" max-w-2xl border-t-2 py-3">
            <h2 className=" text-xl font-bold">1 Reply</h2>

            <List
              itemLayout="vertical"
              dataSource={dataAll}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <span key={item.title}>
                      <CheckCircleOutlined /> {item.likes}
                    </span>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg" />
                    }
                    title={
                      <div className="flex justify-between ">
                        <p>Sherman</p>
                        <p>
                          May 31, 2024 04:28 PM - edited May 31, 2024 04:29 PM
                        </p>
                      </div>
                    }
                  />
                  <div className=" text-justify max-w-2xl">
                    {item.description}
                  </div>
                  <div className="text-gray-500 text-sm mt-2">
                    {item.time} | Posted in {item.category}
                  </div>
                </List.Item>
              )}
            />
          </div>
        </section>
        <div className=" rounded-lg p-4 shadow-md">
          <h4 className="text-xl font-bold">Recommendations</h4>
          <div className="flex flex-col gap-3 font-semibold text-lg">
            <p>Accepted Solutions & Kudos</p>

            <p>Automation runs limit by mistake</p>
            <p>Suggested Formula solution</p>
            <p>Solution for bicycling club</p>
          </div>
        </div>
      </div>
    </SideMenu>
  );
}
