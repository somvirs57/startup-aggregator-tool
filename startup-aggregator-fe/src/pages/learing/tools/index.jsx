import { Link } from "react-router-dom";
import {  tools } from "../../../../jsone/masterData";
import { Card, SideMenu } from "../../../components/helper";

export default function Tools() {
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    { title: "Tools" },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="grid grid-cols-3 gap-10">
        {tools.map((card, index) => {
          return (
            <Link to={`/learing/tools/${card.title}`} key={index}>
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
