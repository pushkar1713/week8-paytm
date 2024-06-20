import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorComp from "./pages/errorComp";
import Header from "./pages/header";
import Footer from "./pages/footer";
import HomePage from "./pages/homepage";
import { SignUp } from "./pages/signup";
import { SignIn } from "./pages/signin";
import { SendMoney } from "./pages/sendMoney";
import { Dashboard } from "./pages/dashboard";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComp />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup", // parentPath/{path} => localhost:1244/about
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />, // parentPath/{path} => localhost:1244/about/profile
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/send",
        element: <SendMoney />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
