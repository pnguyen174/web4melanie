// ============================================================
//  💕 PLACES WE'VE BEEN — add your spots in the list below!
// ============================================================

import { useEffect, useRef, useState } from "react";

import innout from "../assets/innout.JPG";
import dutch from "../assets/dutch.JPG";
import giussepe from "../assets/giussepe.png";
import bday from "../assets/bday.JPG";
import beach from "../assets/beach.jpeg";
import rs from "../assets/r+s.jpeg";
import seattle from "../assets/seattle.JPG";
import vegas from "../assets/vegas.jpeg";
import haidilao from "../assets/haidilao.jpeg";
import sd from "../assets/sd.jpeg";
import disney from "../assets/disney.jpeg";
import fusiondelight from "../assets/fusiondelight.jpeg";
import mdo from "../assets/mdo.JPG";
import morrobay from "../assets/morrobay.jpeg";
import mumuhotpot from "../assets/mumuhotpot.JPG";
import reseda from "../assets/reseda.JPG";
import sb from "../assets/sb.jpeg";
import sensorio from "../assets/sensorio.jpeg";
import sf from "../assets/sf.jpeg";
import sizzlingogi from "../assets/sizzlingogi.JPG";
import sj from "../assets/sj.JPG";
import waterlantern from "../assets/waterlantern.jpeg";

const PLACES = [
  {
    id: "1",
    name: "First Coffee",
    caption:
      "The first sip where everything started. I had no idea my life was about to change 🥹 (Pic not from same day cause I didn't take one)",
    lat: 35.120384,
    lng: -120.603248,
    photo: dutch,
  },
  {
    id: "2",
    name: "Our First Lunch",
    caption: "I was so nervous after you called me out for no tomatoes",
    lat: 35.127274,
    lng: -120.597895,
    photo: innout,
  },
  {
    id: "3",
    name: "VEGAS TRIP!!",
    caption: "Vegas trip with your family!!",
    lat: 36.1147,
    lng: -115.1728,
    photo: vegas,
  },
  {
    id: "4",
    name: "San Diego Get Away",
    caption: "Just us, good food, and a nice road trip along the coast.",
    lat: 32.716743,
    lng: -117.162941,
    photo: sd,
  },
  {
    id: "5",
    name: "Our First Dinner",
    caption: "Remember you asked to Venmo me and I said no.",
    lat: 35.28053,
    lng: -120.663005,
    photo: giussepe,
  },
  {
    id: "6",
    name: "SEATTLEE!!",
    caption:
      "The first time we flew together and went out of state together hehe",
    lat: 47.603832,
    lng: -122.330062,
    photo: seattle,
  },
  {
    id: "7",
    name: "My first time at Haidilao",
    caption:
      "It was so yummmy, must go again. Can't believe I never had before",
    lat: 47.612883,
    lng: -122.335289,
    photo: haidilao,
  },
  {
    id: "8",
    name: "My First Birthday Together",
    caption: "You are the best gift ever",
    lat: 35.295763,
    lng: -120.668034,
    photo: bday,
  },
  {
    id: "9",
    name: "First time meeting Rochelle and Sebobby",
    caption: "That Korean fooood was sooo yummmmy!!",
    lat: 37.832105,
    lng: -122.263174,
    photo: rs,
  },
  {
    id: "10",
    name: "First Beach DATE!",
    caption: "Lets get tacos and go to Avila againnn!!",
    lat: 35.179105,
    lng: -120.733817,
    photo: beach,
  },
  {
    id: "11",
    name: "First DISNEYLAND TRIPPP!",
    caption:
      "It made me so happy to go to Disneyland with you! Thank you for going with me and fulfilling my childhood dreams of going with my future wifey.",
    lat: 33.805917,
    lng: -117.91965,
    photo: disney,
  },
  {
    id: "12",
    name: "Fusion Delight",
    caption:
      "Fusion delight so yummmmy. Thank you for putting me on Chinese foooood hehehe. I love bok choyyyyy",
    lat: 37.68938,
    lng: -122.138222,
    photo: fusiondelight,
  },
  {
    id: "13",
    name: "Montana De Oro",
    caption:
      "I can't wait to start going to MDO with you again. It is so pretty there. I've never been there and you showed it to me and its so beautiful like youuu.",
    lat: 35.296538,
    lng: -120.868926,
    photo: mdo,
  },
  {
    id: "14",
    name: "Morro Bay Ramen shop",
    caption:
      "Remember when Heather visited and we took her to Morro Bay and went to scouts there lol and got ramennnn. Just think this picture is so cute hehehe.",
    lat: 35.366701,
    lng: -120.84976,
    photo: morrobay,
  },
  {
    id: "15",
    name: "Mumu Hot Pot",
    caption:
      "Remember when we went to Mumu hot pot with Justin and Marisa. It was sooo yummmy. Thank you for always taking me to eat yummy food bebe.",
    lat: 37.406251,
    lng: -121.995697,
    photo: mumuhotpot,
  },
  {
    id: "16",
    name: "The Valleyyy",
    caption:
      "Remember when we went my home and I got to take you to all my favorite places and get boba and watch the sunset. I'm so glad you came with me and we spent time there.",
    lat: 34.287098,
    lng: -118.537855,
    photo: reseda,
  },
  {
    id: "17",
    name: "Santa Barbara in the gardennn",
    caption:
      "This is when we went to Santa Barbara and laid in the sun with the pretty gardennn. And then we looked at that museum and got Korean BBQ after. So yummy.",
    lat: 34.437304,
    lng: -119.711146,
    photo: sb,
  },
  {
    id: "18",
    name: "Sensorio",
    caption:
      "So romantic when we went to go see the lights. I remember doing this right before you left SLO for the last time before Korea. I love taking you on dates like these.",
    lat: 35.651562,
    lng: -120.622398,
    photo: sensorio,
  },
  {
    id: "19",
    name: "SF First time Together",
    caption:
      "So romantic when we went to go see the lights. I remember doing this right before you left SLO for the last time before Korea. I love taking you on dates like these.",
    lat: 37.77493,
    lng: -122.41942,
    photo: sf,
  },
  {
    id: "20",
    name: "Sizzlin Gogi",
    caption:
      "When we went to Sizzlin Gogi for the first time together heheh. And thennn we went to Boomers after and I beat you at mini golf. I love that you are always down to go eat hehe.",
    lat: 34.927591,
    lng: -120.435834,
    photo: sizzlingogi,
  },
  {
    id: "21",
    name: "SJ Valley Fair",
    caption:
      "The first time we went to Valley fair togetherrr. I love when you take me to places I have never been to for the first time. I got you the bracelet and it makes me happy that you still wear it. I love you.",
    lat: 37.325327,
    lng: -121.944841,
    photo: sj,
  },
  {
    id: "22",
    name: "Water Lantern!!",
    caption:
      "One of my favorite memories is relaxing on the lawn and doing the water lanterns with you. This was so romantic and so cute and I can't wait to do it again!! Need to bring more snacks next time.",
    lat: 33.727586,
    lng: -117.910353,
    photo: waterlantern,
  },
];

const PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="42" viewBox="0 0 30 42">
  <defs>
    <radialGradient id="pinGrad" cx="40%" cy="35%">
      <stop offset="0%" stop-color="#ff6b6b"/>
      <stop offset="100%" stop-color="#c0392b"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-10%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.35)"/>
    </filter>
  </defs>
  <g filter="url(#shadow)">
    <path d="M15 2 C7.27 2 1 8.27 1 16 C1 26 15 40 15 40 C15 40 29 26 29 16 C29 8.27 22.73 2 15 2Z" fill="url(#pinGrad)"/>
    <circle cx="15" cy="16" r="5.5" fill="white" opacity="0.9"/>
  </g>
</svg>`.trim();

const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

function loadLeaflet() {
  return new Promise((resolve) => {
    if (window.L) return resolve(window.L);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = LEAFLET_CSS;
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = LEAFLET_JS;
    script.onload = () => resolve(window.L);
    document.head.appendChild(script);
  });
}

function makePinIcon(L) {
  return L.divIcon({
    className: "",
    html: `<div style="cursor:pointer;line-height:1;transition:transform 0.15s ease">${PIN_SVG}</div>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -44],
  });
}

export default function PlacesMap() {
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const [popup, setPopup] = useState(null);
  const [scrollZoom, setScrollZoom] = useState(false);

  useEffect(() => {
    loadLeaflet().then((L) => {
      if (leafletMap.current) return;

      const map = L.map(mapRef.current, {
        center: [38, -112],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      leafletMap.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
          maxZoom: 19,
        }
      ).addTo(map);

      const icon = makePinIcon(L);

      PLACES.forEach((place) => {
        const marker = L.marker([place.lat, place.lng], { icon }).addTo(map);
        marker.on("click", (e) => {
          L.DomEvent.stopPropagation(e);
          setPopup(place);
        });
      });

      map.on("click", () => setPopup(null));
    });

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  function handleMouseEnter() {
    if (leafletMap.current) {
      leafletMap.current.scrollWheelZoom.enable();
      setScrollZoom(true);
    }
  }
  function handleMouseLeave() {
    if (leafletMap.current) {
      leafletMap.current.scrollWheelZoom.disable();
      setScrollZoom(false);
    }
  }

  return (
    <section
      id="places-map"
      style={{
        position: "relative",
        zIndex: 3,
        borderTop: "1px solid var(--border)",
        padding: "32px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h2 style={{ margin: "0 0 6px" }}>Places We've Been 🗺️</h2>
        <p style={{ margin: 0, color: "var(--text-2)", fontSize: "0.95rem" }}>
          Every pin is a memory I never want to forget.
        </p>
      </div>

      {/* Map */}
      <div
        style={{
          position: "relative",
          borderRadius: 18,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={mapRef}
          style={{ height: 480, width: "100%", background: "#f8e8f0" }}
        />

        {!scrollZoom && (
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.45)",
              color: "#fff",
              fontSize: "0.75rem",
              padding: "5px 12px",
              borderRadius: 999,
              pointerEvents: "none",
              zIndex: 500,
            }}
          >
            Hover over map to scroll & zoom
          </div>
        )}
      </div>

      {/* Popup modal */}
      {popup && (
        <div
          onClick={() => setPopup(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            background: "rgba(0,0,0,0.4)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
              width: "100%",
              maxWidth: 340,
              overflow: "hidden",
              animation: "popupIn 0.2s ease",
            }}
          >
            {/* Close button — always on top of everything */}
            <button
              onClick={() => setPopup(null)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 10,
                background: "rgba(0,0,0,0.5)",
                border: "none",
                borderRadius: "50%",
                width: 30,
                height: 30,
                cursor: "pointer",
                color: "#fff",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>

            {popup.photo ? (
              <img
                src={popup.photo}
                alt={popup.name}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "60vh",
                  objectFit: "contain",
                  background: "#f5f5f5",
                }}
              />
            ) : (
              <div
                style={{
                  height: 80,
                  background: "linear-gradient(135deg,#ffb3c6,#ffd6e7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                }}
              >
                📍
              </div>
            )}

            <div style={{ padding: "16px 18px 18px" }}>
              <p
                style={{
                  margin: "0 0 6px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#333",
                }}
              >
                {popup.name}
              </p>
              {popup.caption && (
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: "#666",
                    lineHeight: 1.6,
                  }}
                >
                  {popup.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Pin legend */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        {PLACES.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              if (!leafletMap.current) return;
              leafletMap.current.flyTo([p.lat, p.lng], 13, { duration: 1 });
              setTimeout(() => setPopup(p), 1050);
            }}
            style={{
              background: "rgba(255,255,255,0.78)",
              borderRadius: 999,
              padding: "5px 14px",
              fontSize: "0.82rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              border: "none",
              cursor: "pointer",
              transition: "box-shadow 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.15)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
              e.currentTarget.style.transform = "";
            }}
          >
            <svg width="10" height="14" viewBox="0 0 30 42">
              <path
                d="M15 2C7.27 2 1 8.27 1 16c0 10 14 24 14 24s14-14 14-24C29 8.27 22.73 2 15 2z"
                fill="#c0392b"
              />
            </svg>
            <span style={{ color: "#555" }}>{p.name}</span>
          </button>
        ))}
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
