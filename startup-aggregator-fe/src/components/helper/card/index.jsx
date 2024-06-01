import { Card as AntDCard } from "antd";
const { Meta } = AntDCard;

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, title, description, onClick }) => {
  return (
    <AntDCard
      onClick={onClick}
      size="small"
      bordered
      hoverable
      className=" z-0"
      style={{
        width: 280,
      }}
      cover={
        <img
          alt="card"
          src={imageSrc}
          className=" w-[200px] h-[200px] object-contain p-2"
        />
      }
    >
      <Meta title={title} description={description} />
    </AntDCard>
  );
};
export { Card };
