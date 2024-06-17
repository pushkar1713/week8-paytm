import Heading from "../components/heading";
import SubHeading from "../components/subHeading";
import InputBox from "../components/inputBox";
import { Button } from "../components/button";
import BottomText from "../components/bottomText";

export const SignUp = () => {
  return (
    <div className="h-screen bg-slate-300 w-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox placeholder="John" label={"First Name"} />
          <InputBox label={"Last Name"} placeholder={"Doe"} />
          <InputBox label={"Email"} placeholder={"xyz@email.com"} />
          <InputBox
            label={"Password"}
            placeholder={"must have atleast 6 characters"}
          />
          <div className="pt-4">
            <Button label={"Sign Up"} />
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
