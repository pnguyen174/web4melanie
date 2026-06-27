// ================================================================
//  📖 STORY OF US — edit your chapters in the CHAPTERS array below
// ================================================================

import { useState } from "react";

const COVER = {
  title: "The Story of Peter & Melanie",
  subtitle: "A tale of DMs, In-N-Out, and a love that keeps growing ✨",
  emoji: "📖",
};

const CHAPTERS = [
  {
    title: "Chapter I — A Fateful Message",
    emoji: "✉️",
    text: `Once upon a time, at a sun-kissed university called Cal Poly, a boy named Peter spotted a girl who made his heart do something funny. With a deep breath and a hopeful heart, he did what any brave soul would do — he slid into her DMs. To his great delight, she wrote back, and just like that, without any fanfare or magic spell, the most important story of his life quietly began.`,
  },
  {
    title: "Chapter II — The First Adventures",
    emoji: "☕",
    text: `In those early, golden days, Peter and Melanie discovered that the most ordinary things felt extraordinary together. They sipped coffee and stole glances over textbooks, shared secret smiles over In-N-Out burgers, and lingered long past closing time at Giuseppe's. And at Night Creamery, with ice cream in hand and laughter in the air, Peter began to suspect that this girl was something very, very special.`,
  },
  {
    title: "Chapter III — The Day It Became Official",
    emoji: "💕",
    text: `On the 24th of May, 2023 — a day that deserves to be written in gold — Peter and Melanie made it official. It was the kind of moment that feels both surprising and inevitable all at once, like a favourite song reaching its chorus. From that day forward, they were no longer two separate stories, but one — and what a beautiful story it would turn out to be.`,
  },
  {
    title: "Chapter IV — California, Together",
    emoji: "🌅",
    text: `Hand in hand, they set out to explore the whole golden state as if it were made just for them. From the salty shores of San Diego to the foggy magic of the Bay Area, from the buzzing streets of LA to the wonder of the Exploratorium and the quiet awe of aquariums — they wandered through it all together. Over steaming bowls of Korean stew and lazy plates of Chinese food, over long car rides filled with music and inside jokes, California slowly became theirs.`,
  },
  {
    title: "Chapter V — What Makes Her Magic",
    emoji: "⭐",
    text: `Of all the wonderful things about Melanie — and there are many — it is the way she can be utterly, joyfully goofy one moment and deeply, quietly kind the next that makes Peter feel like the luckiest person alive. She has a sweetness that isn't performed, a warmth that fills every room she walks into, and a laugh that Peter never tires of hearing. Their story is still being written, chapter by beautiful chapter, and Peter cannot wait to see what comes next.`,
  },
];

// Stable stars — pre-computed so they don't re-randomise on every render
const STARS = [
  { id: 0, left: "8%", top: "12%", size: 10, delay: 0, dur: 3.8 },
  { id: 1, left: "22%", top: "72%", size: 8, delay: 1.2, dur: 4.2 },
  { id: 2, left: "38%", top: "18%", size: 14, delay: 0.5, dur: 3.1 },
  { id: 3, left: "55%", top: "85%", size: 9, delay: 2.1, dur: 5.0 },
  { id: 4, left: "70%", top: "30%", size: 11, delay: 0.8, dur: 3.6 },
  { id: 5, left: "85%", top: "60%", size: 8, delay: 1.7, dur: 4.5 },
  { id: 6, left: "92%", top: "10%", size: 13, delay: 0.3, dur: 3.3 },
  { id: 7, left: "15%", top: "45%", size: 9, delay: 2.8, dur: 4.8 },
  { id: 8, left: "48%", top: "55%", size: 10, delay: 1.0, dur: 3.9 },
  { id: 9, left: "75%", top: "80%", size: 12, delay: 0.6, dur: 4.1 },
  { id: 10, left: "32%", top: "90%", size: 8, delay: 3.2, dur: 5.2 },
  { id: 11, left: "62%", top: "5%", size: 11, delay: 1.5, dur: 3.7 },
];

function Stars() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {STARS.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: s.left,
            top: s.top,
            fontSize: s.size,
            opacity: 0.3,
            animation: `starFloat ${s.dur}s ${s.delay}s ease-in-out infinite alternate`,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}

export default function StoryBook() {
  const [page, setPage] = useState(-1); // -1 = cover
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState("forward");

  const totalPages = CHAPTERS.length;
  const isCover = page === -1;
  const isLastPage = page === totalPages - 1;

  function goTo(newPage, dir) {
    if (flipping) return;
    setFlipDir(dir);
    setFlipping(true);
    setTimeout(() => {
      setPage(newPage);
      setFlipping(false);
    }, 320);
  }

  const next = () => {
    if (!isLastPage) goTo(page + 1, "forward");
  };
  const prev = () => {
    if (!isCover) goTo(page - 1, "back");
  };

  const chapter = page >= 0 ? CHAPTERS[page] : null;

  return (
    <section
      id="story-book"
      style={{
        position: "relative",
        zIndex: 3,
        borderTop: "1px solid var(--border)",
        padding: "48px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 24,
        background:
          "linear-gradient(180deg, rgba(255,230,245,0.3) 0%, rgba(255,255,255,0) 100%)",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center" }}>
        <h2
          style={{
            margin: "0 0 6px",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}
        >
          Our Story (work in progress)📖
        </h2>
        <p
          style={{
            margin: 0,
            color: "var(--text-2, #888)",
            fontSize: "0.95rem",
          }}
        >
          A tale best read slowly, page by page.
        </p>
      </div>

      {/* Book */}
      <div style={{ position: "relative", width: "min(560px, 94vw)" }}>
        {/* Shadow */}
        <div
          style={{
            position: "absolute",
            bottom: -12,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            height: 24,
            background: "rgba(120,60,140,0.12)",
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
        />

        {/* Card */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(145deg, #fff9fd, #fef0fa)",
            borderRadius: 20,
            boxShadow:
              "0 12px 40px rgba(140,80,160,0.18), inset 0 1px 0 rgba(255,255,255,0.9)",
            border: "1px solid rgba(200,160,220,0.35)",
            padding: "40px 36px 32px",
            minHeight: 340,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            animation: flipping
              ? flipDir === "forward"
                ? "flipForward 0.32s ease"
                : "flipBack 0.32s ease"
              : "none",
          }}
        >
          <Stars />

          {/* Spine */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 6,
              background: "linear-gradient(180deg, #c9a0dc, #e8b4d8)",
              borderRadius: "20px 0 0 20px",
            }}
          />

          {/* Content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 8px",
            }}
          >
            {isCover ? (
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 64,
                    marginBottom: 16,
                    filter: "drop-shadow(0 4px 8px rgba(180,100,200,0.3))",
                  }}
                >
                  {COVER.emoji}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
                    color: "#7b4f8a",
                    margin: "0 0 10px",
                    fontStyle: "italic",
                    lineHeight: 1.3,
                  }}
                >
                  {COVER.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    color: "#a07ab0",
                    fontSize: "0.9rem",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {COVER.subtitle}
                </p>
                <div
                  style={{
                    marginTop: 24,
                    color: "#c9a0dc",
                    fontSize: "0.8rem",
                    letterSpacing: 2,
                  }}
                >
                  ✦ ✦ ✦
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 18,
                  padding: "10px 0",
                }}
              >
                <div style={{ fontSize: 44 }}>{chapter.emoji}</div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1rem, 3vw, 1.25rem)",
                    color: "#7b4f8a",
                    margin: 0,
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  {chapter.title}
                </h3>
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background:
                      "linear-gradient(90deg, transparent, #c9a0dc, transparent)",
                    borderRadius: 2,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "clamp(0.88rem, 2vw, 1rem)",
                    lineHeight: 1.85,
                    color: "#4a3050",
                    textAlign: "center",
                    margin: 0,
                    maxWidth: 460,
                  }}
                >
                  {chapter.text}
                </p>
              </div>
            )}
          </div>

          {/* Page indicator */}
          <div
            style={{
              textAlign: "center",
              fontSize: "0.75rem",
              color: "#c9a0dc",
              fontFamily: "'Lora', Georgia, serif",
              fontStyle: "italic",
              marginTop: 20,
            }}
          >
            {isCover
              ? "✦ Open the book ✦"
              : `Page ${page + 1} of ${totalPages}`}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <button
          onClick={prev}
          disabled={isCover || flipping}
          style={{
            background: isCover
              ? "rgba(200,160,220,0.2)"
              : "linear-gradient(135deg, #d4a0e8, #e8b4d8)",
            border: "none",
            borderRadius: 999,
            padding: "10px 22px",
            color: isCover ? "#ccc" : "#fff",
            fontSize: "0.9rem",
            cursor: isCover ? "not-allowed" : "pointer",
            boxShadow: isCover ? "none" : "0 4px 12px rgba(180,100,200,0.3)",
            transition: "all 0.2s ease",
          }}
        >
          ← Previous
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {[-1, ...CHAPTERS.map((_, i) => i)].map((p) => (
            <div
              key={p}
              onClick={() =>
                p !== page && goTo(p, p > page ? "forward" : "back")
              }
              style={{
                width: p === page ? 20 : 7,
                height: 7,
                borderRadius: 999,
                background: p === page ? "#c9a0dc" : "rgba(200,160,220,0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={isLastPage || flipping}
          style={{
            background: isLastPage
              ? "rgba(200,160,220,0.2)"
              : "linear-gradient(135deg, #d4a0e8, #e8b4d8)",
            border: "none",
            borderRadius: 999,
            padding: "10px 22px",
            color: isLastPage ? "#ccc" : "#fff",
            fontSize: "0.9rem",
            cursor: isLastPage ? "not-allowed" : "pointer",
            boxShadow: isLastPage ? "none" : "0 4px 12px rgba(180,100,200,0.3)",
            transition: "all 0.2s ease",
          }}
        >
          Next →
        </button>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lora:ital@0;1&display=swap');

        @keyframes flipForward {
          0%   { transform: perspective(800px) rotateY(0deg);   opacity: 1;   }
          50%  { transform: perspective(800px) rotateY(-12deg); opacity: 0.6; }
          100% { transform: perspective(800px) rotateY(0deg);   opacity: 1;   }
        }
        @keyframes flipBack {
          0%   { transform: perspective(800px) rotateY(0deg);  opacity: 1;   }
          50%  { transform: perspective(800px) rotateY(12deg); opacity: 0.6; }
          100% { transform: perspective(800px) rotateY(0deg);  opacity: 1;   }
        }
        @keyframes starFloat {
          from { transform: translateY(0px)  rotate(0deg);  }
          to   { transform: translateY(-8px) rotate(20deg); }
        }
      `}</style>
    </section>
  );
}
