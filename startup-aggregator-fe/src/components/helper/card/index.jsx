import { Card as AntDCard } from "antd";
const { Meta } = AntDCard;

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, title, description }) => {
  return (
    <AntDCard
    size="small"
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="card" src={imageSrc} />}
    >
      <Meta title={title} description={description} />
    </AntDCard>
  );
};
export { Card };
