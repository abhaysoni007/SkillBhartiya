import React from 'react';
import FilterCard from "../../Components/filter/Filter";
import FreelancerCard from '../../Components/freelancerCard/FreelancerCard';
import './BoxLayout.scss';

// Freelancer data
const freelancers = [
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "swayam_mrudal",
    skills: "SEO-PPC Advertising - Social Media Marketing",
    price: 600,
    title: "Digital Marketing Strategist TOP RATED FREELANCER",
    description:
      "A results-driven digital marketing strategist with a track record of developing successful online campaigns. Expertise in SEO, PPC, and social media marketing. Committed to driving brand awareness and increasing ROI.",
    rating: 3,
    mode: "Offline",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "mark_tech",
    skills: "Full-Stack Development - React - Python",
    price: 1200,
    title: "Software Engineer",
    description:
      "Builds dynamic web applications and backend systems. Expertise in modern frameworks and ensuring high scalability. Focused on delivering seamless user experiences and maintaining robust system performance.",
    rating: 5,
    mode: "Online",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "emma_design",
    skills: "Graphic Design - UI/UX - Figma",
    price: 900,
    title: "UI/UX Designer",
    description:
     "Transforms ideas into visually stunning and user-friendly interfaces. Passionate about creating seamless digital experiences. Dedicated to ensuring designs align with client goals and user needs.",
    rating: 4.5,
    mode: "Online",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "alex_marketer",
    skills: "Digital Marketing - SEO - Analytics",
    price: 750,
    title: "Marketing Strategist",
    description:
      "Crafts data-driven strategies to increase brand visibility and sales. Proficient in SEO and marketing tools.",
    rating: 4,
    mode: "Offline",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "sara_writer",
    skills: "Creative Writing - Blog Writing - Editing",
    price: 600,
    title: "Professional Writer",
    description:
      "Writes engaging blogs and articles tailored to your audience. Skilled at proofreading and improving readability.",
    rating: 3.5,
    mode: "Offline",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "leo_dev",
    skills: "Mobile App Development - Flutter - Java",
    price: 1500,
    title: "App Developer",
    description:
      "Develops feature-rich mobile applications for Android and iOS. Ensures performance and usability are top-notch.",
    rating: 5,
    mode: "Online",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "mia_artist",
    skills: "Illustration - Graphic Design - Branding",
    price: 800,
    title: "Freelance Illustrator",
    description:
      "Creates custom illustrations and brand assets. Focuses on delivering visually impactful designs for your needs.",
    rating: 4.5,
    mode: "Offline",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "tom_code",
    skills: "Frontend Development - React - CSS",
    price: 1100,
    title: "Frontend Developer",
    description:
      "Builds interactive and responsive user interfaces with a strong focus on design and functionality. Strives to enhance user satisfaction through innovative and intuitive designs.",
    rating: 4.7,
    mode: "Online",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "olivia_photography",
    skills: "Photography - Editing - Adobe Lightroom",
    price: 500,
    title: "Professional Photographer",
    description:
      "Specializes in portrait and event photography. Delivers high-quality images and creative post-editing.",
    rating: 4.2,
    mode: "Offline",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "noah_data",
    skills: "Data Analysis - SQL - Machine Learning",
    price: 1300,
    title: "Data Scientist",
    description:
      "Expert in turning raw data into actionable insights. Skilled in machine learning models and data visualization.",
    rating: 5,
    mode: "Online",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "lucas_voice",
    skills: "Voiceover - Audio Editing - Narration",
    price: 600,
    title: "Voiceover Artist",
    description:
      "Offers professional voiceover services for commercials, audiobooks, and more. Clear and engaging voice.",
    rating: 4,
    mode: "Offline",
  },
  {
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh7s-ikEFdk4yow2pzV0F_c38QDKMXDgrxwA&s",
    username: "sophia_translate",
    skills: "Translation - Subtitling - Language Services",
    price: 650,
    title: "Professional Translator",
    description:
      "Provides accurate translations for documents, videos, and more. Fluent in multiple languages with a focus on quality.",
    rating: 4.3,
    mode: "Online",
  }
  // Add more freelancers as needed
];

const BoxLayout = () => {
  return (
    <div className="box-layout">
      <div className="content-box">
        <FilterCard />
        <div className="freelancer-cards">
          {freelancers.map((freelancer, index) => (
            <FreelancerCard key={index} {...freelancer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxLayout;
