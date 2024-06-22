import { useEffect, useState } from "react";
import { Appbar } from "../components/appbar";
import { Balance } from "../components/balance";
import { Users } from "../components/users";
import axios from "axios";

export const Dashboard = () => {
  const [balance, setBalance] = useState("");
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setBalance(response.data.balance);
    };

    fetchBalance();
    console.log(balance);
  }, []);
  return (
    <div>
      <Appbar name={name} />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};
