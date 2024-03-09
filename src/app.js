import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Header from "./utils/Header";
import Footer from "./utils/Footer";





const AppLayout = () => {
  return <div className="container w-[100%] overflow-hidden ">
    <Header/>
    <Outlet/>
    <Footer/>
  </div>;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
