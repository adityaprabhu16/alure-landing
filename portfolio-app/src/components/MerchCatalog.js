import "./MerchCatalogStyles.css";

import { merchProducts, shootFrames } from "../data/merch";

const Frame = ({ imageUrl, label, className }) => {
  if (imageUrl) {
    return <img className={className} src={imageUrl} alt="" />;
  }
  return (
    <div className={`${className} merch-frame-empty`} aria-hidden="true">
      {label}
    </div>
  );
};

const MerchCatalog = () => {
  return (
    <div className="merch">
      <section className="merch-collection" aria-labelledby="merch-collection">
        <h2 id="merch-collection">Collection</h2>
        <div className="merch-grid">
          {merchProducts.map((product) => (
            <article
              key={product.name}
              className={product.placeholder ? "merch-card merch-card-placeholder" : "merch-card"}
            >
              <Frame imageUrl={product.imageUrl} label="Photo" className="merch-card-image" />
              <div className="merch-card-body">
                <h3>{product.name}</h3>
                <p>{product.note}</p>
                <p className="merch-soon">Coming soon</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="merch-shoot" aria-labelledby="merch-shoot">
        <h2 id="merch-shoot">From the shoot</h2>
        <div className="merch-shoot-grid">
          {shootFrames.map((frame, index) => (
            <figure
              key={frame.caption + index}
              className={frame.placeholder ? "merch-frame merch-card-placeholder" : "merch-frame"}
            >
              <Frame imageUrl={frame.imageUrl} label="Still" className="merch-shoot-image" />
              <figcaption>{frame.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MerchCatalog;
