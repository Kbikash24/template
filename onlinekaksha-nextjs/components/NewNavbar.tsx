"use client";

import { useState } from "react";

interface NavbarProps {
  onOpenModal?: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "80px",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        borderBottom: "1px solid var(--border)",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img
            src="/Online Kaksha (Website Logo).png"
            alt="Online Kaksha"
            style={{
              height: "50px",
              width: "auto",
            }}
          />
        </a>

        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
          className="nav-links-desktop"
        >
          <button
            onClick={() => scrollToSection("about")}
            style={{
              fontWeight: 500,
              color: "var(--text-muted)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("free-resources")}
            style={{
              fontWeight: 500,
              color: "var(--text-muted)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Free Resources
          </button>
          <button
            onClick={() => scrollToSection("premium")}
            style={{
              fontWeight: 500,
              color: "var(--text-muted)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            style={{
              fontWeight: 500,
              color: "var(--text-muted)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            Testimonials
          </button>
        </div>

        <div
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          className="nav-actions-desktop"
        >
          <button className="btn btn-primary">Get Started</button>
        </div>

        <button
          id="menuToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none",
            fontSize: "1.5rem",
            color: "var(--text-main)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          className="menu-toggle"
        >
          <i
            className={isMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: 0,
            width: "100%",
            background: "white",
            borderBottom: "1px solid var(--border)",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="btn btn-outline"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("free-resources")}
            className="btn btn-outline"
          >
            Free Resources
          </button>
          <button
            onClick={() => scrollToSection("premium")}
            className="btn btn-outline"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="btn btn-outline"
          >
            Testimonials
          </button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links-desktop,
          .nav-actions-desktop {
            display: none !important;
          }

          .menu-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
