import pro1 from "../assets/project1.JPG";
import pro2 from "../assets/project2.JPG";
import pro3 from "../assets/project3.JPG";
import pro4 from "../assets/project4.JPG";
import beetle from "../assets/blogs/japanese_beetle.png";
import vineyards from "../assets/blogs/vineyards.png";
import mncup from "../assets/blogs/mncup.JPG";
import manufacturing from "../assets/blogs/manufacturing.JPG";

const blogContents = {
    'newsletter-april-recap': {
      title: 'How We Scaled Our Newsletter to 1,100 Subscribers in 8 Weeks—And Why Japanese Beetle Control Needs Reinventing',
      content: `
        <p>Mo Hammadelniel, April 2025</p>
        <br />
        <img src="${beetle}" alt="Japanese Beetle"/>
        <br />
        <p>If you’re reading this, you’re probably familiar with the yearly invasion of Japanese Beetles—the swarms that skeletonize your plants, destroy fruit trees, and leave your lawn and garden in ruins. Whether you’re a home gardener or a vineyard manager, the story is the same:</p>
        <ul>
          <li>Buckets of soapy water in one hand.</li>
          <li>Bag traps that require maintenance and attract more beetles.</li>
          <li>Thousands of $’s spent on harmful spray.</li>
        </ul>
        <br/>
        <p>And still… they keep coming back.</p>
        <br />
        <p>If you’ve been there—you’re not alone. We’ve been there too. That’s why we’re committed to building the most-effective JB solution on the market.</p>
        <br />
        <h3>All-Hands on Deck</h3>
        <p>We started in the field–literally. After months of talking to customers and conducting University-backed research, in the summer of 2024, we deployed our prototype devices at Minnesota’s top vineyards (7 Vines, Saint Croix, and Alexis Bailly). The devices were devastatingly effective—a 90% kill rate under one minute, and a 30-foot range without drawing beetles into the crop zone like conventional bag traps do. </p>
        <br />
        <p>It wasn’t just the vineyards who noticed.</p>
        <br />
        <p>It was their neighbors. Local homeowners. Gardeners. People with rose bushes, grapevines, and apple trees of their own. They weren’t asking for data or field trial reports—they were asking: “Where can I buy this?”</p>
        <br/>
        <h3>The 8-Week Surge</h3>
        <p>We knew we had something. Something never seen before in residential pest control—high-efficacy, passive, non-toxic beetle control. So how do you build momentum around a product that hasn’t existed before?</p>
        <br />
        <p>We started simple:</p>
        <ul>
          <li>A newsletter signup form.</li>
          <li>A few field photos of traps overflowing with beetles.</li>
          <li>And a mission we stick to: no gimmicks, no pesticides, no maintenance.</li>
        </ul>
        <br />
        <p>Within 8 weeks, our newsletter crossed 1,100 subscribers, fueled by: </p>
        <ul>
          <li><strong>Earned Media & Recognition:</strong> We won the largest statewide startup competition, MN Cup, and were awarded additional non-dilutive funding from LaunchMN, propelling our R&D and distribution efforts.</li>
          <li><strong>Organic Word of Mouth:</strong> Early adopters raved about how they no longer had to empty bag traps or sprinkle Milky Spore on leaves.</li>
          <li><strong>Targeted Gardening Communities:</strong> We tapped into gardening networks, grape grower associations, and backyard homesteaders who were already fed up with traditional traps.</li>
          <li><strong>Media Coverage:</strong> From a Star Tribune feature to being named one of the ‘Most Disruptive Business School Startups in 2025’ by Poets & Quants, Alure has been featured for its effective and eco-friendly approach.</li>
        </ul>
        <br />
        <h2><em>Join the Early-Adopter Movement</em></h2>
        <p></p>
        <ul>
         <li>If you’re one of the many who dread beetle season, know this:</li>
         <li>You don’t have to go to battle every summer.</li>
         <li>You don’t have to soak your plants in chemicals.</li>
         <li>And you certainly don’t have to settle for a plastic bag full of beetles hanging in your yard.</li>
         <li>Alure is changing the game—and our growing newsletter community is proof that you guys are ready. </li>
        </ul>
        <br />
        <button onclick="window.location.href='/contact'">Join Newsletter</button>
      `,
      backgroundImage: pro4
    },
    'summer-2023-research-recap': {
      title: 'Summer 2024 Research Recap',
      content: `
        <p>Aditya Prabhu, April 2025</p>
        <br />
        <p>During the summer of 2024, our research team made significant strides in understanding how Japanese Beetles interact and get eliminated by our innovation.</p>
        <img src="${vineyards}" alt="Vineyards"/>
        <h2>Key Findings</h2>
        <ul>
          <li>Japanese Beetles on average show signs of impairment within just 30 seconds of landing on our devices.</li>
          <li>We realized the growing importance of personal branding</li>
          <li>We're working on shifting towards more authentic, community-driven content</li>
        </ul>
        <p>Stay tuned for our full detailed report!</p>
      `,
      backgroundImage: pro1
    },
    'top-5-lessons-mn-cup': {
      title: 'Top 5 Lessons from MN Cup',
      content: `
        <p>Participating in the Minnesota Cup competition was an incredible learning experience.</p>
        <img src="${mncup}" alt="Minnesota Cup"/>
        <h2>Lessons Learned</h2>
        <ol>
          <li>Networking is key to startup success</li>
          <li>Pitch clarity matters more than technical depth</li>
          <li>Be prepared to pivot</li>
          <li>Understand your market thoroughly</li>
          <li>Resilience trumps everything</li>
        </ol>
        <br />
        <p>A detailed blog post of our experience is coming soon!</p>
      `,
      backgroundImage: pro2
    },
    'product-manufacturing-underway': {
      title: 'Product Manufacturing Research Underway',
      content: `
        <p>Exciting times ahead! Our product is moving from prototype to production.</p>
        <img src="${manufacturing}" alt="Manufacturing"/>
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
    return blogContents[blogSlug]?.backgroundImage || '../assets/backgrounds/blog-bg.png';
};