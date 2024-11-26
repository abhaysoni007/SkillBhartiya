import React from 'react';
import FilterCard from "../../Components/filter/Filter"; 
import  EcommerceCard from '../../Components/ecommerceCard/EcommerceCard';
import './BoxLayout2.scss';

  const ecommerceCards = [
    {
      title: "Graphic Design",
      description: "Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. Professional graphic design services for all your branding needs. v",
      priceRange: "$50 - $150",
      skills: "Adobe Photoshop, Illustrator",
      mode: "online",
    },
    {
      title: "Web Development",
      description: "Build modern, responsive, and feature-rich websites tailored to your unique needs, ensuring seamless performance, stunning design, and user-friendly interfaces that leave a lasting impression.",
      priceRange: "$300 - $1000",
      skills: "HTML, CSS, JavaScript, React",
      mode: "online",
    },
    {
      title: "Graphic Design",
      description: "Elevate your brand with my professional freelance graphic design services, crafted to meet all your branding needs. Whether it’s designing logos, social media graphics, business cards, or promotional materials, I bring creativity and attention to detail to every project.",
      priceRange: "$50 - $150",
      skills: "Adobe Photoshop, Illustrator",
      mode: "online",
    },
    {
      title: "Web Development",
      description: "As a freelance web developer, I specialize in building modern, responsive websites that are tailored to your unique needs. Whether you’re looking for a sleek portfolio, a robust e-commerce platform, or a dynamic business website.",
      priceRange: "$300 - $1000",
      skills: "HTML, CSS, JavaScript, React",
      mode: "online",
    },
    {
      title: "Content Writing",
      description: "Delivering captivating and tailored content writing services for blogs, websites, and more. As a freelancer, I create engaging, SEO-friendly content that resonates with your audience, enhances your brand’s voice, and drives results.",
      priceRange: "$20 - $200",
      skills: "SEO, Blog Writing, Copywriting",
      mode: "online",
    },
    {
      title: "Digital Marketing",
      description: "Boost your brand’s visibility and reach with expertly crafted digital marketing campaigns. As a freelancer, I design targeted strategies tailored to your goals,and more to engage your audience and drive measurable results.",
      priceRange: "$100 - $500",
      skills: "SEO, Social Media Ads, Email Marketing",
      mode: "online",
    },
    {
      title: "Mobile App Development",
      description: "Develop innovative mobile apps with sleek, user-friendly designs and powerful functionality. As a freelancer, I specialize in crafting custom mobile solutions that meet your unique needs,an intuitive user experience across platforms.",
      priceRange: "$500 - $2000",
      skills: "Flutter, React Native, Kotlin",
      mode: "online",
    },
    {
      title: "Photography",
      description: "Preserve your special moments with professional photography services. As a freelancer, I capture meaningful events with creativity and precision, whether it's portraits, events, or product photography, ensuring every shot tells your unique story.",
      priceRange: "$150 - $500",
      skills: "Portrait, Event, Product Photography",
      mode: "online",
    },
    {
      title: "Video Editing",
      description: "Professional video editing for ads, events, and YouTube.",
      priceRange: "$100 - $400",
      skills: "Premiere Pro, After Effects",
      mode: "online",
    },
    {
      title: "UI/UX Design",
      description: "Design intuitive user interfaces for apps and websites.",
      priceRange: "$200 - $1000",
      skills: "Figma, Sketch, Adobe XD",
      mode: "online",
    },
    {
      title: "Virtual Assistance",
      description: "Efficient virtual assistance to manage your daily tasks.",
      priceRange: "$15 - $100",
      skills: "Scheduling, Communication, Data Entry",
      mode: "online",
    },
    {
      title: "Language Translation",
      description: "Accurate and culturally sensitive translation services.",
      priceRange: "$20 - $150",
      skills: "English, Spanish, French, Mandarin",
      mode: "online",
    }
  ]


const BoxLayout2 = () => {
  return (
    <div className="box-layout">
      <div className="content-box">
        <FilterCard />
        <div className="ecommerce-cards">
      {ecommerceCards.map((card,index) => ( <EcommerceCard key={index} 
          {...card} 
          className="ecommerce-card" 
        />
      ))}
    </div>
      </div>
    </div>
  );
};

export default BoxLayout2;