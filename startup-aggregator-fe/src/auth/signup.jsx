import { Form, Input, Button, Radio, Select } from "antd";
import { useState } from "react";
const { Option } = Select;

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [option, setOption] = useState("entrepreneur");

  const onOptionChange = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center items-center bg-white left-form">
        <div className="max-w-lg w-full h-[90vh] overflow-auto px-5 m-auto sigin-form">
          <div className="text-center">
            <Form.Item>
              <Radio.Group onChange={onOptionChange} value={option}>
                <Radio value="entrepreneur">Entrepreneur</Radio>
                <Radio value="mentor">Mentor</Radio>
                <Radio value="investor">Investor</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form
            name="signup"
            initialValues={{ remember: true }}
            onFinish={onFinish}
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
            {option === "entrepreneur" && (
              <div>
                <Form.Item
                  label="Startup Name"
                  name="startupName"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="Startup Name" />
                </Form.Item>

                <Form.Item
                  label="Select Option"
                  name="selectOption"
                  rules={[
                    { required: true, message: "Please select an option!" },
                  ]}
                >
                  <Select placeholder="Select an option">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    <Option value="option3">Option 3</Option>
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
                  label="Funding Needs"
                  name="fundingNeeds"
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="fundingNeeds" />
                </Form.Item>

                <Form.Item
                  label="Pitch Deck Url "
                  name="pitchDeckUrl "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="Pitch Deck Url " />
                </Form.Item>
              </div>
            )}
            {/* Mentor */}
            {option === "mentor" && (
              <div>
                <Form.Item
                  label="Expertise"
                  name="expertise "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="Expertise " />
                </Form.Item>

                <Form.Item
                  label="Years Of Experience "
                  name="yearsOfExperience "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input type="number" placeholder="Years Of Experience " />
                </Form.Item>

                <Form.Item
                  label="Industry "
                  name="industry "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="industry " />
                </Form.Item>

                <Form.Item
                  label="Mentor Bio "
                  name="pitchDeckUrl "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="Pitch Deck Url " />
                </Form.Item>
                <Form.Item
                  label="Availability"
                  name="availability"
                  rules={[
                    { required: true, message: "Please select an option!" },
                  ]}
                >
                  <Select placeholder="Availability">
                    <Option value="fullTime">Full-time</Option>
                    <Option value="partTime">Part-time</Option>
                  </Select>
                </Form.Item>
              </div>
            )}

            {option === "investor" && (
              <div>
                <Form.Item
                  label="Investment Range "
                  name="investmentRange  "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="Investment Range  " />
                </Form.Item>

                <Form.Item
                  label="Portfolio Size"
                  name="portfolioSize "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input type="number" placeholder="Portfolio Size" />
                </Form.Item>

                <Form.Item
                  label="Preferred Industries "
                  name="industry "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="industry " />
                </Form.Item>

                <Form.Item
                  label="Investment Thesis"
                  name="pitchDeckUrl "
                  rules={[{ required: true, message: "Required" }]}
                >
                  <Input placeholder="Investment Thesis" />
                </Form.Item>
                <Form.Item
                  label="Investment Stage "
                  name="investmentStage "
                  rules={[
                    { required: true, message: "Please select an option!" },
                  ]}
                >
                  <Select placeholder="Investment Stage ">
                    <Option value="fullTime">Seed</Option>
                    <Option value="partTime">Early</Option>
                  </Select>
                </Form.Item>
              </div>
            )}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full mb-4">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-blue-500 hover:underline">
              Already have an account? Log in
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Marketing text */}
      <div className=" flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <div className="max-w-md w-full text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join over 62,000+ Digital marketers and business owners around the
            world
          </h2>
          <p>
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
