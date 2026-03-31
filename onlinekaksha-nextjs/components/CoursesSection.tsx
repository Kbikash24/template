"use client";

interface CourseCardProps {
  exam: string;
  badge?: string;
  title: string;
  category: string;
  meta: { icon: string; text: string }[];
  price: string;
  priceSubtext: string;
  image: string;
  onEnroll: () => void;
}

function CourseCard({
  exam,
  badge,
  title,
  category,
  meta,
  price,
  priceSubtext,
  image,
  onEnroll,
}: CourseCardProps) {
  return (
    <article
      className="course-card reveal"
      data-exam={exam}
      style={{
        overflow: "hidden",
        borderRadius: "26px",
        border: "1px solid var(--line)",
        background: "#ffffff",
        boxShadow: "var(--shadow-sm)",
        transition: "var(--transition)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
      }}
    >
      <div
        style={{
          position: "relative",
          height: "220px",
          background: "#dce8ff",
        }}
      >
        {badge && (
          <span
            style={{
              position: "absolute",
              top: "18px",
              left: "18px",
              padding: "8px 12px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.96)",
              color: "var(--primary-dark)",
              fontSize: "0.8rem",
              fontWeight: "800",
              zIndex: 1,
            }}
          >
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ padding: "22px" }}>
        <span
          style={{
            display: "inline-block",
            marginBottom: "10px",
            color: "var(--primary)",
            fontSize: "0.82rem",
            fontWeight: "800",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {category}
        </span>
        <h3
          style={{
            color: "var(--dark)",
            fontSize: "1.24rem",
            lineHeight: "1.2",
            marginBottom: "14px",
          }}
        >
          {title}
        </h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            color: "var(--text-light)",
            fontSize: "0.9rem",
            marginBottom: "18px",
          }}
        >
          {meta.map((item, i) => (
            <span key={i}>
              <i className={`fa-solid ${item.icon}`}></i> {item.text}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "14px",
            paddingTop: "16px",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              color: "var(--primary-dark)",
              fontSize: "1.18rem",
              fontWeight: "800",
            }}
          >
            {price}
            <span
              style={{
                display: "block",
                color: "var(--text-light)",
                fontSize: "0.82rem",
                fontWeight: "600",
              }}
            >
              {priceSubtext}
            </span>
          </div>
          <button className="btn btn-primary" onClick={onEnroll}>
            Join Now
          </button>
        </div>
      </div>
    </article>
  );
}

interface CoursesSectionProps {
  onOpenModal: (title: string) => void;
}

export default function CoursesSection({ onOpenModal }: CoursesSectionProps) {
  const courses = [
    {
      exam: "gate",
      badge: "Best Seller",
      title: "GATE Physics Rank Booster Batch 2026",
      category: "GATE & PSU",
      meta: [
        { icon: "fa-chalkboard-user", text: "Live faculty support" },
        { icon: "fa-clock", text: "6 months" },
      ],
      price: "₹2,999",
      priceSubtext: "includes tests + notes",
      image: "https://picsum.photos/seed/onk-gate/900/620",
    },
    {
      exam: "upsc",
      badge: "Trending",
      title: "Lakshya GS Foundation Batch 2026",
      category: "UPSC CSE",
      meta: [
        { icon: "fa-chalkboard-user", text: "Daily answer writing" },
        { icon: "fa-clock", text: "10 months" },
      ],
      price: "₹4,499",
      priceSubtext: "GS + current affairs",
      image: "https://picsum.photos/seed/onk-upsc/900/620",
    },
    {
      exam: "ssc",
      title: "SSC Selection Master Batch",
      category: "SSC CGL / CHSL",
      meta: [
        { icon: "fa-chalkboard-user", text: "Daily quiz practice" },
        { icon: "fa-clock", text: "4 months" },
      ],
      price: "₹1,999",
      priceSubtext: "topic tests + PDFs",
      image: "https://picsum.photos/seed/onk-ssc/900/620",
    },
    {
      exam: "banking",
      title: "Champion Bank PO Live Batch",
      category: "Banking Exams",
      meta: [
        { icon: "fa-chalkboard-user", text: "Quant + reasoning focus" },
        { icon: "fa-clock", text: "5 months" },
      ],
      price: "₹2,499",
      priceSubtext: "GA + interview support",
      image: "https://picsum.photos/seed/onk-banking/900/620",
    },
  ];

  return (
    <section id="courses" style={{ padding: "90px 0" }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-kicker">Popular Batches</span>
          <h2>Pick a batch aligned to your target exam</h2>
          <p>
            Popular online programs with ratings, pricing, tests, notes, and
            class support included.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 320px",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "22px",
            }}
          >
            {courses.map((course, i) => (
              <CourseCard
                key={i}
                {...course}
                onEnroll={() => onOpenModal(`Enroll in ${course.category}`)}
              />
            ))}
          </div>

          <aside
            className="reveal"
            style={{
              position: "sticky",
              top: "104px",
            }}
          >
            <div
              style={{
                padding: "22px",
                borderRadius: "24px",
                background: "#ffffff",
                border: "1px solid var(--line)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <h3
                style={{
                  color: "var(--dark)",
                  fontSize: "1.2rem",
                  marginBottom: "8px",
                }}
              >
                Live Classes
              </h3>
              <p
                style={{
                  color: "var(--text-light)",
                  fontSize: "0.93rem",
                  marginBottom: "18px",
                }}
              >
                Join the upcoming sessions with teacher interaction, revision
                sprints, and doubt solving.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    padding: "8px 12px",
                    borderRadius: "999px",
                    background: "#fff8dc",
                    color: "#8a6500",
                    fontSize: "0.8rem",
                    fontWeight: "800",
                  }}
                >
                  Today 7:00 PM
                </span>
                <span
                  style={{
                    padding: "8px 12px",
                    borderRadius: "999px",
                    background: "#fff8dc",
                    color: "#8a6500",
                    fontSize: "0.8rem",
                    fontWeight: "800",
                  }}
                >
                  Open session
                </span>
              </div>
              <div
                style={{ display: "grid", gap: "12px", marginBottom: "18px" }}
              >
                {[
                  {
                    time: "6:00 PM",
                    title: "Modern Physics Rapid Revision",
                    desc: "For GATE and technical exams",
                  },
                  {
                    time: "7:30 PM",
                    title: "UPSC Current Affairs Clinic",
                    desc: "GS mentoring session",
                  },
                  {
                    time: "9:00 PM",
                    title: "Arithmetic Speed Drill",
                    desc: "SSC and Banking aspirants",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "18px",
                      background: "var(--surface-soft)",
                      border: "1px solid #dce5ff",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        marginBottom: "6px",
                        color: "var(--primary-dark)",
                        fontSize: "0.82rem",
                        fontWeight: "800",
                      }}
                    >
                      {item.time}
                    </span>
                    <strong style={{ display: "block", color: "var(--dark)" }}>
                      {item.title}
                    </strong>
                    <span
                      style={{
                        color: "var(--text-light)",
                        fontSize: "0.88rem",
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => onOpenModal("Join Live Classes")}
                style={{ width: "100%" }}
              >
                Join Live Classes
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
