import { useMemo } from "react";
import boba from "../assets/boba.png";
import cheer from "../assets/cheer.png";
import star from "../assets/star.png";
import "./ImageRain.css";

/** Add or remove imports above, then list them here. */
const RAIN_IMAGES = [boba, cheer, star];

/** How many images spawn per page load (each falls once). */
const PARTICLE_COUNT = 100;

/** Seconds to release all particles (staggered, not all at once). */
const SPAWN_WINDOW_SEC = 7;

/** Fall speed per particle (seconds). */
const FALL_DURATION_MIN = 4;
const FALL_DURATION_MAX = 7;

/** Horizontal lanes — spreads spawns across the width. */
const SPAWN_LANES = 14;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export default function ImageRain({ count = PARTICLE_COUNT }) {
  const particles = useMemo(() => {
    const laneWidth = 100 / SPAWN_LANES;

    return Array.from({ length: count }, (_, id) => {
      const lane = id % SPAWN_LANES;
      const wave = Math.floor(id / SPAWN_LANES);

      return {
        id,
        src: RAIN_IMAGES[Math.floor(Math.random() * RAIN_IMAGES.length)],
        left: lane * laneWidth + randomBetween(0, laneWidth * 0.6),
        size: randomBetween(50, 100),
        startY: randomBetween(-40, -20),
        // delay:
        //   (wave / Math.ceil(count / SPAWN_LANES)) * SPAWN_WINDOW_SEC +
        //   randomBetween(0, 0.5),
        delay:
          id < 100
            ? (wave / Math.ceil(count / SPAWN_LANES)) * SPAWN_WINDOW_SEC +
              randomBetween(0, 0.5)
            : 0,
        duration: randomBetween(FALL_DURATION_MIN, FALL_DURATION_MAX),
        drift: randomBetween(-30, 30),
        opacity: randomBetween(0.55, 1),
        spin: randomBetween(-90, 90),
      };
    });
  }, [count]);

  return (
    <div className="image-rain" aria-hidden="true">
      {particles.map((p) => (
        <img
          key={p.id}
          src={p.src}
          alt=""
          className="image-rain__particle"
          draggable={false}
          style={{
            left: `${p.left}%`,
            width: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            "--start-y": `${p.startY}vh`,
            "--drift": `${p.drift}px`,
            "--spin": `${p.spin}deg`,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
