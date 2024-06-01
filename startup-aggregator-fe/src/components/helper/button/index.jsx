/* eslint-disable react/prop-types */
import { Button as AndDButton } from "antd";

const Button = ({
  type = "primary",
  htmlType = "submit",
  children,
  onClick,
  href,
  className,
  res,
}) => {
  return (
    <AndDButton
      type={type}
      href={href}
      htmlType={htmlType}
      onClick={onClick}
      size="middle"
      className={className}
      {...res}
    >
      {children}
    </AndDButton>
  );
};
export { Button };
