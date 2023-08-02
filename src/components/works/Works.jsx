import "./works.scss";
import { TiHtml5 } from "react-icons/ti";
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { IoLogoNpm, IoLogoGithub } from "react-icons/io";

export default function Works() {
  return (
    <>
      <div id="about">
        <section id="about" class="about">
          <div className="about-me container">
            <div className="section-title">
              <h2>Me?</h2>
              <p className="section-title">Let's get to know me</p>
            </div>

            <div class="row">
                <h3>FullStack Web Developer</h3>
                <p className="para">
                Highly motivated and adaptable full-stack developer, proficient in front-end and back-end technologies. Eager to contribute to innovative projects and collaborate in a dynamic team environment.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <strong>
                          <span style={{ color: "#18d26e" }}>➤ </span> Full Name :
                        </strong>
                        <span>Radhika.S</span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ color: "#18d26e" }}>➤ </span> Born :
                        </strong>
                        <span>20 April 1999</span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ color: "#18d26e" }}>➤ </span> Department :
                        </strong>
                        <span>
                           Electronics and Communication Engineering
                        </span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ color: "#18d26e" }}>➤ </span> Degree :
                        </strong>
                        <span>
                          Bachelor's of Engineering
                        </span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ color: "#18d26e" }}>➤ </span>Nationality :
                        </strong>
                        <span>Indian</span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ color: "#18d26e" }}>➤ </span>Languages :
                        </strong>
                        <span> English,Tamil</span>
                      </li>
                      <li>
                        <strong>
                          <span style={{ color: "#18d26e" }}>➤ </span>City :
                        </strong>
                        <span>Chennai,TN,India</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="para">
                  I Started off my self-learning journey with online tutorials
                  Google, YouTube etc and take a step
                  further and Enrolled in the GUVI IIT MADRAS Fullstack
                  developer Nanodegree Program which involved extensive
                  programming and real world projects. 
                </p>
            </div>
            <div className="section-title">
              <h2>My Skills</h2>
              <div className="skill">
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(148, 89, 21)" }}
                >
                  HTMl
                  <TiHtml5 color="orange" size={35} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(12, 58, 128)", gap: "3px" }}
                >
                  CSS
                  <SiCss3 color="white" size={25} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(133, 134, 38)", gap: "3px" }}
                >
                  JavaScript
                  <SiJavascript color="rgb(245, 221, 7)" size={25} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(87, 70, 105)", gap: "3px" }}
                >
                  Bootstrap
                  <SiBootstrap color="#080135" size={30} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(28, 92, 97)", gap: "3px" }}
                >
                  React
                  <SiReact color="#61DBFB" size={27} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(61, 21, 21)", gap: "3px" }}
                >
                  Node
                  <SiNodedotjs color="#8f8f8f" size={30} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(48, 131, 32)", gap: "3px" }}
                >
                  Mongodb
                  <SiMongodb color="#103d0e" size={30} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(185, 0, 0)", gap: "3px" }}
                >
                  <IoLogoNpm color="#fffffff" size={50} />
                </div>
                <div
                  className="skill-cintainer"
                  style={{ backgroundColor: "rgb(133, 105, 105)", gap: "3px" }}
                >
                  Github
                  <IoLogoGithub color="#171515" size={30} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
