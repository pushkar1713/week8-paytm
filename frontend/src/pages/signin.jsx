import Heading from "../components/heading";
import SubHeading from "../components/subHeading";
import InputBox from "../components/inputBox";
import { Button } from "../components/button";
import BottomText from "../components/bottomText";
import { useContext, useState } from "react";
import axios from "axios";
// import { UserInfo } from "../util/usercontext";
import { Navigate, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  // const { setUser } = useContext(UserInfo);

  return (
    <div className="h-screen bg-[#e8f2ee] w-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            label={"Email"}
            placeholder={"xyz@email.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              label={"Sign In"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username: email,
                    password: password,
                  }
                );

                localStorage.setItem("token", response.data.token);
                localStorage.setItem("name", response.data.firstname);
                Navigate("/dashboard");

                // setUser({ username: email });
                console.log("signed in successfully");
              }}
            />
          </div>
          <BottomText
            label={"Don't have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
