"use client";

import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export default function Modal({ isOpen, title, onClose }: ModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    examTarget: "GATE",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 900));

    setFormData({
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      examTarget: "GATE",
    });
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        background: "rgba(10, 18, 36, 0.45)",
        zIndex: 1003,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: "min(520px, 100%)",
          padding: "30px",
          borderRadius: "28px",
          background: "#ffffff",
          boxShadow: "var(--shadow-lg)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid var(--line)",
            background: "#ffffff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <h3
          style={{
            color: "var(--dark)",
            fontSize: "1.8rem",
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>
        <p style={{ color: "var(--text-light)", marginBottom: "22px" }}>
          Enter your details and our team will help you choose the right free
          class, demo, or full batch.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "var(--dark)",
                fontSize: "0.92rem",
                fontWeight: "700",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                minHeight: "50px",
                padding: "0 14px",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                outline: "none",
                fontSize: "inherit",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "var(--dark)",
                fontSize: "0.92rem",
                fontWeight: "700",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                minHeight: "50px",
                padding: "0 14px",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                outline: "none",
                fontSize: "inherit",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "var(--dark)",
                fontSize: "0.92rem",
                fontWeight: "700",
              }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                minHeight: "50px",
                padding: "0 14px",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                outline: "none",
                fontSize: "inherit",
                fontFamily: "inherit",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--line)")}
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "var(--dark)",
                fontSize: "0.92rem",
                fontWeight: "700",
              }}
            >
              Preparing For
            </label>
            <select
              name="examTarget"
              value={formData.examTarget}
              onChange={handleChange}
              style={{
                width: "100%",
                minHeight: "50px",
                padding: "0 14px",
                border: "1px solid var(--line)",
                borderRadius: "14px",
                outline: "none",
                fontSize: "inherit",
                fontFamily: "inherit",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--primary)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "var(--line)")
              }
            >
              <option>GATE</option>
              <option>UPSC</option>
              <option>SSC</option>
              <option>Banking</option>
              <option>JEE</option>
              <option>NEET</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              width: "100%",
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Processing..." : "Request Access"}
          </button>
        </form>
      </div>
    </div>
  );
}
