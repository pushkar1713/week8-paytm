import { createContext, useState } from "react";

const UserInfo = createContext();

const UserProvider = ({ childern }) => {
  const [user, setUser] = useState(null);

  return (
    <UserInfo.Provider value={{ user, setUser }}>{childern}</UserInfo.Provider>
  );
};

export { UserInfo, UserProvider };
