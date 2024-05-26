import { Form, Input, Button } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
              rules={[{ required: true, message: 'Required' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Required' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full mb-4">
                Login
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
            <a href="" className="text-blue-500 hover:underline">Forgot Password?</a>
            <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
          </div>
        </div>
      </div>

      {/* Right side - Marketing text */}
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        <div className="max-w-md w-full text-center">
          <h2 className="text-4xl font-bold mb-4">Join over 62,000+ Digital marketers and business owners around the world</h2>
          <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
