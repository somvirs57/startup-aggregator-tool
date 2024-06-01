import { Link } from "react-router-dom";
import { templates } from "../../../../jsone/masterData";
import { Card, SideMenu } from "../../../components/helper";

export default function Templates() {
  const breadCrumb = [
    {
      title: <a href="/learing">Learing</a>,
    },
    { title: "Templates" },
  ];
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="grid grid-cols-3 gap-10">
        {templates.map((card, index) => {
          return (
            <Link to={`/learing/templates/${card.title}`} key={index}>
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
