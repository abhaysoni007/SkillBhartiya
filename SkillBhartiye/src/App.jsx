import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Filter from "./Components/filter/Filter";
import Footer from "./Components/footer/Footer";
// import FreelancerCard from "./Components/freelancerCard/FreelancerCard";
// import Login from "./pages/login/Login";
// import BidComponent from "./Components/BidComponent/BidComponent.jsx";
// import ProposalCard from "./Components/proposalCard/ProposalCard.jsx";
// import FreelancerPortfolio from "./pages/freelancerPortfolio/FreelancerPortfolio.jsx";
// import BoxLayout from "./pages/BoxLayout/BoxLayout.jsx";
// // import BoxLayout from "./pages/jobDescription/JobDescription.jsx";
// import BoxLayout2 from "./pages/BoxLayout2/BoxLayout2.jsx";
import "./App.scss";
import JobDescription from "./pages/jobDescription/JobDescription.jsx";
import FreelancerPortfolio from "./pages/freelancerPortfolio/FreelancerPortfolio.jsx";

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
  const proposal = {
    description:
      "I am a seasoned web designer with extensive experience in creating E-commerce websites, particularly those specializing in digital products. I understand the unique requirements of selling downloadable content and will ensure your customers can easily access their purchases. My approach includes a seamless integration of membership and subscription options, allowing for flexible pricing plans and exclusive content access. I prioritize user experience and will create an intuitive, secure, and visually appealing website. By leveraging the latest technologies and best practices, I guarantee a robust platform that meets all your business needs.",
    price: 900,
    image: "./images/SkillBhartiye.jpeg",
    name: "Saurabh Sharma",
    date: "2023-03-15",
  };
  const jobDescriptionData = {
    companyName: "Tech Innovations",
    companyEmail: "contact@techinnovations.com",
    skillsRequired: ["JavaScript", "React", "Node.js", "CSS"],
    workMode: "Remote",
    timeLimit: "2 weeks",
    price: "₹5000",
    jobTitle: "Frontend Developer",
    description: [
      "We are looking for a skilled Frontend Developer to join our team.",
      "The ideal candidate should have experience with modern JavaScript frameworks.",
      "You will be responsible for building user-friendly web applications.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ullam unde sapiente quidem quisquam maxime dolor possimus voluptatum voluptatem quae! Et, laborum deleniti at delectus ad doloremque, praesentium ea molestiae tenetur excepturi nihil, accusantium totam labore odio eveniet consectetur voluptates iure distinctio quibusdam blanditiis fugit! Cum beatae assumenda voluptatem non aperiam corporis, quaerat cumque exercitationem. Commodi odio accusamus asperiores magnam sint perferendis, eum animi deserunt voluptates dignissimos eveniet velit harum earum illo repellendus! Voluptates repudiandae quidem, magni autem, perspiciatis animi dolores amet error distinctio impedit quibusdam illum, provident recusandae rerum nihil quo optio. Distinctio repellat, accusamus quam itaque cum odit consectetur tenetur nulla nam aperiam ea delectus laboriosam molestiae laudantium. Quasi vitae exercitationem amet, molestiae laborum fugiat suscipit id impedit consectetur est nobis non consequatur, vel ex eum recusandae iusto iste. Voluptas perferendis maiores nihil dolor quasi laborum veniam dicta eum saepe, et, amet voluptatibus. At nisi ullam numquam sapiente mollitia molestias provident blanditiis, quos tempore quod illum facere laboriosam quo sed nostrum temporibus quisquam voluptatem eveniet praesentium nulla minima nihil sit? Eum in aliquid enim voluptate non sit repudiandae, magnam ratione exercitationem est quisquam ducimus nam dolorum commodi deserunt quasi. Repellendus, quasi reprehenderit? Numquam quibusdam blanditiis maxime vel qui, voluptatibus consequuntur ducimus at hic non perferendis impedit suscipit, id sed fuga aspernatur dicta quam voluptates eveniet asperiores nesciunt deserunt quod ea. Fugiat at magnam ea inventore sint error doloribus molestiae in, provident ipsam quis iure eius ad possimus saepe quos dolores magni quo amet veritatis consequatur. Blanditiis, non cum? Hic dolore assumenda cum necessitatibus molestias reprehenderit, earum, neque eveniet ullam eum voluptates minima et, facilis odio quas ab molestiae. Praesentium similique ex tempore natus corrupti consequatur dolores. Voluptatem, soluta? Libero, eligendi consequatur itaque fugit molestias labore animi nulla cupiditate ex unde sequi doloribus reiciendis dolorem ullam doloremque incidunt quos voluptas quam? Sunt amet sequi dolorem laudantium quae fugiat nam sed debitis ea similique perspiciatis reiciendis, dolore animi, sapiente, tenetur id magnam nulla eligendi asperiores sint cum mollitia voluptates rem! Ad nisi fuga omnis repellat mollitia ducimus maxime nemo rem fugiat saepe corrupti, vitae voluptate, sit itaque. Voluptatem sit inventore libero nesciunt odit illum qui ipsam, labore fuga numquam eligendi expedita accusamus voluptas porro. Molestias impedit, nisi voluptatibus quidem illum nobis quisquam. In, saepe. Voluptatum iusto, dolores fugiat pariatur, in placeat laudantium excepturi praesentium, reiciendis voluptas dignissimos? Reprehenderit fugiat saepe ex exercitationem veritatis, magni optio eum dicta unde suscipit quaerat doloribus iusto dignissimos libero aut omnis maiores qui ipsam magnam eligendi. Earum enim molestiae rem, saepe amet delectus aliquid molestias, corrupti architecto velit mollitia sequi officiis et, eaque laborum accusantium ipsum excepturi numquam. Quisquam commodi voluptate quaerat debitis id eveniet fuga ullam natus itaque laborum porro nulla molestiae odio tempore, eius aperiam architecto repudiandae recusandae quam et nisi ipsa magni qui. Nobis voluptatem voluptates similique ab enim vitae dolores error porro, libero itaque veritatis nemo! Quibusdam fuga reprehenderit deleniti labore veritatis doloribus aut vitae, quis, cupiditate voluptatum sit, rem consequuntur odio animi blanditiis ipsam architecto saepe non harum incidunt nobis! Quod rem, doloribus sit quis vitae odit consequatur tempora molestiae ipsum dolorum aliquam saepe, illo enim cumque doloremque modi voluptatem nisi assumenda quam perferendis animi cupiditate ex facere quidem. Recusandae consectetur nemo facere incidunt soluta atque asperiores. Harum voluptates itaque beatae amet asperiores, officia molestiae optio aliquam quaerat cumque ratione nesciunt ex mollitia dolor ad odio facere nostrum? Quia ipsa harum deleniti aspernatur fugiat, aliquam ratione, et recusandae beatae reprehenderit temporibus placeat praesentium? Quo repellendus commodi dolor voluptatem eveniet laudantium natus consequuntur corporis nemo iste mollitia pariatur quam nihil necessitatibus harum sequi quibusdam, ipsum rem id. Corporis voluptatibus qui, reiciendis beatae esse id itaque, mollitia at perferendis molestiae iure eveniet quo culpa tenetur exercitationem! Sapiente dolorem consequuntur laudantium numquam nostrum id veritatis nulla. Facilis officia consequatur ipsum repudiandae atque. Non dicta ducimus doloribus magni ullam aspernatur doloremque minus, officia temporibus nihil, rerum molestias consequuntur. Eos voluptatem veniam quisquam repellat consectetur corporis, molestias sunt quam adipisci aliquam libero ipsa et dolor dolores est nemo quaerat modi sapiente soluta ea doloribus sint reprehenderit deserunt ipsam? Amet aliquid temporibus quisquam totam enim saepe, beatae, corrupti ad illum deleniti vitae? Beatae harum numquam magni obcaecati error. Ab excepturi fugiat officiis commodi explicabo minus rem dolorum eius tenetur id? Eveniet harum quae laboriosam maiores animi cumque consequuntur! Molestiae exercitationem cum dolore dolores corporis necessitatibus sit, dolorum quisquam itaque ipsa ab repellendus facilis nemo voluptates hic officia architecto minima eligendi? Quis assumenda quae laboriosam tenetur eligendi soluta libero facere delectus voluptas excepturi, cumque aliquam repellat, iure, optio unde sint quibusdam quod fugiat harum? Eaque quam rem eos voluptatum hic architecto ratione veniam. Nihil laudantium hic rerum quos! Illum, quidem delectus quo tempora facilis autem accusamus quae sapiente sit quod nostrum rem officia possimus. Totam recusandae veniam quos, fuga quod odit nostrum pariatur officia minus similique ducimus unde optio iste molestiae. Earum obcaecati illo voluptate beatae rerum magnam. Ea illum ab, repudiandae provident doloribus repellat earum doloremque delectus excepturi eum atque itaque assumenda, natus iure, quibusdam qui sit. Dolore ipsa necessitatibus alias minima dolores doloribus doloremque exercitationem aperiam, ex veritatis vel repellat quis expedita illo porro aspernatur debitis. Labore mollitia eaque ullam libero ex possimus quod deserunt minus eum harum placeat, eius maxime velit aliquid exercitationem, ipsam consectetur expedita magni nihil tenetur reiciendis aut excepturi sed. Pariatur nostrum, temporibus eius fugiat quasi eum commodi aspernatur deleniti, earum, autem labore ea doloremque? Consectetur, minima tempore? Illo nulla voluptatibus veritatis. Aliquam ex nihil iusto dolore ratione fugiat nesciunt veniam eligendi odit odio. Laborum itaque enim vitae alias, repellendus quod, sunt possimus suscipit temporibus quaerat corrupti commodi, provident ab eligendi omnis neque veritatis ipsam molestiae hic officia fuga. Unde distinctio, optio maiores ab placeat voluptatibus nisi id omnis magnam ullam, sint, incidunt perspiciatis libero ipsa? Aspernatur laboriosam, eum explicabo libero placeat, error debitis autem architecto dolore obcaecati consequatur quisquam quasi suscipit temporibus blanditiis. Nulla ducimus explicabo aliquid recusandae quisquam inventore velit ipsum quae assumenda, eum eius quasi fugiat, ratione eveniet officia veniam? Repudiandae deleniti eius repellendus nostrum provident, dolorem non.",
    ],
    proposals: [
      {
        description:
          "I have extensive experience in frontend development and can deliver high-quality work.",
        price: 4500,
        image: "./images/SkillBhartiye.jpeg",
        name: "Saurabh Sharma",
        date: "2023-03-15",
      },
      {
        description:
          "I specialize in React and have worked on multiple successful projects.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos rem doloribus unde amet ea incidunt asperiores deleniti ad, consequuntur maiores quaerat nulla optio at eligendi laboriosam nam corporis quam nobis itaque assumenda qui nostrum? Nobis, accusamus nemo aliquam eaque, ipsam voluptatibus exercitationem minus ullam quidem reiciendis, dolore nam ducimus architecto.",
        price: 4800,
        image: "./images/SkillBhartiye.jpeg",
        name: "Anjali Verma",
        date: "2023-03-14",
      },
      {
        description:
          "I can create responsive and visually appealing web applications.",
        price: 5000,
        image: "./images/SkillBhartiye.jpeg",
        name: "Rahul Singh",
        date: "2023-03-13",
      },
    ],
  };
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
        {/* <BidComponent />
        <ProposalCard proposal={proposal} /> */}

        {/* <BoxLayout2/> */}
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
