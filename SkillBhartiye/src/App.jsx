import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Filter from "./Components/filter/Filter";
import Footer from "./Components/footer/Footer";
import FreelancerCard from "./Components/freelancerCard/FreelancerCard";
// import BoxLayout from "./pages/BoxLayout/BoxLayout"; 
import "./App.scss";

function App() {
  const Layout = () => {
    return (
      <div className="app">
          <Navbar />
          <Outlet />
          <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <FreelancerCard/>,
        },
        {
          path: "/filter",
          element: <Filter />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}



export default App;