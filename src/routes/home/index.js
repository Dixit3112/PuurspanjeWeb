import React from "react";
import Home from "../../componets/home";
import MainActivity from "../../componets/activiteiten";
import BlogPostPg from "../../componets/blogPostPage";
import BlogingPage from "../../componets/blogpg";
import MainContact from "../../componets/contact";
import RegioOverVeiw from "../../componets/regioOverveiwPg";
import ProvinceOverVu from "../../componets/provinceOverveiwPg";
import RegioDetails from "../../componets/regioDetailpg";
import MainSporten from "../../componets/sportenpg";
import MainGolfPage from "../../componets/lasGolf";
import DefaultLayout from "..";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/activitypg",
        element: <MainActivity />,
      },
      {
        path: "/blogPostPage",
        element: <BlogPostPg />,
      },
      {
        path: "/blogingPg",
        element: <BlogingPage />,
      },
      {
        path: "/contact",
        element: <MainContact />,
      },
      {
        path: "/regioOverVU",
        element: <RegioOverVeiw />,
      },
      {
        path: "/provinceOverveiw",
        element: <ProvinceOverVu />,
      },
      {
        path: "/regDetails",
        element: <RegioDetails />,
      },
      {
        path: "/mainSport",
        element: <MainSporten />,
      },
      {
        path: "/mainGolfSport",
        element: <MainGolfPage />,
      },
    ],
  },
]);
export default router;
