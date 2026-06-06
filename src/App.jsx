import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import weddingImg from "./assets/wedding.JPG";
import ImageRain from "./components/ImageRain";
import "./App.css";
import Chatbot from "./components/ChatBot";

function App() {
  return (
    <>
      <ImageRain />
      <div className="app-content">
        <section id="center">
          <div className="hero">
            <img
              src={weddingImg}
              className="hero__photo"
              style={{ width: "450px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <h1 style={{ margin: 0 }}>Hello My Melanie</h1>
            <img src="/src/assets/hi.png" style={{ height: "6em" }} />
          </div>
        </section>

        <section id="next-steps">
          <div id="chatbot">
            <Chatbot />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
