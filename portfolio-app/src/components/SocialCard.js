import { FaInstagram, FaLinkedin } from "react-icons/fa";

const icons = {
  instagram: FaInstagram,
  linkedin: FaLinkedin
};

const formatDate = (isoDate) => {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return isoDate;
  }
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};

const SocialCard = ({ post }) => {
  const Icon = icons[post.platform] || FaInstagram;
  const label = post.platform === "linkedin" ? "LinkedIn" : "Instagram";

  return (
    <article className={`social-card${post.placeholder ? " social-card-placeholder" : ""}`}>
      <a
        className="social-card-link"
        href={post.postUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* FIXIT: imageUrl is empty on the seeded cards, so this block shows TODO. */}
        {post.imageUrl ? (
          <img src={post.imageUrl} alt="" />
        ) : (
          <div className="social-card-image social-card-image-empty" aria-hidden="true">
            TODO
          </div>
        )}
        <div className="social-card-body">
          <p className="social-card-meta">
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <p className="social-card-caption">{post.caption}</p>
          <span className="social-card-action">View post</span>
        </div>
      </a>
    </article>
  );
};

export default SocialCard;
