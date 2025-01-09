import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProjectDetailscss.css";

const ProjectDetails = () => {
  const [data, setData] = useState(null); // Single project object, not an array
  const { id } = useParams();

  const projects = [
    {
      id: "1",
      name: "BrainyLingo",
      image: require("../assests/BrainyLingo.png"),
      link: "https://brainylingo.co.uk/",
      title: "BrainyLingo - Language Learning Platform",
      What_I_DID:
        "I have developed the entire backend and implemented all the functionality by connecting a React frontend with a Node.js backend using JWT tokens for authentication. I personally built the entire server, including all backend APIs and related functionalities. This includes integrating an autopay recurring Stripe payment system using project IDs for subscription-based services. Additionally, I implemented a feature for fetching daily question data, verifying answers, and utilizing the responses in a custom-built algorithm that efficiently fetches questions based on specific coordination logic.",
      description:
        "BrainyLingo is an innovative educational platform designed to help children improve their vocabulary skills, with a focus on preparing for the 11 Plus exam. The platform employs scientifically proven learning methods, such as spaced repetition, gamified exercises, and real-time feedback to make the learning process engaging and effective. With a subscription-based model, it offers affordable access at £24.99 per year, ensuring accessibility for parents seeking high-quality education for their children. The platform is accessible via desktop and mobile devices, ensuring flexibility in learning anytime, anywhere. Additionally, BrainyLingo stays connected with its community through active social media engagement on Instagram and Facebook.",
      keyFeatures: [
        "Interactive language exercises for children, designed with a gamified approach to enhance engagement.",
        "Real-time progress tracking and personalized feedback to ensure continuous improvement.",
        "User-friendly interface with appealing visual designs suitable for young learners.",
        "Scientifically-backed learning techniques such as spaced repetition and adaptive algorithms.",
        "Secure and seamless payment system powered by Stripe for hassle-free subscription management.",
        "Active community presence through social media for sharing updates, tips, and educational content.",
        "Multiplatform support for learning on desktops, tablets, and smartphones.",
      ],
      technologies: [
        "React", // Frontend framework for building the user interface.
        "Node.js", // Backend framework for managing server-side logic.
        "MongoDB", // NoSQL database for storing user progress and content.
        "Stripe Payment", // Secure and reliable payment gateway for subscription handling.
        "Azure", // Cloud infrastructure for hosting, scalability, and security.
        "Bootstrap", // Ensures responsive and visually appealing design.
        "Redux", // State management for efficient and seamless data flow across the app.
        "Rest APIs", // Integration for communication between the frontend and backend services.
      ],
      uniqueSellingPoints: [
        "Affordable annual subscription model priced at £24.99 for 12 months.",
        "Focus on vocabulary enhancement tailored specifically for the 11 Plus exam.",
        "Engaging gamified activities designed to sustain children's interest.",
        "Mobile and desktop compatibility for flexible learning.",
      ],
      benefits: [
        "Improves vocabulary and language skills for children aged 8–12 years.",
        "Prepares students for competitive exams with targeted vocabulary enhancement.",
        "Fosters a love for learning languages through interactive and enjoyable methods.",
        "Supports parents by offering affordable, high-quality educational resources.",
      ],
      socialMedia: {
        instagram: "https://www.instagram.com/brainy_lingo/",
        facebook:
          "https://www.facebook.com/p/BrainyLingo-11-Plus-Vocabulory-61561304861238/",
      },
      contactInfo: {
        email: "info@brainylingo.co.uk",
        website: "https://brainylingo.co.uk/",
        customerSupport: "+44 123 456 7890",
      },
    },
    {
      id: "2",
      name: "Ciksha",
      image: require("../assests/Ciksha.png"),
      link: "https://ciksha.com/",
      title: "Ciksha - Comprehensive Educational Platform",
      description:
        "Ciksha is an innovative online platform providing comprehensive educational resources and tools tailored to meet the needs of students, educators, and institutions. The platform offers a blend of modern technology and pedagogical strategies to enable seamless course management, live virtual classrooms, and detailed performance analytics. Designed to support both in-person and remote learning environments, Ciksha ensures accessibility, efficiency, and a rich learning experience for all users.",
      What_I_DID:
        "I developed the entire frontend using HTML, CSS, and JavaScript as a static website. Later, the CEO of Ciksha, Mr. Pranay Shastri, converted the HTML and CSS into PHP, making the website dynamic.",
      keyFeatures: [
        "Comprehensive course management system for educators to design and deliver content effectively.",
        "Interactive live classes with built-in chat, screen sharing, and collaborative tools.",
        "Advanced student performance analytics, providing insights into learning progress and areas for improvement.",
        "Easy-to-use interface with tools for creating quizzes, assignments, and assessments.",
        "Secure cloud-based data storage powered by Firebase, ensuring reliability and scalability.",
        "Integration with third-party tools for expanded functionality, such as Google Workspace and Zoom.",
        "Mobile-responsive design, enabling learning and teaching on any device.",
      ],
      technologies: [
        "PHP", // Frontend framework for building responsive and dynamic user interfaces.
        "MySQL", // Backend services for authentication, database management, and hosting.
        "Bootstrap", // Ensures responsive and consistent design across devices.
        "WebRTC", // Enables real-time communication for live classes and virtual interactions.
        "Cloud Firestore", // Real-time database to store and sync user data across devices.
        "RESTful APIs", // Facilitates communication between the platform's frontend and backend.
      ],
      uniqueSellingPoints: [
        "All-in-one solution for educational needs, including content creation, delivery, and evaluation.",
        "Real-time virtual classroom capabilities for enhanced remote learning experiences.",
        "Data-driven insights to help educators improve teaching outcomes and track student progress.",
        "User-friendly design tailored for educators with varying levels of tech proficiency.",
      ],
      benefits: [
        "Streamlines the teaching and learning process for both educators and students.",
        "Supports flexible learning environments, from traditional classrooms to fully remote setups.",
        "Empowers educators with tools to create engaging and interactive content.",
        "Enables institutions to monitor and enhance academic performance effectively.",
      ],
      socialMedia: {
        instagram: "https://ciksha.com/",
        facebook: "https://ciksha.com/",
      },
      contactInfo: {
        email: "https://ciksha.com/",
        website: "https://ciksha.com/",
        customerSupport: "+1 800 123 4567",
      },
    },
    {
      id: "3",
      name: "React Fiber Sample with 3D Model",
      image: require("../assests/Aisample.PNG"),
      link: "https://myaisample.netlify.app/",
      title: "React Fiber Sample - 3D Model Integration",
      What_I_DID: "The Entire Project is Build by ME",
      description:
        "This project demonstrates the integration of 3D model rendering within a React application using React Three Fiber, a React renderer for Three.js. It showcases how to import, display, and interact with 3D models, providing a foundation for building complex 3D interfaces in web applications.",
      keyFeatures: [
        "Seamless 3D model rendering within a React environment.",
        "Smooth animations enhancing user experience.",
        "Interactive user controls allowing manipulation of the 3D model.",
        "Responsive design ensuring compatibility across devices.",
        "Efficient loading and management of 3D assets.",
      ],
      technologies: [
        "React", // JavaScript library for building user interfaces.
        "React Three Fiber", // React renderer for Three.js, enabling 3D graphics in React applications.
        "Three.js", // JavaScript library for creating 3D graphics in the browser.
        "GLTFLoader", // Utility for loading GLTF models into the scene.
        "React UseGesture", // Library for handling user interactions like drag and zoom.
        "Webpack", // Module bundler for compiling JavaScript modules.
        "Babel", // JavaScript compiler for using next-generation JavaScript.
      ],
      uniqueSellingPoints: [
        "Demonstrates the power of combining React with 3D graphics.",
        "Provides a template for developers to integrate 3D models into React projects.",
        "Utilizes modern libraries and tools for optimal performance and maintainability.",
      ],
      benefits: [
        "Offers a practical example for learning React Three Fiber and Three.js.",
        "Serves as a starting point for developing interactive 3D web applications.",
        "Enhances understanding of 3D model integration and user interaction handling in React.",
      ],
      socialMedia: {
        instagram: "https://github.com/username/react-fiber-3d-sample",
        facebook: "https://www.linkedin.com/in/username/",
      },
      contactInfo: {
        email: "developer@example.com",
        website: "https://myaisample.netlify.app/",
        customerSupport: "+1 234 567 8901",
      },
    },
    {
      id: "4",
      name: "Speakable English",
      image: require("../assests/speakable.png"),
      link: "https://speakable.online/",
      title: "Speakable English - Online English Learning",
      What_I_DID:
        "Developed four dashboards (frontend and backend) to manage authentication through a single login/signup process. Integrated the ZCloud Video Call Platform SDK to enable seamless video calling functionality. Additionally, implemented various features including forms, time scheduling, and booking management.",
      description:
        "Speakable English is an intuitive online platform designed to enhance spoken English skills through interactive exercises and personalized learning paths. Catering to learners of all levels, it offers a comprehensive suite of tools aimed at improving pronunciation, expanding vocabulary, and mastering grammar.",
      keyFeatures: [
        "Pronunciation practice with instant feedback to help learners speak English more naturally.",
        "Vocabulary building exercises tailored to individual proficiency levels.",
        "Grammar exercises designed to reinforce understanding and correct usage.",
        "Interactive lessons that adapt to the learner's pace and progress.",
        "Real-time analytics to track improvement and identify areas needing attention.",
        "Access to a community of learners for collaborative practice and support.",
        "Mobile-friendly interface allowing learning on-the-go.",
      ],
      technologies: [
        "React",
        "Node.js", // Backend runtime for handling server-side operations.
        "WebRTC", // Enables real-time communication for interactive exercises.
        "Socket.io", // Facilitates real-time, bidirectional communication between client and server.
        "AWS", // Cloud services for hosting, storage, and scalability.
      ],
      uniqueSellingPoints: [
        "AI-driven pronunciation feedback providing real-time corrections.",
        "Personalized learning paths adapting to individual strengths and weaknesses.",
        "Comprehensive analytics dashboard for monitoring progress.",
        "Community features enabling peer-to-peer learning and practice.",
      ],
      benefits: [
        "Improves confidence in speaking English through consistent practice.",
        "Offers flexible learning schedules accommodating diverse lifestyles.",
        "Provides a supportive community fostering collaborative learning.",
        "Delivers measurable improvements with data-driven insights.",
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/speakableschoolofenglish/",
        instagram: "https://www.linkedin.com/company/speakable-english/",
      },
      contactInfo: {
        email: "support@speakable.online",
        website: "https://speakable.online/",
        customerSupport: "+44 20 7946 0958",
      },
    },
    {
      id: "5",
      name: "Casino",
      image: require("../assests/Casino.png"),
      link: "https://casino.betamxpertz.xyz/",
      title: "Casino - Online Gaming Platform",
      What_I_DID:
        "I developed the entire project, including the frontend (with fully functional games), the backend (with all APIs, referral program, and charts), and their seamless integration using React and Redux. Additionally, I built the admin panel, which uses the same login functionality. The entire functionality—spanning frontend and backend—was developed by me using React and Node.js.",
      description:
        "A fully-functional online casino offering a diverse range of games and betting options, providing an immersive gaming experience for enthusiasts.",
      keyFeatures: [
        "Multiple casino games including slots, blackjack, roulette, and poker.",
        "Secure payment integration ensuring safe and swift transactions.",
        "Live leaderboard showcasing top players and fostering competitive play.",
        "User-friendly interface with responsive design for seamless navigation.",
        "Real-time game updates and interactive gameplay.",
        "Customer support available 24/7 to assist with player inquiries.",
        "Mobile compatibility allowing gaming on various devices.",
      ],
      technologies: [
        "React", // Server-side scripting language for backend development.
        "NPM external packages", // Server-side scripting language for backend development.
        "MongoDB", // Relational database management system for data storage.
        "Bootstrap", // Frontend framework for responsive web design.
        "JavaScript", // Programming language for interactive elements.
        "HTML5", // Markup language for structuring web content.
        "CSS3", // Styling language for designing the website's appearance.
        "SSL Encryption", // Ensures secure data transmission between users and the platform.
      ],
      uniqueSellingPoints: [
        "Extensive game library catering to various player preferences.",
        "Robust security measures protecting user data and transactions.",
        "Live dealer options providing a realistic casino experience.",
        "Regular updates introducing new games and features.",
      ],
      benefits: [
        "Offers a convenient and accessible platform for online gaming.",
        "Provides a safe environment with secure payment and data protection.",
        "Enhances user engagement through interactive and live gaming options.",
        "Supports responsible gaming with tools and resources for players.",
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/YourCasinoPage",
        instagram: "https://www.instagram.com/YourCasinoProfile/",
      },
      contactInfo: {
        email: "support@betamxpertz.xyz",
        website: "https://casino.betamxpertz.xyz/",
        customerSupport: "+1 800 123 4567",
      },
    },
    {
      id: "6",
      name: "Navrattan Holdings (Freelancing)",
      image: require("../assests/navrattan.PNG"),
      link: "https://main--staticnavrattanholding.netlify.app/",
      title: "Navrattan Holdings - Corporate Website",
      What_I_DID:
        "This was a freelancing project where I developed the entire frontend.",
      description:
        "Navrattan Holdings Limited is a venture under the Navrattan Group of Companies, specializing in developing and acquiring intellectual property rights across various industries. The corporate website showcases the company's innovative technologies and commitment to sustainable development.",
      keyFeatures: [
        "Responsive design ensuring seamless access across devices.",
        "Comprehensive company portfolio highlighting various innovative technologies.",
        "Dynamic content management for up-to-date information.",
        "Detailed sections on company philosophy, history, and expertise.",
        "Information on various industries served, including construction, alternative energy, healthcare, agriculture, and more.",
        "Access to latest news and media releases.",
        "Contact information and links to social media profiles.",
      ],
      technologies: [
        "React", // JavaScript library for building user interfaces.
        "Tailwind CSS", // Utility-first CSS framework for styling.
        "JavaScript", // Programming language for interactive elements.
        "HTML5", // Markup language for structuring web content.
        "CSS3", // Styling language for designing the website's appearance.
      ],
      uniqueSellingPoints: [
        "Showcases over 60 innovative science and technological rights acquired globally.",
        "Emphasizes eco-friendly and sustainable technologies aimed at reducing carbon footprint.",
        "Highlights a diverse range of industries and groundbreaking innovations.",
      ],
      benefits: [
        "Provides stakeholders with comprehensive information about the company's mission, vision, and technological advancements.",
        "Demonstrates the company's commitment to environmental sustainability and innovation.",
        "Offers easy navigation and access to detailed information about various technologies and projects.",
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/navrattangroup/",
        instagram: "https://www.linkedin.com/company/navrattan-group/",
      },
      contactInfo: {
        email: "info@navrattangroup.com",
        website: "https://www.navrattangroup.com/",
        customerSupport: "+91 22 1234 5678",
      },
    },
    {
      id: "7",
      name: "React Fiber Sample with Horizontal Scroll",
      image: require("../assests/horizontalScroll.png"),
      link: "https://ai-final-beta.vercel.app/",
      title: "React Fiber - Horizontal Scroll Integration",
      What_I_DID:
        "This was a Sample project where I developed the entire Project.",
      description:
        "A demonstration project showcasing the integration of horizontal scrolling with 3D objects using React Three Fiber. This sample illustrates how to create interactive and performant 3D scenes with horizontal navigation, enhancing user engagement in web applications.",
      keyFeatures: [
        "Horizontal scrolling enabling intuitive navigation through 3D content.",
        "Interactive 3D objects that respond to user input.",
        "Performance optimizations ensuring smooth animations and responsiveness.",
        "Seamless integration of Three.js within the React ecosystem.",
        "Scalable architecture suitable for complex 3D web applications.",
        "Responsive design adapting to various screen sizes and devices.",
        "Utilization of modern React hooks and components for state management and effects.",
      ],
      technologies: [
        "React", // JavaScript library for building user interfaces.
        "React Three Fiber", // React renderer for Three.js, enabling 3D graphics in React applications.
        "Three.js", // JavaScript library for creating 3D graphics in the browser.
        "JavaScript", // Programming language for implementing interactive elements.
        "HTML5", // Markup language for structuring web content.
        "CSS3", // Styling language for designing the website's appearance.
      ],
      uniqueSellingPoints: [
        "Demonstrates advanced 3D interactions within a React application.",
        "Showcases horizontal scrolling combined with 3D object manipulation.",
        "Provides a foundation for developers to build immersive web experiences.",
      ],
      benefits: [
        "Offers a practical example for learning React Three Fiber and Three.js.",
        "Serves as a template for implementing horizontal scroll in 3D scenes.",
        "Enhances understanding of performance optimization in 3D web applications.",
      ],
      socialMedia: {
        instagram:
          "https://github.com/username/react-fiber-horizontal-scroll-sample",
        facebook: "https://www.linkedin.com/in/username/",
      },
      contactInfo: {
        email: "developer@example.com",
        website: "https://ai-final-beta.vercel.app/",
        customerSupport: "+1 234 567 8901",
      },
    },
    {
      id: "8",
      name: "TMDB Duplicate using TMDB APIs",
      image: require("../assests/TMDB.png"),
      link: "https://warm-cat-98b4c5.netlify.app/",
      title: "TMDB Clone - Movie Database",
      What_I_DID:
        "This was a Sample project where I developed the entire Project.",
      description:
        "A movie database application that replicates the core functionalities of The Movie Database (TMDB) by utilizing its APIs to display comprehensive movie details, trailers, and more.",
      keyFeatures: [
        "Movie search functionality allowing users to find films by title, genre, or keywords.",
        "Detailed movie pages presenting information such as synopsis, cast, release date, and ratings.",
        "Trailer integration enabling users to watch official trailers directly within the application.",
        "Responsive design ensuring optimal user experience across various devices.",
        "User authentication allowing personalized features like watchlists and favorites.",
        "Dynamic content updates reflecting the latest data from TMDB.",
        "Integration with TMDB's extensive database providing access to a vast collection of movies and TV shows.",
      ],
      technologies: [
        "React", // JavaScript library for building user interfaces.
        "TMDB API", // API providing access to movie and TV show data.
        "CSS Modules", // CSS technique for modular and reusable styles.
        "JavaScript", // Programming language for implementing interactive elements.
        "HTML5", // Markup language for structuring web content.
        "Netlify", // Platform for deploying and hosting web applications.
        "Axios", // Promise-based HTTP client for making API requests.
      ],
      uniqueSellingPoints: [
        "Provides a seamless user experience similar to TMDB with real-time data.",
        "Leverages TMDB's API to offer accurate and up-to-date movie information.",
        "Showcases the ability to integrate third-party APIs into a React application.",
      ],
      benefits: [
        "Allows users to explore a vast collection of movies with detailed information.",
        "Enables developers to understand the implementation of API integration in React.",
        "Demonstrates best practices in building responsive and dynamic web applications.",
      ],
      socialMedia: {
        instagram: "https://github.com/Amansh23/tmdb-clone",
        facebook: "https://www.linkedin.com/in/Amansh23/",
      },
      contactInfo: {
        email: "amansharma1503@gmail.com",
        website: "https://warm-cat-98b4c5.netlify.app/",
        customerSupport: "+1 234 567 8901",
      },
    },
    {
      id: "9",
      name: "Graham Stays",
      image: require("../assests/grhamStays.png"),
      link: "https://grhamstays.com/",
      title: "Graham Stays - Property Rental Platform",
      What_I_DID:
        "This was a project where I developed the entire Server and Connecting the Template with the Node Backend.",
      description:
        "Graham Stays is a comprehensive platform designed for listing and booking rental properties, offering users a seamless experience in finding and managing accommodations.",
      keyFeatures: [
        "Extensive property listings with detailed descriptions and high-quality images.",
        "User-friendly booking management system for both property owners and renters.",
        "Responsive design ensuring accessibility across various devices.",
        "Advanced search filters allowing users to find properties that meet specific criteria.",
        "Secure payment gateway facilitating safe and efficient transactions.",
        "User reviews and ratings providing insights into property quality and host reliability.",
        "Integration with maps for easy location identification and navigation.",
      ],
      technologies: [
        "MongoDB", // NoSQL database for efficient data storage and retrieval.
        "Tailwind CSS", // Utility-first CSS framework for rapid UI development.
        "JavaScript", // Programming language for dynamic and interactive web elements.
        "Node.js", // JavaScript runtime for building scalable server-side applications.
        "Express.js", // Web application framework for Node.js to manage server and routing.
        "AWS S3", // Cloud storage service for hosting property images and media.
        "SendGrid API", // Email delivery service for sending booking confirmations and notifications."
      ],
      uniqueSellingPoints: [
        "Comprehensive platform catering to both property owners and renters.",
        "Emphasis on user experience with intuitive design and advanced features.",
        "Secure and efficient transaction processes ensuring user trust and satisfaction.",
      ],
      benefits: [
        "Simplifies the process of finding and booking rental properties.",
        "Provides property owners with tools to manage listings and bookings effectively.",
        "Enhances user confidence through secure payments and verified reviews.",
      ],
      socialMedia: {
        facebook: "https://www.facebook.com/grahamstays",
        instagram: "https://www.instagram.com/grahamstays/",
      },
      contactInfo: {
        email: "support@grhamstays.com",
        website: "https://grhamstays.com/",
        customerSupport: "+1 800 123 4567",
      },
    },
    {
      id: "10",
      name: "EMI Calculator",
      image: require("../assests/emicalculator.png"),
      link: "https://amansh23.github.io/Emi-calculator/",
      title: "EMI Calculator - Financial Tool",
      What_I_DID:
        "This was a Sample project where I developed the entire Project.",
      description:
        "A user-friendly tool designed to calculate Equated Monthly Installments (EMIs) for various types of loans, aiding users in financial planning and decision-making.",
      keyFeatures: [
        "Accurate EMI calculations based on user inputs for loan amount, interest rate, and tenure.",
        "Comprehensive loan summary display, including total interest payable and total payment amount.",
        "Interactive sliders and input fields for intuitive data entry.",
        "Responsive design ensuring accessibility across various devices.",
        "Real-time calculation updates as users adjust input parameters.",
        "Clear and concise user interface for enhanced usability.",
        "Support for different loan types, including home loans, car loans, and personal loans.",
      ],
      technologies: [
        "HTML5", // Markup language for structuring the web content.
        "CSS3", // Styling language for designing the user interface.
        "JavaScript", // Programming language for implementing interactive functionalities.
        "GitHub Pages", // Hosting platform for deploying the web application.
      ],
      uniqueSellingPoints: [
        "Simplifies complex EMI calculations into an easy-to-use web application.",
        "Provides instant results, enabling users to make informed financial decisions.",
        "Accessible without the need for downloads or installations.",
      ],
      benefits: [
        "Assists users in understanding their loan repayment obligations.",
        "Helps in comparing different loan options by varying input parameters.",
        "Facilitates better financial planning through clear visualization of loan details.",
      ],
      socialMedia: {
        instagram: "https://github.com/amansh23/Emi-calculator",
        facebook: "https://www.linkedin.com/in/amansh23/",
      },
      contactInfo: {
        email: "amansharma1503@gmail.com",
        website: "https://amansh23.github.io/Emi-calculator/",
      },
    },
    {
      id: "11",
      name: "Sample Digiroit Website",
      image: require("../assests/digiroitwebsite.png"),
      link: "https://endearing-kheer-ba4dfd.netlify.app/",
      title: "Sample Digiroit Website",
      What_I_DID:
        "This was a Sample project where I developed the entire Project",
      description:
        "A demonstration website showcasing web design and development skills, featuring modern aesthetics and interactive elements.",
      keyFeatures: [
        "Modern and clean design with a focus on user experience.",
        "Responsive layout ensuring compatibility across various devices and screen sizes.",
        "Custom animations enhancing visual engagement and interactivity.",
        "Intuitive navigation structure for easy access to different sections.",
        "Optimized performance for fast loading times and smooth interactions.",
        "Cross-browser compatibility to ensure consistent appearance across major web browsers.",
        "Implementation of best practices in web development for maintainability and scalability.",
      ],
      technologies: [
        "HTML5", // Markup language for structuring the web content.
        "CSS3", // Styling language for designing the user interface.
        "JavaScript", // Programming language for implementing interactive functionalities.
        "Netlify", // Hosting platform for deploying the web application.
      ],
      uniqueSellingPoints: [
        "Showcases a blend of modern design principles with practical web development skills.",
        "Demonstrates proficiency in creating responsive and interactive web interfaces.",
        "Serves as a portfolio piece reflecting the capability to deliver high-quality web solutions.",
      ],
      benefits: [
        "Provides potential clients or employers with a tangible example of web development expertise.",
        "Highlights the ability to create user-friendly and aesthetically pleasing websites.",
        "Exhibits knowledge in deploying web applications to live environments.",
      ],
      socialMedia: {
        instagram: "https://github.com/amansh23/Emi-calculator",
        facebook: "https://www.linkedin.com/in/amansh23/",
      },
      contactInfo: {
        email: "",
        website: "",
      },
    },
  ];

  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setData(project);
    }
  }, [id]); // Only re-run when `id` changes

  console.log(data, "-----data");
  return (
    <div className="project-details-container">
      {data ? (
        <>
          <div className="project-header">
            <h2>{data?.title}</h2>

            <div className="project-socialmedia">
              {/* Visit Project */}
              <a
                href={data?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Visit Project
              </a>

              {/* Instagram Link */}
              <a
                href={data?.socialMedia?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="bi bi-instagram"></i>
              </a>

              {/* Facebook Link */}
              <a
                href={data?.socialMedia?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <i className="bi bi-facebook"></i>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${data?.contactInfo?.email}`}
                className="project-link"
              >
                <i className="bi bi-envelope-at-fill"></i>
              </a>
            </div>
          </div>

          <div className="project-content">
            <h6 style={{ textAlign: "left", width: "100%" }}>
              What i did in this Project:
            </h6>
            <p
              style={{ textAlign: "left", width: "100%" }}
              className="project-description"
            >
              {data?.What_I_DID}
            </p>
            <div className="project-image">
              <img src={data?.image} alt={data?.name} />
            </div>
            <div className="project-details">
              <p className="project-description">{data?.description}</p>
              <h4>Technologies Used:</h4>
              <ul className="technology-list">
                {data?.technologies?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              {/* uniqueSellingPoints */}
              <h4>Unique Selling Points:</h4>
              <ul className="technology-list">
                {data?.uniqueSellingPoints?.map((uniq, index) => (
                  <li key={index}>{uniq}</li>
                ))}
              </ul>
              {/* benefits */}
              <h4>Benefits:</h4>
              <ul className="technology-list">
                {data?.benefits?.map((benefits, index) => (
                  <li key={index}>{benefits}</li>
                ))}
              </ul>
              <h4>Key Features:</h4>
              <ul className="feature-list">
                {data?.keyFeatures?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* What_I_DID */}
            </div>
          </div>
        </>
      ) : (
        <div className="error-message">404 Project Not Found</div>
      )}
    </div>
  );
};

export default ProjectDetails;
