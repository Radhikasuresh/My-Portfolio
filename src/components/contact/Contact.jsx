import "./contact.scss";
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'



export default function Contact() {
  return (
    <>
    <div id="about">
        <section class="about con" >
          <div className="contact" id="contact">
            <div className="section-titles">
              <h2 className="h2" id="h2">Drop me a Line,Let's Connect</h2>
              <p className="sec-title">Contact</p>
              </div>
            </div>
            </section>
            <div className="parent">
            <div className="email">
              <div className="round"><MdLocationOn className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">Location</p>
              <p className="sub">Chennai,TN,India.</p>
              </div>
            <div className="email">
              <div className="round"><MdEmail className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">E-Mail</p>
              <p className="sub" style={{ fontSize: "1rem", marginLeft: "4.5rem", textDecoration: "none" }}> 
              <a style={{ textDecoration: "none", color: "#18d26e", marginLeft: "1rem" }} href="mailto:radhikasuresh550@gmail.com"> radhikasuresh550@gmail.com </a></p>
              </div>
            <div className="email">
              <div className="round"><FaLinkedin className="mdl" size={40} color="rgb(65, 201, 255)" /></div>
              <p className="loca">LinkedIn</p>
              <p className="sub" style={{ fontSize: "1rem", marginLeft: "2.2rem", textDecoration: "none" }}> 
              <a style={{ textDecoration: "none", color: "#18d26e" }} href="https://www.linkedin.com/in/radhika-suresh-835a34203/"> radhika-suresh </a></p>
              </div>

            </div>
            </div>

            </>
  );

  }
