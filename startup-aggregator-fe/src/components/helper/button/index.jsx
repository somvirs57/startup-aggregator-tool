import { Button as AndDButton } from "antd";

// eslint-disable-next-line react/prop-types
const Button = ({ type = "primary", htmlType = "submit", children, onClick }) => {
  return (
    <AndDButton
      type={type}
      htmlType={htmlType}
      onClick={onClick}
      size="middle"
      className="w-full"
    >
      {children}
    </AndDButton>
  );
};
export { Button };
