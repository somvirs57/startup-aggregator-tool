import { Link } from "react-router-dom";
import { guides } from "../../../../jsone/masterData";
import { Card, SideMenu } from "../../../components/helper";

export default function Guides() {
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    { title: "Guides" },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="grid grid-cols-3 gap-10">
        {guides.map((card, index) => {
          return (
            <Link to={`/learing/guides/${card.title}`} key={index}>
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
