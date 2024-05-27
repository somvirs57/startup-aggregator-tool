import { postMethod } from "../http-client/http-services";
import { SignIn } from "./components/Auth/signin";

export default function Signin() {
    const getFormData = async (value) => {
        // console.log(value,value.option);
        try {
          const request = {
            payload: value,
            tokenType: "defult",
            endpoint: "signin",
          };
          const { data } = await postMethod(request);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <SignIn onFinish={getFormData}/>
  )
}
