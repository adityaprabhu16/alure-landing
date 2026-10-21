// Embed scripts and iframes are intentionally unused: they cannot take the black
// theme, they load heavy third-party scripts, ad blockers drop them, and they
// shift layout. LinkedIn has no feed embed, only per-post embeds.

// FIXIT: Replace these three placeholders with real posts. Each entry needs a
// postUrl for that post, an imageUrl, a caption of at most 120 characters, and
// a real date. Drop placeholder: true once the card is real. Do not embed
// Instagram or LinkedIn.

export const followLinks = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/alure_llc/"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/alure-llc/"
  }
];

export const socialPosts = [
  {
    platform: "instagram",
    postUrl: "https://www.instagram.com/alure_llc/",
    imageUrl: "",
    caption: "TODO: replace with a real Instagram field post.",
    date: "2026-06-01",
    placeholder: true
  },
  {
    platform: "instagram",
    postUrl: "https://www.instagram.com/alure_llc/",
    imageUrl: "",
    caption: "TODO: replace with a real Instagram field post.",
    date: "2026-07-01",
    placeholder: true
  },
  {
    platform: "linkedin",
    postUrl: "https://www.linkedin.com/company/alure-llc/",
    imageUrl: "",
    caption: "TODO: replace with a real LinkedIn field post.",
    date: "2026-08-01",
    placeholder: true
  }
];
