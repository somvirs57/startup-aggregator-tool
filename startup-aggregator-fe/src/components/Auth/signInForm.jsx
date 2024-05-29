import { Form, Input } from "antd";
import { RightSide } from "./rightSide";
import { Button } from "../helper";

// eslint-disable-next-line react/prop-types
const SignIn = ({onFinish}) => {


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="grid grid-cols-2 gap-10 h-full">
      {/* Left side - Form */}
      <div className=" flex flex-col justify-center items-center bg-white w-full">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Welcome back!</h2>
            <p>Start managing your system faster and better</p>
          </div>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
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

            <Form.Item>
             <Button>
             Sign In
             </Button>
              {/* <Button type="default" icon={<GoogleOutlined />} className="w-full mb-2">
                  Continue with Google
                </Button>
                <Button type="default" icon={<FacebookOutlined />} className="w-full">
                  Continue with Facebook
                </Button> */}
            </Form.Item>
          </Form>
          <div className="flex justify-between mt-4">
            <a href="" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Marketing text */}
      <RightSide />
    </div>
  );
};
export { SignIn };
