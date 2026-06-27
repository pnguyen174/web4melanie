// ============================================================
//  💕 PLACES WE'VE BEEN — add your spots in the list below!
// ============================================================
//
//  Each place needs:
//    name     — displayed in the popup title
//    caption  — a sweet note about the memory
//    lat/lng  — coordinates (google "city name coordinates")
//    emoji    — shown on the map pin
//    photo    — import your photo at the top and reference it here
//               (or use null to show no photo)
//
// ============================================================

import { useEffect, useRef, useState } from "react";

// 👇 Add your photo imports here, e.g.:
// import disneyPhoto from "../assets/p1.JPG";
// import beachPhoto  from "../assets/p2.JPG";

const PLACES = [
  {
    name: "Where We First Met",
    caption: "The place where everything started. I had no idea my life was about to change. 🥹",
    lat: 34.0522,
    lng: -118.2437,
    emoji: "💘",
    photo: null, // replace with e.g. photo1
  },
  {
    name: "Our First Date",
    caption: "I was so nervous. You made it so easy. Best night ever.",
    lat: 34.0195,
    lng: -118.4912,
    emoji: "🍽️",
    photo: null,
  },
  {
    name: "Our Anniversary Trip",
    caption: "Every second with you felt like a dream I didn't want to wake up from. ❤️",
    lat: 36.1147,
    lng: -115.1728,
    emoji: "✈️",
    photo: null,
  },
  {
    name: "That Weekend Getaway",
    caption: "Just us, good food, and no plans. My favourite kind of trip.",
    lat: 33.8303,
    lng: -116.5453,
    emoji: "🌄",
    photo: null,
  },
  {
    name: "Our Favourite Spot",
    caption: "We keep coming back here and I never get tired of it.",
    lat: 33.7455,
    lng: -117.8677,
    emoji: "🌟",
    photo: null,
  },
];

// ─── Leaflet loaded from CDN, no npm install needed ──────────
const LEAFLET_CSS = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS  = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

function loadLeaflet() {
  return new Promise((resolve) => {
    if (window.L) return resolve(window.L);

    const link = document.createElement("link");
    link.rel  = "stylesheet";
    link.href = LEAFLET_CSS;
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = LEAFLET_JS;
    script.onload = () => resolve(window.L);
    document.head.appendChild(script);
  });
}

export default function PlacesMap() {
  const mapRef      = useRef(null);
  const leafletMap  = useRef(null);
  const [popup, setPopup] = useState(null); // { place, x, y }

  useEffect(() => {
    let map;

    loadLeaflet().then((L) => {
      if (leafletMap.current) return; // already initialised

      map = L.map(mapRef.current, {
        center: [36, -100],
        zoom: 4,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      leafletMap.current = map;

      // Soft watercolour-style tile layer
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
          maxZoom: 19,
        }
      ).addTo(map);

      PLACES.forEach((place) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="
            font-size: 28px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35));
            cursor: pointer;
            transition: transform 0.15s ease;
            line-height: 1;
          ">${place.emoji}</div>`,
          iconAnchor: [14, 28],
          popupAnchor: [0, -30],
        });

        const marker = L.marker([place.lat, place.lng], { icon }).addTo(map);

        marker.on("click", (e) => {
          const containerPoint = map.latLngToContainerPoint(e.latlng);
          setPopup({
            place,
            x: containerPoint.x,
            y: containerPoint.y,
          });
        });
      });

      // Close popup on map click
      map.on("click", () => setPopup(null));
    });

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

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

      {/* Map container */}
      <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
        <div ref={mapRef} style={{ height: 480, width: "100%", background: "#f8e8f0" }} />

        {/* Custom popup */}
        {popup && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              left: Math.min(popup.x + 12, mapRef.current?.offsetWidth - 280 || popup.x),
              top: Math.max(popup.y - 200, 10),
              width: 240,
              background: "rgba(255,255,255,0.97)",
              borderRadius: 16,
              boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
              zIndex: 1000,
              overflow: "hidden",
              animation: "popupIn 0.2s ease",
            }}
          >
            {popup.place.photo && (
              <img
                src={popup.place.photo}
                alt={popup.place.name}
                style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }}
              />
            )}

            {!popup.place.photo && (
              <div style={{
                height: 60,
                background: "linear-gradient(135deg, #ffb3c6, #ffd6e7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
              }}>
                {popup.place.emoji}
              </div>
            )}

            <div style={{ padding: "12px 14px 14px" }}>
              <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "0.95rem", color: "var(--text-h, #333)" }}>
                {popup.place.name}
              </p>
              <p style={{ margin: 0, fontSize: "0.82rem", color: "#666", lineHeight: 1.5 }}>
                {popup.place.caption}
              </p>
            </div>

            <button
              onClick={() => setPopup(null)}
              style={{
                position: "absolute",
                top: 8, right: 8,
                background: "rgba(0,0,0,0.18)",
                border: "none",
                borderRadius: "50%",
                width: 22, height: 22,
                cursor: "pointer",
                color: "#fff",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Pin legend */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        marginTop: 16,
      }}>
        {PLACES.map((p, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.78)",
              borderRadius: 999,
              padding: "5px 14px",
              fontSize: "0.82rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>{p.emoji}</span>
            <span style={{ color: "#555" }}>{p.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.85) translateY(6px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </section>
  );
}
