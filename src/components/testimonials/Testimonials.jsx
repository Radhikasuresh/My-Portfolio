import "./testimonials.scss";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <div className="section-title" id="project">
        <h2 className="project">Projects</h2>
        <div className="admin">
          Login Credentials:
          <p>Email: admin123@gmail.com &nbsp; &nbsp;&nbsp;Password: admin123</p>
          <p></p>
        </div>
      </div>
      <div class="testimonials">
        <div class="container">
          <div class="banner-img10"></div>
          <h1 class="name" style={{ color: "rgb(44, 73, 167)" }}>
            Zen Class Query Resolving-Clone
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/Radhikasuresh/ticketing-system-frontend"
                )
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://peaceful-cranachan-00a32d.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/Radhikasuresh/ticketingSystemBackend"
                )
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as a Zen Class Query
            Resolve-Clone.<br></br>This application is used to get the queries
            resolved.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
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
          <div class="banner-img25"></div>
          <h1 class="name" style={{ color: "tomato" }}>
            Stack-overflow Clone
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/Radhikasuresh/stack-overflow-client"
                )
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://lovely-khapse-d83e50.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/Radhikasuresh/stack-overflow-server"
                )
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as Stack-overflow<br></br>
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
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
          <div class="banner-img26"></div>
          <h1 class="name" style={{ color: "tomato" }}>
            Pizza-Paradise
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/Pizza-FE")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://pizza-paradise-app.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/Pizza-BE")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as Pizza-App.<br></br>A web
            application designed to facilitate the seamless selection,
            customization, and ordering of pizzas
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
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

        {/* <div class="container">
          <div class="banner-img15"></div>
          <h1 class="name" style={{ color: "tomato" }}>
          Project Management
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/Project-management")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("https://peaceful-dieffenbachia-2d3188.netlify.app/")}
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/Project-management-FE")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as project-management.<br></br>This
            application is used to Post your Tasks and their description.
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
              REACT, NODE, EXPRESS JS, MONGODB, REDUX
            </span>
          </p>
        </div> */}

        {/* <div class="container">
          <div class="banner-img"></div>
          <h1 class="name" style={{ color: "green" }}>
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
        </div> */}
        <div class="container">
          <div class="banner-img18"></div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>
            Equipment Rental App
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/payment-frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://equipment-rental-portal.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/payment-backend")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN site made as Equipment Rental Portal.
            <br />
            <p>
              In this app, User can rent a product using Razor pay,it has admin
              panel.
            </p>
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
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
              REACT, NODE JS,MONGODB
            </span>
          </p>
        </div>
        <div class="container">
          <div class="banner-img17"></div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>
            Chat App
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://github.com/Radhikasuresh/Chat-App-Frontend"
                )
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open(
                  "https://extraordinary-hummingbird-8e401b.netlify.app/"
                )
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/Chat-App-Backend")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
            This is Fullstack MERN website made it as a Chatting App.
            <br />
            <p>
              A real-time communication platform enabling interactive text-based
              conversations between users.
            </p>
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
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
              REACT, NODE, SOCKET.IO
            </span>
          </p>
        </div>
        {/* <div class="container">
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
        </div> */}

        {/* <div class="container">
          <div class="banner-img5"></div>
          <h1 class="name" style={{ color: "rgb(44, 73, 167)" }}>
           URL-Shortener
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/url-shortener-frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() => window.open("https://free-url-shortener.netlify.app/")}
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/url-shortener-backend")
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
        </div> */}
        {/* 
        <div class="container">
          <div class="banner-img6"></div>
          <h1 class="name" style={{ color: "rgba(255, 0, 0, 0.534)" }}>
          Calculator
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/domcalc")
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
        </div> */}
        <div class="container">
          <div class="banner-img33"></div>
          <h1 class="name" style={{ color: "green" }}>
            To-Do App
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/To-Do-App")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://frabjous-gumption-737093.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            This is Frontend website made it as a To-Do App.<br></br>It is a
            task management tool that helps users organize and prioritize their
            tasks, increasing productivity and ensuring efficient completion of
            daily activities.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
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
              REACT JS
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img13"></div>
          <h1 class="name" style={{ color: "rgba(255, 0, 0, 0.534)" }}>
            Nationalize API
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/Nationalize-api")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://strong-ganache-7babb7.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            This is Frontend website made it as a Nationalize-API.<br></br>It is
            a web service that provides insights into the likely nationality of
            a given name.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
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

        <div class="container">
          <div class="banner-img4"></div>
          <h1 class="name" style={{ color: "rgb(218, 181, 181)" }}>
            Weather Tracker
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Radhikasuresh/Weather-Site")
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
            This website is a Weather Tracker.<br></br>This site is used
            to know your Current Location Weather.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.8rem",
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
