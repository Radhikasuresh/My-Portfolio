import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdOpen } from 'react-icons/io'

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Fullstack MERN Developer", "Web Developer","Frontend Developer","Resilient","Self-motivator", " Dreamer", "Ambitious Person", "Goal-driven Person"],
    });
  }, []);

  return (
    <>
    <div className="intro" id="intro">
      <div className="left">
          <h2>Hi There, I'm </h2>
          <h1>Radhika Suresh</h1>
          <h3>
            I am a <span ref={textRef}></span><br></br>
          </h3>
          <p>Passionate Software Developer, Eager to Learn and Innovate.</p>
            <button onClick={() => window.open( 'https://drive.google.com/file/d/1bJHmFnoXXPDY-GwQqm02ane7j8mq5ZEa/view' )} style={{ backgroundColor: "#0e0e0e", border: "none", color: "rgb(255, 145, 213)", margin: "3rem", padding: "8px", justifyContent: "center", alignItems: "center", alignContent: "center", display: "flex", gap: "5px", borderRadius: "7px", cursor: "pointer", fontWeight: 700 }}>View My Resume. <IoMdOpen size={22} color="rgb(65, 201, 255)"/></button>
          
            <div className="container">
            <button className="icon" onClick={() => window.open( 'https://github.com/Radhikasuresh')}>
                <FaGithub size={25} color="rgb(65, 201, 255)" />
                <span style={{fontSize: "15px", color: "white", fontWeight: "bold"}}>Github</span>
            </button>
            <button className="icon" onClick={() => window.open( 'https://www.linkedin.com/in/radhika-suresh-835a34203/')}>
                <FaLinkedin size={25} color="rgb(65, 201, 255)" />
                <span style={{ fontSize: "15px", color: "white", fontWeight: "bold"}}>LinkedIn</span>
            </button>
            
            </div>
            <p> Fueling the Full Stack journey with a fresh perspective and relentless passion! 🚀 As a budding Full Stack Developer, I blend creativity with technical prowess to craft innovative web solutions. 💡 Eager to immerse myself in front-end magic and back-end wizardry, I thrive on the challenges of bridging user experiences and server-side functionality.</p>

                </div>
      <div className="right">
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    </>
  );
}
