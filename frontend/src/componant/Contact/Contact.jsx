import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Contact = () => {
  const [res, setres] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setres("Successfully submitted the data");
        reset();
      } else {
        setres("Failed to submit data");
      }
    } catch (error) {
      console.error(error);
      setres("Error submitting form");
    }
  };

  const handleMailClick = () => {
    window.open(
      "mailto:hsayyad715@gmail.com.com?subject=Hello&body=Hi, I wanted to contact you!",
      "_blank"
    );
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "9322053526"; // <-- include country code, no +
    const message = "Hi, I saw your portfolio and wanted to connect!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://instagram.com/_.husen_.003", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/husen-sayyad-713868245", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Husensayyad", "_blank");
  };
  return (
    <div className="container mt-5 contact">
      <div className="card shadow hello">
        <div className="card-body undercontact">
          <h3 className="card-title mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {res && <div className="mt-3 alert alert-info">{res}</div>}
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows="4"
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message.message}</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <div className="text-center my-3">
            <hr />
            <span
              className="position-relative"
              style={{ top: "-12px", background: "", padding: "0 10px" }}
            >
              or
            </span>
          </div>
          <div className="d-flex gap-3 mt-3">
            <button
              onClick={handleMailClick}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <MdEmail size={20} />
              Mail Me
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="btn btn-success d-flex align-items-center gap-2"
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </button>

            <button
              onClick={handleInstagramClick}
              className="btn btn-danger d-flex align-items-center gap-2"
            >
              <FaInstagram size={20} />
              Instagram
            </button>

            <button
              onClick={handleLinkedInClick}
              className="btn btn-info text-white d-flex align-items-center gap-2"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </button>

            <button
              onClick={handleGithubClick}
              className="btn btn-dark d-flex align-items-center gap-2"
            >
              <FaGithub size={20} />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
