import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex bg-green-300 justify-around">
      <Link to={"/"}>
        <h1 className="flex m-2 p-2">बटुआ</h1>
      </Link>
      <ul className="flex">
        <Link to={"/signin"}>
          <li className="m-2 p-2">Login</li>
        </Link>
        <a href="https://github.com/pushkar1713/week8-paytm">
          <li className="m-2 p-2">Github</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
