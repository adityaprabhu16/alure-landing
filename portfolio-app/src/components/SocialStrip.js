import "./SocialStripStyles.css";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialCard from "./SocialCard";
import { followLinks, socialPosts } from "../data/social";

const followIcons = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin
};

const SocialStrip = () => {
  return (
    <section className="social-strip" aria-labelledby="from-the-field">
      <h2 id="from-the-field">From the field</h2>
      <div className="social-grid">
        {socialPosts.map((post) => (
          <SocialCard key={`${post.platform}-${post.date}`} post={post} />
        ))}
      </div>
      <div className="social-follow">
        <p>Follow</p>
        {followLinks.map((link) => {
          const Icon = followIcons[link.platform];
          return (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon ? <Icon aria-hidden="true" /> : null}
              {link.platform}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default SocialStrip;
