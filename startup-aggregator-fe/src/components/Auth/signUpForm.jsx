import { Form, Input, Select } from "antd";
import { useState } from "react";
import { RightSide } from "./rightSide";
import { RoleSelect } from "./roleSelect";
import { startupName } from "../../../jsone/masterData";
import { Button } from "../helper";
const { Option } = Select;

// eslint-disable-next-line react/prop-types
const SignUp = ({ onFinish }) => {
  const [role, setRole] = useState("entrepreneur");

  const [form] = Form.useForm();
  const getFormData = (values) => {
    const formData = {...values, role};
    // console.log("Success:", values);
    onFinish(formData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onOptionChange = (e) => {
    setRole(e.target.value);
    form.resetFields();
  };
  const Entrepreneur = () => {
    return (
      <div>
        <Form.Item
          label="Startup Name"
          name="startupName"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Startup Name" />
        </Form.Item>

        <Form.Item
          label="Start up Stage "
          name="startupStage"
          rules={[{ required: true, message: "Required" }]}
        >
          <Select placeholder="Start up Stage ">
            {
              startupName.map(e=> <Option key={e} value={e}>{e}</Option>)
            }

          </Select>
        </Form.Item>

        <Form.Item
          label="Industry"
          name="industry"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Industry" />
        </Form.Item>
        <Form.Item
          label="Business Model "
          name="businessModel"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="businessModel" />
        </Form.Item>
        <Form.Item
          label="Funding Needs"
          name="fundingNeeds"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="fundingNeeds" />
        </Form.Item>

        <Form.Item
          label="Pitch Deck Url"
          name="pitchDeckUrl"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Pitch Deck Url " />
        </Form.Item>
      </div>
    );
  };
  const Mentor = () => {
    return (
      <div>
        <Form.Item
          label="Expertise"
          name="expertise "
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Expertise " />
        </Form.Item>

        <Form.Item
          label="Years Of Experience"
          name="yearsOfExperience"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input type="number" placeholder="Years Of Experience " />
        </Form.Item>

        <Form.Item
          label="Industry"
          name="industry"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="industry " />
        </Form.Item>

        <Form.Item
          label="Mentor Bio "
          name="pitchDeckUrl"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Pitch Deck Url " />
        </Form.Item>
        <Form.Item
          label="Availability"
          name="availability"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Select placeholder="Availability">
            <Option value="fullTime">Full-time</Option>
            <Option value="partTime">Part-time</Option>
          </Select>
        </Form.Item>
      </div>
    );
  };
  const Investor = () => {
    return (
      <div>
        <Form.Item
          label="Investment Range"
          name="investmentRange"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Investment Range  " />
        </Form.Item>

        <Form.Item
          label="Portfolio Size"
          name="portfolioSize"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input type="number" placeholder="Portfolio Size" />
        </Form.Item>

        <Form.Item
          label="Preferred Industries"
          name="industry"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="industry " />
        </Form.Item>

        <Form.Item
          label="Investment Thesis"
          name="pitchDeckUrl"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input placeholder="Investment Thesis" />
        </Form.Item>
        <Form.Item
          label="Investment Stage"
          name="investmentStage"
          rules={[{ required: true, message: "Please select an option!" }]}
        >
          <Select placeholder="Investment Stage ">
            <Option value="fullTime">Seed</Option>
            <Option value="partTime">Early</Option>
          </Select>
        </Form.Item>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center items-center bg-white left-form">
        <div className="max-w-lg w-full h-[90vh] overflow-auto px-5 m-auto sigin-form">
          <div className="text-center">
          <RoleSelect
              name="role"
              onOptionChange={onOptionChange}
              role={role}
            />
          </div>
          <Form
            form={form}
            name="signup"
            initialValues={{ remember: true }}
            onFinish={getFormData}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
          

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            {/* entrepreneur */}
            {role === "entrepreneur" && <Entrepreneur />}
            {/* Mentor */}
            {role === "mentor" && <Mentor />}

            {role === "investor" && <Investor />}
            <Form.Item>
            <Button>
             Sign Up
             </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center mt-4">
            <a href="/" className="text-blue-500 hover:underline">
              Already have an account? Log in
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Marketing text */}
      <RightSide />
    </div>
  );
};
export { SignUp };
