import React from "react";
import SignInPage from "../layout/signIn/SignInPage";
import Network from "../network/Network";
import Error from "../pages/Error";
import Home from "../pages/Home";
const MainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/network",
    element: <Network />,
  },
  {
    path: "/jobs",
    element: <SignInPage />,
  },

  {
    path: "*",
    element: <Error />,
  },
];

export default MainRoutes;
