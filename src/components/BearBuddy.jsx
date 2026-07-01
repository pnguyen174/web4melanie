import { useEffect, useRef, useState } from "react";
import "./BearBuddy.css";

// A cute pink fluffy bear that follows the cursor with a little lag,
// waves at you, and bursts hearts when you click it.
function BearBuddy() {
  const bearRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);
  const [isHugging, setIsHugging] = useState(false);

  useEffect(() => {
    // start near bottom-right of viewport
    pos.current = { x: window.innerWidth - 120, y: window.innerHeight - 160 };
    target.current = { ...pos.current };

    const handleMove = (e) => {
      target.current = { x: e.clientX + 20, y: e.clientY + 20 };
    };
    window.addEventListener("mousemove", handleMove);

    let frame;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (bearRef.current) {
        bearRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  function handleClick() {
    setIsHugging(true);
    setTimeout(() => setIsHugging(false), 600);

    const id = Date.now();
    const newHearts = Array.from({ length: 4 }).map((_, i) => ({
      id: id + i,
      offsetX: (Math.random() - 0.5) * 60,
      delay: i * 80,
    }));
    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter((h) => !newHearts.some((n) => n.id === h.id))
      );
    }, 1200);
  }

  return (
    <div className="bear-buddy" ref={bearRef}>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="bear-heart"
          style={{
            "--offset-x": `${h.offsetX}px`,
            animationDelay: `${h.delay}ms`,
          }}
        >
          💗
        </span>
      ))}

      <div
        className={`bear-body ${isHugging ? "bear-hug" : ""}`}
        onClick={handleClick}
        title="Click me for a hug!"
      >
        <div className="bear-ear bear-ear-left" />
        <div className="bear-ear bear-ear-right" />
        <div className="bear-face">
          <div className="bear-cheek bear-cheek-left" />
          <div className="bear-cheek bear-cheek-right" />
          <div className="bear-eye bear-eye-left" />
          <div className="bear-eye bear-eye-right" />
          <div className="bear-snout">
            <div className="bear-nose" />
          </div>
        </div>
        <div className="bear-arm bear-arm-left" />
        <div className="bear-arm bear-arm-right" />
      </div>
    </div>
  );
}

export default BearBuddy;
