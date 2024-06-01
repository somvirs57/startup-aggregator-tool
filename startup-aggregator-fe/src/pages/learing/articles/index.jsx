import { Link } from "react-router-dom";
import { articles } from "../../../../jsone/masterData";
import { Card, SideMenu } from "../../../components/helper";

export default function Articles() {

  const breadCrumb = [{
    title:<a href="/learing">Learing</a>
  },{title:'Articles'}]
  return (
    <SideMenu breadCrumb={breadCrumb}>
      <div className="grid grid-cols-3 gap-10">
        {articles.map((card, index) => {
          return (
            <Link to={`/learing/articles/${card.title}`} key={index}>
             <Card
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            /></Link>
           
          );
        })}
      </div>
    </SideMenu>
  );
}
