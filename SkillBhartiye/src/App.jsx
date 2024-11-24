import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Filter from "./Components/filter/Filter";
import Footer from "./Components/footer/Footer";
import FreelancerCard from "./Components/freelancerCard/FreelancerCard";
import Login from "./pages/login/Login";
import FreelancerPortfolio from "./pages/freelancerPortfolio/FreelancerPortfolio.jsx";
// import BoxLayout from "./pages/BoxLayout/BoxLayout";
import "./App.scss";

function App() {
  const freelancer = {
    img: "./images/SkillBhartiye.jpeg", // URL to the freelancer's profile image
    name: "Saurabh Sharma",
    email: "saurabh.sharma@example.com",
    rating: 4, // Rating out of 5
    education: "Bachelor of Technology in Computer Science",
    passingYear: "2022",
    experience: "3 years of experience in web development and design",
    experienceYear: "2020 - Present",
    workMode: "Remote",
    topSkills: ["React", "Node.js", "Express", "JavaScript", "CSS"],
    title: "Full Stack Developer",
    description:
      "I am a passionate full-stack developer with expertise in building scalable web applications. I have a strong foundation in both front-end and back-end technologies.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Responsive Design",
    ],
    greetings: "Looking forward to collaborating with you!",
    video: "./videos/SkillBhartiye.mp4", // URL to an intro video
    projectPhoto: [
      "./images/SkillBhartiye.jpeg",
      "./images/SkillBhartiye.jpeg",
      "./images/SkillBhartiye.jpeg",
      "./images/SkillBhartiye.jpeg",
      "./images/SkillBhartiye.jpeg",
    ],
    reviewCards: [
      {
        id: 1,
        rating: 5,
        title: "Exceptional Work!",
        content:
          "Saurabh delivered outstanding work on our project. Highly recommended!",
        author: "Meena Pandey",
        date: "2023-03-15",
        authorImage: "./images/SkillBhartiye.jpeg",
      },
      {
        id: 2,
        rating: 4,
        title: "Great Communication",
        content: "Very responsive and easy to work with. Will hire again!",
        author: "John Doe",
        date: "2023-02-20",
        authorImage: "./images/SkillBhartiye.jpeg",
      },
      {
        id: 3,
        rating: 5,
        title: "Highly Skilled Developer",
        content:
          "Saurabh's skills in React and Node.js are impressive. He helped us achieve our goals!",
        author: "Jane Smith",
        date: "2023-01-10",
        authorImage: "./images/SkillBhartiye.jpeg",
      },
      {
        id: 4,
        rating: 5,
        title: "Highly Skilled Developer",
        content:
          "Saurabh's skills in React and Node.js are impressive. He helped us achieve our goals!",
        author: "Jane Smith",
        date: "2023-01-10",
        authorImage: "./images/SkillBhartiye.jpeg",
      },
      {
        id: 5,
        rating: 5,
        title: "Highly Skilled Developer",
        content:
          "Saurabh's skills in React and Node.js are impressive. He helped us achieve our goals!",
        author: "Jane Smith",
        date: "2023-01-10",
        authorImage: "./images/SkillBhartiye.jpeg",
      },
    ],
    from: "New Delhi, India",
    memberSince: "2021",
    verification: "Verified Freelancer",
  };
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
          element: <FreelancerPortfolio freelancer={freelancer} />,
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
