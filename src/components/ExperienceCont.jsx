import React from "react";
import logo1 from "../assests/bookimg.png";
import { Link } from "react-router-dom";

const ExperienceCont = () => {
  return (
    <>
      <h2 className="expheading">EDUCATION</h2>

      <div className="Exptimeline">
        <div className="Expcontainer Expleft-container">
          <img src={logo1} alt="Timeline icon" />
          <div className="Exptext-box">
            <h2>
              Secondary School (10th) <small>2015-16</small>
            </h2>
            <p>Maharishi Vidya Mandir, Chhatarpur, Madhya Pradesh</p>
            <strong>CBSE BOARD with 8.0 CGPA</strong>
            <strong>
              <Link className="Exptext-box_link" target="_blank">
                https://mvmchhatarpur.org/
              </Link>
            </strong>
            <span className="Expleft-container-arrow"></span>
          </div>
        </div>
        <div className="Expcontainer Expright-container">
          <img src={logo1} alt="Timeline icon" />
          <div className="Exptext-box">
            <h2>
              Higher Secondary School (12th) <small>2017-18</small>{" "}
            </h2>

            <p>Maharishi Vidya Mandir, Chhatarpur, Madhya Pradesh</p>
            <strong>CBSE BOARD with 7.4 CGPA</strong>
            <strong>
              <Link className="Exptext-box_link" target="_blank">
                https://mvmchhatarpur.org/
              </Link>
            </strong>
            <span className="Expright-container-arrow"></span>
          </div>
        </div>
        <div className="Expcontainer Expleft-container">
          <img src={logo1} alt="Timeline icon" />
          <div className="Exptext-box">
            <h2>
              Bachelor of Technology (B.Tech) <small>2019-13</small>{" "}
            </h2>
            <p>Sagar Institute of Research and Technology (No Backlogs)</p>
            <strong>CBSE BOARD with 7.4 CGPA</strong>
            <strong>
              <Link className="Exptext-box_link" target="_blank">
                https://www.sirtbhopal.ac.in/
              </Link>
            </strong>
            <span className="Expleft-container-arrow"></span>
          </div>
        </div>
        <div className="Expcontainer Expright-container">
          <img src={logo1} alt="Timeline icon" />
          <div className="Exptext-box">
            <h2>
              Sheriyans Coding School <small>2020-23</small>{" "}
            </h2>
            <strong>
              <Link className="Exptext-box_link" target="_blank">
                https://www.sheryians.com/
              </Link>
            </strong>
            <span className="Expright-container-arrow"></span>
          </div>
        </div>
      </div>
      <h2 className="expheading">EXPERIENCE</h2>

      <div className="Exptimeline">
        <div className="Expcontainer Expright-container">
          <img src={logo1} alt="Timeline icon" />
          <div className="Exptext-box">
            <h2>
              Worked as a FullStack Developer trainee ( Paid ){" "}
              <small>Aug 2023 - Nov 2023</small>{" "}
            </h2>
            <p>Digiroit technologies PVT LTD</p>

            <strong>
              <Link className="Exptext-box_link" target="_blank">
                https://www.digiroit.com/
              </Link>
            </strong>
            <span className="Expright-container-arrow"></span>
          </div>
        </div>
        <div className="Expcontainer Expleft-container">
          <img src={logo1} alt="Timeline icon" />
          <div className="Exptext-box">
            <h2>
              Worked as a FullStack Developer <small>Dec 2023 - Jan 2025</small>{" "}
            </h2>
            <p>
              Mxpertz Infolabs, CK Naidu Building, Old Palasia, Indore, Madhya
              Pradesh
            </p>
            <strong>
              "Worked on various projects during my complete 1-year tenure
              including both Frontend and Backend Technologies"
            </strong>
            <strong>
              <Link className="Exptext-box_link" target="_blank">
                https://mxpertz.com/
              </Link>
            </strong>
            <span className="Expleft-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCont;
