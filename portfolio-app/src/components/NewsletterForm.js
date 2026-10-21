import "./NewsletterFormStyles.css";

import React, { useState } from "react";
import { EMAIL_PATTERN, submitInquiry } from "./Form";

const SUCCESS = "You're in. Watch your inbox for field updates.";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("Enter a valid email.");
      return;
    }

    setStatus("");
    setSubmitting(true);
    try {
      await submitInquiry({
        email,
        inquiry: "Newsletter signup",
        source: "Newsletter"
      });
      setStatus(SUCCESS);
      setSucceeded(true);
    } catch (error) {
      console.error("Newsletter submission error", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (succeeded) {
    return (
      <div className="newsletter-form">
        <div className="newsletter-success" role="status" aria-live="polite">
          {status}
        </div>
      </div>
    );
  }

  return (
    <div className="newsletter-form">
      <form onSubmit={handleSubmit} noValidate>
        <label className="visually-hidden" htmlFor="newsletter-email">Email</label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={status === "Enter a valid email." ? "true" : "false"}
          disabled={submitting}
        />
        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? "Joining..." : "Join Newsletter"}
        </button>
      </form>
      <div className="newsletter-status" role="status" aria-live="polite">{status}</div>
    </div>
  );
};

export default NewsletterForm;
