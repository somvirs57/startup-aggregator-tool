/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Button } from "../button";
import { Card } from "../card";

const LearingCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { cardData, heading, viewAll } = props;

  const getContentAndSlice = (content, slice) => {
    if (content.length < slice) {
      return content;
    } else {
      return content.slice(0, slice) + "...";
    }
  };
  return (
    <>
      <div className="flex justify-between gap-4 py-2 items-center">
        <h2 className=" text-xl font-semibold">{heading}</h2>
        <Button type="link" href={viewAll} className="w-[200px]">
          View All
        </Button>
      </div>
      <div className=" grid grid-cols-3 gap-4 p-4 bg-gray-100">
        {cardData.map((card, index) => {
          return (
            <Link
              key={index}
              to={
                heading === "Community"
                  ? `/learing/${heading.toLowerCase()}/questions/${card.title}`
                  : `/learing/${heading.toLowerCase()}${heading =='Faqs'?'/':card.title}`
              }
            >
              <Card
                key={index}
                title={getContentAndSlice(card.title, 100)}
                description={getContentAndSlice(card.description, 200)}
                imageSrc={card.imageSrc}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export { LearingCard };
