export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      text: "The free PYQs and daily quizzes helped me understand the exam pattern. Premium test series was the best investment!",
      name: "Rahul Sharma",
      role: "UPSC Aspirant",
      initials: "RS",
    },
    {
      rating: 5,
      text: "Chanakya's video lectures are exceptional. The study notes are so well organized. Highly recommend the premium package!",
      name: "Priya Singh",
      role: "SSC CGL Candidate",
      initials: "PS",
    },
    {
      rating: 5,
      text: "Best platform for competitive exams. The combination of free and premium resources is perfect for every budget.",
      name: "Amit Kumar",
      role: "Banking Aspirant",
      initials: "AK",
    },
  ];

  return (
    <section
      id="testimonials"
      style={{ padding: "6rem 0", background: "white" }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              background: "var(--primary-light)",
              color: "var(--primary-dark)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Student Reviews
          </span>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1rem",
              color: "var(--text-main)",
              marginTop: "1rem",
            }}
          >
            What Our Students Say
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.125rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Real experiences from students who transformed their preparation
            with Online Kaksha.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "2rem",
                borderRadius: "1.5rem",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star"
                    style={{ color: "gold" }}
                  ></i>
                ))}
              </div>

              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "1rem",
                  color: "var(--text-main)",
                  lineHeight: 1.6,
                }}
              >
                "{testimonial.text}"
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--primary)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <strong
                    style={{ display: "block", color: "var(--text-main)" }}
                  >
                    {testimonial.name}
                  </strong>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--text-muted)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
