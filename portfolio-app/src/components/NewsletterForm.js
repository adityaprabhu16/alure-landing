import "./NewsletterFormStyles.css";

import React, { useEffect, useRef, useState } from "react";
import { EMAIL_PATTERN, submitInquiry } from "./Form";
import SquishBeetle from "./SquishBeetle";

const SUCCESS = "You're in. Watch your inbox for field updates.";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [view, setView] = useState("form");
  const finished = useRef(false);

  const showSuccess = () => {
    if (finished.current) return;
    finished.current = true;
    setView("done");
  };

  useEffect(() => {
    if (view !== "squish") return undefined;
    const timer = window.setTimeout(showSuccess, 850);
    return () => window.clearTimeout(timer);
  }, [view]);

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
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        showSuccess();
      } else {
        finished.current = false;
        setView("squish");
      }
    } catch (error) {
      console.error("Newsletter submission error", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (view === "squish") {
    return (
      <div className="newsletter-form">
        <div className="squish-slot">
          <SquishBeetle onDone={showSuccess} />
        </div>
      </div>
    );
  }

  if (view === "done") {
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
        <label htmlFor="newsletter-email">Email</label>
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
