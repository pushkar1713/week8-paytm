import Heading from "../components/heading";
import SubHeading from "../components/subHeading";
import InputBox from "../components/inputBox";
import { Button } from "../components/button";
import BottomText from "../components/bottomText";
import { useState } from "react";
import axios from "axios";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen bg-slate-300 w-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            placeholder="John"
            label={"First Name"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputBox
            label={"Last Name"}
            placeholder={"Doe"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <InputBox
            label={"Email"}
            placeholder={"xyz@email.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"must have atleast 6 characters"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              label={"Sign Up"}
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    firstName,
                    lastName,
                    password,
                  }
                );

                localStorage.setItem("token", response.data.token);
              }}
            />
          </div>
          <BottomText
            label={"Already have an account?"}
            buttonText={"Sign Up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};
