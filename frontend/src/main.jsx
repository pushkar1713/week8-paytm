import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
        path: "/signup", // parentPath/{path} => localhost:1244/about
        element: <Signup />,
        children: [
          {
            path: "signin",
            element: <Signin />, // parentPath/{path} => localhost:1244/about/profile
          },
        ],
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
