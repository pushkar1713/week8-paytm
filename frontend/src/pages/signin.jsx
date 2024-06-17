import Heading from "../components/heading";
import SubHeading from "../components/subHeading";
import InputBox from "../components/inputBox";
import { Button } from "../components/button";
import BottomText from "../components/bottomText";

export const SignIn = () => {
  return (
    <div className="h-screen bg-slate-300 w-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox label={"Email"} placeholder={"xyz@email.com"} />
          <InputBox label={"Password"} placeholder={"password"} />
          <div className="pt-4">
            <Button label={"Sign In"} />
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
