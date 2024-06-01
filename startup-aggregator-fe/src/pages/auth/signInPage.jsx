import { useState } from "react";
import { postMethod } from "../../../http-client/http-services";
import { SignIn } from "../../components/auth";
import {  useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
const [isLaoding, setLoading] = useState(false)
    const getFormData = async (value) => {
        // console.log(value,value.option);
        setLoading(true)
        try {
          const request = {
            payload: value,
            tokenType: "defult",
            endpoint: "signin",
          };
          const { data } = await postMethod(request);
          navigate('/dashboard')
          console.log(data);
        } catch (error) {
          console.log(error);
          navigate('/dashboard')
          setLoading(false)
        }
      };
  return (
    <SignIn onFinish={getFormData} isLaoding={isLaoding}/>
  )
}
