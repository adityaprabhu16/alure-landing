import "./HowItWorksStyles.css";

import { Link } from "react-router-dom";
import productImage from "../assets/beetle_samples.png";

const steps = [
  {
    title: "Attract",
    text: "A dual lure draws Japanese beetles to the net."
  },
  {
    title: "Land",
    text: "Beetles settle on the treated netting."
  },
  {
    title: "Eliminate",
    text: "The surface baits the bugs and kills them on contact."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How Alure <span className="gradient-text">works</span></h2>
      <img
        className="how-image"
        src={productImage}
        alt="Alure bait-and-kill netting"
        width="2272"
        height="1378"
        loading="lazy"
      />
      <ol className="how-steps">
        {steps.map((step, index) => (
          <li key={step.title}>
            <h3><span className="gradient-text">{index + 1}. {step.title}</span></h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <Link to="/demo" className="how-demo-link">See the full demo</Link>
    </section>
  );
};

export default HowItWorks;
