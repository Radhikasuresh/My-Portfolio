import "./testimonials.scss";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <div className="section-title" id="project">
        <h2 className="project">Projects</h2>
      </div>
      <div class="testimonials">
        <div class="container">
          <div class="banner-img1"></div>
          <h1 class="name" style={{ color: "crimson" }}>
           Epic Launcher Clone
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/epiclauncher")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://vermillion-fox-953994.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            This is Frontend website made as EpicLauncher Clone.
           
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, REDUX
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img"></div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>
           Web-Scrapper
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/scrapping-frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://scrapping-frontend-72p8.vercel.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
                      </div>
          <p class="description">
            This is Fullstack MERN website made it as a Web-Scrapper.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img5"></div>
          <h1 class="name" style={{ color: "rgb(44, 73, 167)" }}>
           URL-Shortener
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Thiru-cse/Explorer-Frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("https://explorer-thiru.vercel.app/")}
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Thiru-cse/Explorer-Backend")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as a Blog.<br></br>This
            application is used to Post your thoughts.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img6"></div>
          <h1 class="name" style={{ color: "rgba(255, 0, 0, 0.534)" }}>
          Calculator
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Thiru-cse/Vchat-Frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("https://strong-moxie-d94bee.netlify.app/")}
            >
              View Site <IoMdOpen />
            </button>
           
          </div>
          <p class="description">
            This is Frontend website made it as a Calculator.<br></br>This
            application is used for Mathematical Calculation.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
            HTML,CSS,JAVASCRIPT
            </span>
          </p>
        </div>

        {/* <div class="container">
          <div class="banner-img3"></div>
          <h1 class="name" style={{ color: "rgb(255, 65, 65)" }}>
            YouTube Clone
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() => window.open("")}
            >
              Github <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://thiru-youtube-clone.vercel.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            This website made it as a Youtube.<br></br>This application is used
            to watch videos.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              HTML, CSS, JAVASCRIPT
            </span>
          </p>
        </div> */}

        <div class="container">
          <div class="banner-img4"></div>
          <h1 class="name" style={{ color: "rgb(218, 181, 181)" }}>
            Weather Tracker
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/Radhikasuresh/Weather-Site"
                )
              }
            >
              Github <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://hilarious-capybara-1d29c8.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            This website made it as a Weather Tracker.<br></br>This site is used
            to know your Current Location Weather.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem"
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              HTML, CSS, JAVASCRIPT
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
