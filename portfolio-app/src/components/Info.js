import AlureProduct from "../assets/beetle_samples.png";
import "./InfoStyles.css";

export default function Info() {
    return (
        <div className="info-container">
            <h1>Japanese Beetle Prevention, <span className="gradient-text">Reinvented.</span></h1>
            <br />
            <p>Japanese Beetles (above) are an invasive species to U.S. It is an agricultural and commercial pest that causes heavy plant damage, costing the average vineyard, orchard, or commercial grower over $1,000 an acre to manage. These beetles destroy over <span className="gradient-text">300 common plant species</span>, from soybeans to rosebushes. Unfortunately, the only way to manage them is through harmful pestcides that kill pollinators and sterilize the environment.</p>
            <br />
            <h1>Sustainable, Simple, Aesthetic.</h1>
            <br />
            <img src={AlureProduct} alt="Alure LLC bait and kill device"/>
            <p>Alure LLC has developed a unique approach (above) to managing Japanese Beetles: Bait and Kill surfaces. Instead of pouring harmful pesticides on your plants several times each season, endangering both pollinators and the health of your produce, our unique surface <span className="gradient-text">baits the bugs and kills them on contact.</span>. However, the product is safe for humans and pets. No more refilling bags of dead beetles, or attracting more beetles from current traps. Our surface solution finishes the job by both baiting and killing.</p>
            <h1>Future Offering.</h1>
            <br />
            <p>Go to our Homepage and sign up for our mailing list to stay tuned if you're interested to try out our end-all Japanese Beetle prevention strategy in the future! We're currently in the process of going through EPA registration this summer. If Japanese Beetles have been pestering you and you are ready to try something new, sign up for our mailing list and hear about our progress!</p>
            <div className="link-container">
            <a href="/contact">
                <button className="btn">Join Newsletter</button>
            </a>
            </div>
        </div>
    )
}