"use client";

import { useState } from "react";
import styles from "@/styles/navbar.module.css";

interface NavbarProps {
  onOpenModal: (title: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFilterProgram = (exam: string) => {
    filterCourses(exam);
    setIsMenuOpen(false);
  };

  const filterCourses = (selectedExam: string) => {
    const courseCards = document.querySelectorAll(".course-card[data-exam]");
    courseCards.forEach((card: any) => {
      const matches =
        selectedExam === "all" || card.dataset.exam === selectedExam;
      card.hidden = !matches;
    });
    scrollToSection("courses");
    setIsDropdownOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "82px",
          gap: "24px",
        }}
      >
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>
            <i className="fa-solid fa-bolt"></i>
          </span>
          Online Kaksha<span>.</span>
        </a>

        <div className={styles.navLinks}>
          <div className={styles.navDropdown}>
            <button
              className={styles.navDropdownToggle}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Programs <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div
              className={`${styles.navDropdownMenu} ${isDropdownOpen ? styles.open : ""}`}
            >
              <button
                className={styles.dropdownItem}
                onClick={() => handleFilterProgram("all")}
              >
                All Programs
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handleFilterProgram("gate")}
              >
                GATE & PSU
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handleFilterProgram("upsc")}
              >
                UPSC CSE
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handleFilterProgram("ssc")}
              >
                SSC Exams
              </button>
              <button
                className={styles.dropdownItem}
                onClick={() => handleFilterProgram("banking")}
              >
                Banking Exams
              </button>
            </div>
          </div>
          <a
            href="#overview"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("overview");
            }}
          >
            Why Us
          </a>
          <a
            href="#courses"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("courses");
            }}
          >
            Popular Batches
          </a>
          <a
            href="#toppers"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("toppers");
            }}
          >
            Toppers Wall
          </a>
          <a
            href="#resources"
            className={styles.navLink}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("resources");
            }}
          >
            Resources
          </a>
        </div>

        <div className={styles.navActions}>
          <button
            className="btn btn-secondary"
            onClick={() => onOpenModal("Book a Demo Class")}
          >
            Book Demo
          </button>
          <button
            className="btn btn-primary"
            onClick={() => onOpenModal("Join for Free")}
          >
            Join for Free
          </button>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ""}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>
            <i className="fa-solid fa-bolt"></i>
          </span>
          Online Kaksha<span>.</span>
        </a>
        <div className={styles.mobileNavLinks}>
          <a
            href="#"
            className={styles.navLink}
            onClick={() => {
              handleFilterProgram("all");
              setIsMenuOpen(false);
            }}
          >
            All Programs
          </a>
          <a
            href="#"
            className={styles.navLink}
            onClick={() => {
              handleFilterProgram("gate");
              setIsMenuOpen(false);
            }}
          >
            GATE & PSU
          </a>
          <a
            href="#"
            className={styles.navLink}
            onClick={() => {
              handleFilterProgram("upsc");
              setIsMenuOpen(false);
            }}
          >
            UPSC CSE
          </a>
          <a
            href="#"
            className={styles.navLink}
            onClick={() => {
              handleFilterProgram("ssc");
              setIsMenuOpen(false);
            }}
          >
            SSC Exams
          </a>
          <a
            href="#"
            className={styles.navLink}
            onClick={() => {
              handleFilterProgram("banking");
              setIsMenuOpen(false);
            }}
          >
            Banking Exams
          </a>
          <a
            href="#overview"
            className={styles.navLink}
            onClick={() => {
              scrollToSection("overview");
              setIsMenuOpen(false);
            }}
          >
            Why Us
          </a>
          <a
            href="#toppers"
            className={styles.navLink}
            onClick={() => {
              scrollToSection("toppers");
              setIsMenuOpen(false);
            }}
          >
            Toppers Wall
          </a>
          <a
            href="#resources"
            className={styles.navLink}
            onClick={() => {
              scrollToSection("resources");
              setIsMenuOpen(false);
            }}
          >
            Resources
          </a>
          <button
            className="btn btn-primary"
            onClick={() => {
              onOpenModal("Join for Free");
              setIsMenuOpen(false);
            }}
          >
            Join for Free
          </button>
        </div>
      </div>
    </nav>
  );
}
