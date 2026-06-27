import { useEffect, useState } from "react";
import weddingImg from "./assets/wedding.JPG";
import ImageRain from "./components/ImageRain";
import PlacesMap from "./components/PlacesMap";
import StoryBook from "./components/StoryBook";
import "./App.css";
import Chatbot from "./components/ChatBot";
import hiImg from "./assets/hi.png";
import photo1 from "./assets/p1.JPG";
import photo2 from "./assets/p2.JPG";
import photo3 from "./assets/p3.JPG";
import photo4 from "./assets/p4.JPEG";
import photo5 from "./assets/p5.jpeg";
import photo6 from "./assets/p6.jpeg";

function App() {
  const countdownEvents = [
    {
      title: "Christmas",
      emoji: "🎄",
      month: 12,
      day: 25,
    },
    {
      title: "Melanie's Birthday",
      emoji: "🎂",
      month: 9,
      day: 8,
    },
    {
      title: "Our Anniversary",
      emoji: "❤️",
      month: 5,
      day: 24,
    },
    {
      title: "Peter's Birthday",
      emoji: "🎂",
      month: 5,
      day: 25,
    },
  ];

  const loveReasons = [
    "Your smile makes everything better and lights me up.",
    "You make my ordinary days feel special.",
    "I love laughing with you at stupid stuff.",
    "You make me feel safe, loved, and happy.",
    "You are my favorite person.",
    "I love how caring you are.",
    "You make my life brighter.",
    "I am so lucky to have you and I don't know what I'd do without you.",
    "You make me laugh when you are super goofy.",
    "You make everyday we spend together feel special.",
    "You know how to make me feel loved and supported.",
    "You are my best friend and my favorite person to talk to.",
    "You listen and make me feel understood.",
    "You bring out the best in me.",
    "You make life more fun and our adventures the best.",
    "You have the sweetest and kindest heart.",
    "You make me excited for the future.",
    "You are beautiful inside and out, but really gorgeous on the out.",
    "You make every moment better.",
    "You are my comfort person.",
    "You are so good at remembering the little things.",
    "You make me want to be a better version of myself everyday.",
    "I am so proud of the woman you are.",
    "You make even simple memories unforgettable even though I have short term memory.",
    "You are everything I could have hoped for in a wifey.",
    "I love your patience with me.",
    "I love how you make me feel calm when I am stressed.",
    "I love how you make me feel handsome.",
    "I love that I can be myself around you and be extra goofy.",
    "I love the memories we have made together.",
    "Adventures with you fulfill my childhood dreams of traveling with the loml.",
  ];

  function getNextOccurrence(month, day) {
    const now = new Date();
    const currentYear = now.getFullYear();

    let eventDate = new Date(currentYear, month - 1, day, 0, 0, 0);

    if (eventDate <= now) {
      eventDate = new Date(currentYear + 1, month - 1, day, 0, 0, 0);
    }

    return eventDate;
  }

  function getTimeLeft(event) {
    const now = new Date();
    const targetDate = getNextOccurrence(event.month, event.day);
    const targetTime = targetDate.getTime();
    let difference = targetTime - now.getTime();

    if (event.title === "Christmas") {
      difference -= 1 * 60 * 60 * 1000;
    }

    return {
      title: event.title,
      emoji: event.emoji,
      targetTime,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  function getAllCountdowns() {
    return countdownEvents
      .map((event) => getTimeLeft(event))
      .sort((a, b) => a.targetTime - b.targetTime);
  }

  function showRandomLoveReason() {
    const randomIndex = Math.floor(Math.random() * loveReasons.length);
    setLoveReason(loveReasons[randomIndex]);
  }

  const [rainCount, setRainCount] = useState(100);
  const [countdowns, setCountdowns] = useState(getAllCountdowns());
  const [loveReason, setLoveReason] = useState(
    "Click the button for a reason 💕"
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdowns(getAllCountdowns());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <ImageRain count={rainCount} />

      <div className="app-content">
        <section id="center">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              width: "100%",
              padding: "10px 70px",
              boxSizing: "border-box",
            }}
          >
            {/* Left polaroids */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  background: "#fff",
                  padding: "10px 10px 30px 10px",
                  boxShadow: "var(--shadow)",
                  transform: "rotate(-3deg)",
                }}
              >
                <img
                  src={photo1}
                  alt="photo"
                  style={{
                    width: 130,
                    height: 130,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "10px 10px 30px 10px",
                  boxShadow: "var(--shadow)",
                  transform: "rotate(2deg)",
                }}
              >
                <img
                  src={photo2}
                  alt="photo"
                  style={{
                    width: 130,
                    height: 130,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "10px 10px 30px 10px",
                  boxShadow: "var(--shadow)",
                  transform: "rotate(-3deg)",
                }}
              >
                <img
                  src={photo5}
                  alt="photo"
                  style={{
                    width: 130,
                    height: 130,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
            {/* Main photo */}
            <div className="hero">
              <img
                src={weddingImg}
                className="hero__photo"
                style={{ width: "450px" }}
              />
            </div>
            {/* Right polaroids */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  background: "#fff",
                  padding: "10px 10px 30px 10px",
                  boxShadow: "var(--shadow)",
                  transform: "rotate(3deg)",
                }}
              >
                <img
                  src={photo3}
                  alt="photo"
                  style={{
                    width: 130,
                    height: 130,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "10px 10px 30px 10px",
                  boxShadow: "var(--shadow)",
                  transform: "rotate(-2deg)",
                }}
              >
                <img
                  src={photo4}
                  alt="photo"
                  style={{
                    width: 130,
                    height: 130,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "10px 10px 30px 10px",
                  boxShadow: "var(--shadow)",
                  transform: "rotate(3deg)",
                }}
              >
                <img
                  src={photo6}
                  alt="photo"
                  style={{
                    width: 130,
                    height: 130,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
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
            <img src={hiImg} style={{ height: "6em" }} />
          </div>
        </section>

        <button
          onClick={() => setRainCount((prev) => prev + 10)}
          style={{
            padding: "8px 16px",
            borderRadius: 20,
            border: "1px solid var(--accent)",
            background: "var(--accent-bg)",
            color: "var(--accent)",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          🌧️ More My Melody!
        </button>

        <section id="next-steps">
          <div id="chatbot">
            <Chatbot />
          </div>

          <div className="music-card">
            <h2>Some Tunes 🎶</h2>

            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2I9T6Naj36blUDQtCRQZkI?utm_source=generator"
              width="100%"
              height="530"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section id="countdown">
          <div className="countdown-card">
            <h2>Important Countdowns ⏳🗓️</h2>
            <p>Counting down to our special days.</p>

            <div className="countdown-list">
              {countdowns.map((item, index) => (
                <div className="countdown-event" key={index}>
                  <h3>
                    {item.title} {item.emoji}
                  </h3>

                  <div className="countdown">
                    <div>
                      <strong>{item.days}</strong>
                      <span>Days</span>
                    </div>

                    <div>
                      <strong>{item.hours}</strong>
                      <span>Hours</span>
                    </div>

                    <div>
                      <strong>{item.minutes}</strong>
                      <span>Minutes</span>
                    </div>

                    <div>
                      <strong>{item.seconds}</strong>
                      <span>Seconds</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="love-reasons">
          <div className="love-reasons-card">
            <h2>Reasons I Love You 💕</h2>

            <p>{loveReason}</p>

            <button className="love-button" onClick={showRandomLoveReason}>
              Give me a reason
            </button>
          </div>
        </section>

        <section id="places">
          <PlacesMap />
        </section>

        <section id="storybook">
          <StoryBook />
        </section>
      </div>
    </>
  );
}

export default App;
