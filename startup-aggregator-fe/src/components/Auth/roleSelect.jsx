/* eslint-disable react/prop-types */
import { Form, Radio } from "antd";

const RoleSelect = ({onOptionChange, role,name}) => {

  return (
    <Form.Item>
      <Radio.Group onChange={onOptionChange} value={role} name={name}>
        <Radio value="entrepreneur">Entrepreneur</Radio>
        <Radio value="mentor">Mentor</Radio>
        <Radio value="investor">Investor</Radio>
      </Radio.Group>
    </Form.Item>
  );
};
export { RoleSelect };
