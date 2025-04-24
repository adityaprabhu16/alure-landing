import pro1 from "../assets/project1.JPG";
import pro2 from "../assets/project2.JPG";
import pro3 from "../assets/project3.JPG";

const blogContents = {
    'summer-2023-research-recap': {
      title: 'Summer 2024 Research Recap',
      content: `
        <p>During the summer of 2023, our research team made significant strides in understanding emerging trends in online entrepreneurship.</p>
        <h2>Key Findings</h2>
        <ul>
          <li>Increased adoption of AI-driven marketing tools</li>
          <li>Growing importance of personal branding</li>
          <li>Shift towards more authentic, community-driven content</li>
        </ul>
        <p>Stay tuned for our full detailed report!</p>
      `,
      backgroundImage: pro1
    },
    'top-5-lessons-mn-cup': {
      title: 'Top 5 Lessons from MN Cup',
      content: `
        <p>Participating in the Minnesota Cup competition was an incredible learning experience.</p>
        <h2>Lessons Learned</h2>
        <ol>
          <li>Networking is key to startup success</li>
          <li>Pitch clarity matters more than technical depth</li>
          <li>Be prepared to pivot</li>
          <li>Understand your market thoroughly</li>
          <li>Resilience trumps everything</li>
        </ol>
      `,
      backgroundImage: pro2
    },
    'product-manufacturing-underway': {
      title: 'Product Manufacturing Research Underway',
      content: `
        <p>Exciting times ahead! Our product is moving from prototype to production.</p>
        <h2>Manufacturing Milestones</h2>
        <ul>
          <li>Finalized design specifications</li>
          <li>Selected manufacturing partner</li>
          <li>Initial production run scheduled</li>
        </ul>
        <p>We can't wait to share more details soon!</p>
      `,
      backgroundImage: pro3
    }
  };

export const getBlogContent = (blogSlug) => {
    return blogContents[blogSlug]?.content || 'Blog post not found.';
};

export const getBlogTitle = (blogSlug) => {
    return blogContents[blogSlug]?.title || 'Blog Post';
};

export const getBlogBackgroundImage = (blogSlug) => {
    return blogContents[blogSlug]?.backgroundImage || 'https://images.unsplash.com/photo-1637181155600-f4487dabf8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
};