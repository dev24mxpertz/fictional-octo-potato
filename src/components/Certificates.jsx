import React from "react";
import MernCertiificate from "../assests/MernCertificate.jpg";
import FrontendCertificate from "../assests/FrontendCertificate.jpg";
import BackendCertificate from "../assests/BackendCertificate.jpg";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <div className="Certificates_container">
      <div className="Certificates_rightcontainer">
        <Link
          style={{ textDecoration: "none" }}
          to="https://drive.google.com/file/d/145NKOivOEQBB5bxj-TUqdgzBR3jKxk0d/view"
          target="_blank"
          className="Certificates_box"
        >
          <img src={MernCertiificate} alt="MernCertiificate" />
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="https://drive.google.com/file/d/13yg-0yZnuklXBA3-YxejM4Wuo1xRMm7w/view?usp=sharing"
          target="_blank"
          className="Certificates_box"
        >
          <img src={FrontendCertificate} alt="FrontendCertificate" />
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="https://drive.google.com/file/d/142RdfRRjNszdaCLebhpP4-HHVkTxVPIg/view"
          target="_blank"
          className="Certificates_box"
        >
          <img src={BackendCertificate} alt="BackendCertificate" />
        </Link>
      </div>
      <div className="Certificates_Leftcontainer">
        <h3>Certificates</h3>
        <p>
          Below are the certificates I’ve earned throughout my professional
          journey. These certifications showcase my skills and knowledge in
          frontend and backend development, along with my dedication to
          continuous learning and growth. My Frontend Development and Backend
          Development certificates highlight my expertise in creating seamless
          and efficient user experiences, while the MERN Stack certification
          reflects my proficiency in modern JavaScript development.
          Additionally, my Internship Certificate at Digiroit Technologies and 1
          Year Experience Certificate at MXpertz demonstrate my hands-on
          experience and commitment to real-world problem-solving.
        </p>

        <span>
          <i class="bi bi-arrow-left"></i>
        </span>
      </div>
    </div>
  );
};

export default Certificates;
