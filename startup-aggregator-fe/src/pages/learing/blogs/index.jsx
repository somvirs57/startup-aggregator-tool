import { Link } from "react-router-dom";
import { blogs } from "../../../../jsone/masterData";
import { Card, SideMenu } from "../../../components/helper";

export default function Blogs() {
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    { title: "Blogs" },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="grid grid-cols-3 gap-10">
        {blogs.map((card, index) => {
          return (
            <Link to={`/learing/blogs/${card.title}`} key={index}>
              <Card
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
              />
            </Link>
          );
        })}
      </div>
    </SideMenu>
  );
}
