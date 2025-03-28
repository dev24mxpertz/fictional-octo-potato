import React, { useEffect, useRef, useState } from "react";
import Home from "./home";
import "./componentstyle.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Certificates from "./Certificates";
import ExperienceCont from "./ExperienceCont";
import covervideo from "../assests/covervideo.mp4";
import first_video from "../assests/first_video.mp4";
import Second_video from "../assests/Second_Video.mp4";
import Third_video from "../assests/Third_video.mp4";
import boymodel from "../assests/boymodel.png";

const Index = () => {
  const [loadernumber, setloadernumber] = useState(0);
  const [showHome, setshowHome] = useState(false);
  const scrollRef = useRef(null);
  const homeRef = useRef(null);
  const imagecontainerRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smoothMobile: true,
      getDirection: true,
      multiplier: 1,
    });

    scroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollRef.current.style.transform ? "transform" : "fixed",
    });

    const t1 = gsap.timeline();

    // Reduced all durations to 0.5 and combined similar steps
    // t1.to(".index_main_container_child_image_div4", {
    //   top: "50%",
    //   transform: "translate(-50%, -50%) rotate(0deg)",
    //   opacity: 1,
    //   duration: 0.5,
    //   ease: "power2.out",
    // })
    //   .to(".index_main_container_child_loadernumber", {
    //     textContent: "100%",
    //     duration: 0.5,
    //   })
    //   .to(".index_main_container_child_loader_div", {
    //     width: "100%",
    //     duration: 0.5,
    //   })
    //   .to(".index_main_container_child_loadernumber", {
    //     opacity: 0,
    //     duration: 0.5,
    //   })
    //   .to(".index_main_container_child_loader_div", {
    //     opacity: 0,
    //     duration: 0.5,
    //   })
    //   .to(".index_main_container_child_image_div4", {
    //     width: "100%",
    //     height: "100%",
    //     duration: 0.5,
    //   })
    t1.to(".index_main_container_child_image_div4_heading_div", {
      opacity: 1,
      top: "48%",
      duration: 0.5,
    })
      .to(
        ".index_main_container_child_image_div4_heading_div>h1:nth-child(1)",
        {
          fontSize: "3.7vw",
          opacity: 1,
          duration: 0.5,
        }
      )
      .to(
        ".index_main_container_child_image_div4_heading_div>h1:nth-child(2)",
        {
          fontSize: "3.5vw",
          opacity: 1,
          duration: 0.5,
        }
      )
      .to(
        ".index_main_container_child_image_div4_heading_div>h1:nth-child(1)",
        {
          fontSize: "3.3vw",
          opacity: 1,
          duration: 0.5,
        }
      )
      .to(
        ".index_main_container_child_image_div4_heading_div>h1:nth-child(2)",
        {
          fontSize: "3vw",
          opacity: 1,
          duration: 0.5,
        }
      )
      .to(
        ".index_main_container_child_image_div4_heading_div",
        {
          opacity: 1,
          top: "40%",
          duration: 0.5,
        },
        "-=1"
      )
      .to(".index_main_container_child_image_div4_heading_div>p", {
        opacity: 1,
        duration: 0.5,
      })
      .to(".index_main_container_child_image_div4_heading_div>button", {
        opacity: 1,
        duration: 0.5,
      })
      .to(".index_main_container_child_image_div4_heading_div_span", {
        opacity: 1,
        duration: 0.5,
      });

    t1.then(() => {
      setshowHome(true);
      ScrollTrigger.refresh();
      scroll.update();
    });

    window.addEventListener("resize", () => {
      scroll.update();
      ScrollTrigger.refresh();
    });

    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", () => {
        scroll.update();
        ScrollTrigger.refresh();
      });
    };
  }, [showHome]);

  return (
    <>
      <div ref={scrollRef} data-scroll-container className="scroll-container">
        <div className="index_main_container ">
          <div className="index_main_container_child_image_div4">
            <video autoPlay muted loop playsInline className="background-video">
              <source src={covervideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="index_main_container_child_image_div4_heading_div">
              <h1>Unleashing Creativity</h1>
              <h1>
                My Journey in Crafting <br />
                Digital Excellence
              </h1>
              <p>
                Welcome to my portfolio! I’m thrilled to share my journey of
                transforming ideas into impactful digital experiences. With a
                passion for creativity and a dedication to excellence, I’ve
                crafted projects that resonate, inspire, and deliver results.
                Whether it’s designing seamless user interfaces or building
                innovative solutions, every piece here reflects my commitment to
                quality and a deep love for what I do. Let’s explore the stories
                behind the pixels and code!
              </p>
              <button>EXPLORE</button>
              <span className="index_main_container_child_image_div4_heading_div_span">
                <i className="bi bi-arrow-down-circle"></i>
              </span>
            </div>
          </div>
        </div>
        {showHome && (
          <>
            <div ref={homeRef}>
              <section className="index-hero" data-scroll-section>
                <div className="hero-content-box">
                  <h1>
                    I'm{" "}
                    <span className="hero-content-box_h1span">Aman Sharma</span>{" "}
                  </h1>
                  <h3>FullStack Developer</h3>
                  <p>
                    Innovative and passionate Full Stack Developer with
                    expertise in crafting seamless and impactful digital
                    experiences. I bring a comprehensive skill set in both
                    frontend and backend technologies, including ReactJS, React
                    Native, React-Three-Fiber, Expo Router, Express, NodeJS,
                    HTML, CSS, JavaScript, GSAP, MongoDB, MySQL, RESTful
                    APIs,TypeScript and more.
                  </p>
                  <p>
                    With a strong focus on UI/UX design, I excel in tools like
                    Adobe XD and Figma, along with creating immersive 3D
                    experiences using Three.js. I’m well-versed in Firebase
                    integration, version control with Git, and building fully
                    responsive applications tailored for any device. I thrive on
                    turning ideas into reality through innovative solutions,
                    collaborating with reputed brands, and continuously
                    expanding my expertise. Let’s create something exceptional
                    together!
                  </p>

                  <div className="dividediv">
                    <p>Age - 24</p>
                    <p>Nationallity - Indian</p>
                  </div>

                  <div className="dividediv">
                    <p>Gender - Male</p>
                    <p>Language - Hindi , English</p>
                  </div>
                  <div className="dividediv">
                    <p>Phone - +916263571539</p>
                    <p>Email - amansharma1503@gmail.com</p>
                  </div>
                  <div className="socialdiv">
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://www.linkedin.com/in/amansharma1503/"
                    >
                      <button className="socialmedia_button">
                        <i className="bi bi-linkedin"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://github.com/Amansh23"
                    >
                      <button className="socialmedia_button">
                        <i className="bi bi-github"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="mail:amansharma1503@gmail.com"
                    >
                      <button className="socialmedia_button">
                        <i className="bi bi-envelope-at-fill"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://twitter.com/aman_sharma2309"
                    >
                      <button className="socialmedia_button">
                        <i className="bi bi-twitter-x"></i>
                      </button>
                    </Link>

                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://www.instagram.com/_aman_2309/"
                    >
                      <button className="socialmedia_button">
                        <i className="bi bi-instagram"></i>
                      </button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      to="https://www.facebook.com/people/Aman-Sharma/pfbid0cX3kppbcEfGeeWehkuCxC1aVEZoLXd2o4bVrBdckXnEKH9wBQ72mSCsGUEzpFtWCl/"
                    >
                      <button className="socialmedia_button">
                        <i className="bi bi-facebook"></i>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* <div ref={imagecontainerRef} className="profile_image">
                  <div ref={overlayRef} className="img-overlay"></div>
                  <img
                    src="https://images.unsplash.com/photo-1729608462362-21193b628e56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="ContainerImage"
                    ref={imageRef}
                  />
                </div> */}
                <img
                  src={boymodel}
                  alt="boymodel"
                  className="contentimg"
                  // ref={imageRef}
                />
              </section>
              <section className="exp-main" data-scroll-section>
                <ExperienceCont />
              </section>
              <section className="index-main" data-scroll-section>
                <Projects />
              </section>
              <section className="index-main" data-scroll-section>
                <Certificates />
              </section>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Index;
