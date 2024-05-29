import { postMethod } from "../../../http-client/http-services";
import { SignUp } from "../../components/auth";


export default function Signup() {
  const getFormData = async (value) => {
    // console.log(value,value.option);
    try {
      const request = {
        payload: value,
        endpoint: "/signup",
      };
      console.log(request)
      const { data } = await postMethod(request);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <SignUp onFinish={getFormData} />;
}
