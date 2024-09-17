
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <a href="https://www.facebook.com/Prafful Singh" target="_blank" className="items" rel="noopener noreferrer">
          <CiFacebook className="icons" />
        </a>
        <a href="https://www.linkedin.com/in/kumarPrafful012" target="_blank" className="items" rel="noopener noreferrer">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://twitter.com/@Prafful95240465" target="_blank" className="items" rel="noopener noreferrer">
          <FaTwitterSquare className="icons" />
        </a>
        <a href="https://github.com/Pk7372singh" target="_blank" className="items" rel="noopener noreferrer">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:praffulkumarbkj2001@gmail.com" target="_blank" className="items" rel="noopener noreferrer">
          <SiGmail className="icons" />
        </a>
        <a href="https://www.instagram.com/pk7372singh" target="_blank" className="items" rel="noopener noreferrer">
          <FaInstagram className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
