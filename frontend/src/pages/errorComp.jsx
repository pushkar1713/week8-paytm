import NotFoundImg from "../assets/NotFound.png";

const ErrorComp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f1c30f]">
      {/* Centering container */}
      <div className="flex flex-col items-center w-[800px]">
        <img src={NotFoundImg} alt="" />
      </div>
    </div>
  );
};

export default ErrorComp;
