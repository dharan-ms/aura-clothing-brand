import { Link } from 'react-router-dom';
import {
  articles,
  categories,
  collections,
  ensembles,
  getProduct,
  inr,
  occasions,
  photos,
  products,
} from '../data';
import { ProductCard, useTitle } from '../ui';

const heroModel = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85';

export function Home() {
  useTitle('');
  const arrivals = products.filter((product) => product.tags?.includes('new'));
  const drop = getProduct('mistral-olive');

  return (
    <>
      <section className="stage">
        <p className="stage-kicker">// NEW ARRIVAL 2026</p>
        <h1 className="stage-title">
          <span className="t-bold">bold</span>
          <span className="t-street">street</span>
          <span className="t-souls">-souls</span>
          <span className="t-meets">meets</span>
        </h1>
        <div className="stage-mid">
          <div>
            <p className="stage-lead">Future-ready streetwear crafted for creators, trendsetters, and everyday explorers.</p>
            <Link className="btn btn-dark stage-cta" to="/collections">
              Discover The Collection <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="stage-note">Modern Silhouettes. Premium Fabrics. Limitless Expression.</p>
        </div>
        <div className="stage-splash" aria-hidden="true" />
        <img className="stage-model" src={heroModel} alt="Model in a beige jacket and sunglasses" />
        <svg className="stamp" viewBox="0 0 120 120" aria-hidden="true">
          <defs>
            <path id="stamp-path" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
          </defs>
          <text fill="#111" fontSize="8.5" letterSpacing="1.6">
            <textPath href="#stamp-path">BUILT DIFFERENT · MADE TO STAND OUT · </textPath>
          </text>
          <circle cx="60" cy="60" r="15" fill="none" stroke="#111" strokeWidth="1" />
          <path d="M60 49.5l2.1 5 5.5.5-4.2 3.6 1.3 5.4L60 61.4l-4.7 2.6 1.3-5.4-4.2-3.6 5.5-.5z" fill="#111" />
        </svg>
        <div className="stage-spacer" />
        <div className="stage-foot">
          <div className="stats">
            <div><strong>120K+</strong><span>Community Members</span></div>
            <div><strong>4.9 ★</strong><span>Customer Rating</span></div>
            <div><strong>50+</strong><span>Countries Shipped</span></div>
          </div>
          <article className="drop-card">
            <p>NEW DROP 2026 +</p>
            <div>
              <div>
                <h2>Unstructured Jacket</h2>
                <p>Limited Edition Release</p>
                <Link to={`/product/${drop.id}`}>
                  <span aria-hidden="true">▶</span> Watch Campaign
                </Link>
              </div>
              <Link to={`/product/${drop.id}`} className="drop-shot" aria-label={drop.name}>
                <img src={drop.image} alt="" />
              </Link>
            </div>
          </article>
        </div>
        <div className="stage-ship">
          <p>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
            </svg>
            / WORLDWIDE SHIPPING
          </p>
          <div className="pager" aria-hidden="true"><span className="on" /><span /><span /></div>
        </div>
      </section>

      <section className="section">
        <h2 className="kicker">Categories</h2>
        <div className="cat-row">
          {categories.map((category) => (
            <Link key={category.slug} to={`/shop/${category.slug}`} className="cat-card">
              <img src={category.image} alt="" />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="kicker">New arrivals</h2>
          <Link to="/collection/new-arrivals">View all</Link>
        </div>
        <div className="product-grid">
          {arrivals.slice(0, 8).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section fit-row">
        {['Slim', 'Tailored', 'Classic'].map((fit) => (
          <Link key={fit} to={`/collection/${fit.toLowerCase()}-fit`} className="fit-card">{fit} fit</Link>
        ))}
      </section>

      <section className="section">
        <h2 className="display">Collections</h2>
        <div className="collection-grid">
          {collections.map((item) => (
            <Link key={item.slug} to={`/collection/${item.slug}`} className="collection-card">
              <img src={item.image} alt="" />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="display left">A look for every occasion</h2>
        <div className="occasion-grid">
          {occasions.map((item) => (
            <Link key={item.slug} to={`/collection/${item.slug}`} className="occasion-card">
              <img src={item.image} alt="" />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="aurelia">
        <img src={photos.white} alt="White evening shirt" />
        <div>
          <p className="kicker">Aurelia shirts</p>
          <h2>The finest ready-to-wear shirt in the Aura atelier.</h2>
          <Link className="btn btn-light" to="/collection/aurelia">Explore collection</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="kicker">Perfectly paired</h2>
          <p>Styled ensembles, priced as the pieces you choose.</p>
        </div>
        <div className="ensemble-grid">
          {ensembles.map((look) => {
            const items = look.items.map(getProduct).filter(Boolean);
            const sum = items.reduce((total, item) => total + item.price, 0);
            return (
              <article key={look.id} className="ensemble">
                <h3>{look.title}</h3>
                <div>
                  {items.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`}>
                      <img src={item.image} alt="" />
                      <span>{inr(item.price)}</span>
                    </Link>
                  ))}
                </div>
                <p>Look total {inr(sum)}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="band">
        <div>
          <p className="kicker">Sophisticated structures</p>
          <h2>Two-ply mercerized cotton with a sheen that reads as light, not shine.</h2>
          <Link to="/collection/mercerized">Explore collection</Link>
        </div>
        <img src={photos.fashion} alt="Mercerized cotton shirt" />
      </section>

      <section className="section">
        <h2 className="kicker">Accessories</h2>
        <div className="acc-row">
          {[
            ['Cufflinks', 'cufflinks', photos.closet],
            ['Pocket squares', 'pocket-squares', photos.folds],
            ['Belts', 'belts', photos.leather],
            ['Socks', 'socks', photos.socks],
            ['Handkerchiefs', 'handkerchiefs', photos.fold],
            ['Ties', 'ties', photos.tie],
            ['Innerwear', 'innerwear', photos.tee2],
          ].map(([label, slug, image]) => (
            <Link key={slug} to={`/collection/${slug}`} className="acc-card">
              <img src={image} alt="" />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="visit">
        <img src={photos.store} alt="Aura store interior" />
        <div>
          <p className="kicker">Visit us</p>
          <h2>Eight rooms across India, cut around the same shirt.</h2>
          <p>Come in for a fit, a cloth, or a second opinion on navy.</p>
          <Link className="btn btn-dark" to="/stores">Locate a store</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="kicker">From the journal</h2>
          <Link to="/journal">View all</Link>
        </div>
        <div className="journal-row">
          {articles.slice(0, 4).map((article) => (
            <Link key={article.slug} to={`/journal/${article.slug}`} className="journal-card">
              <img src={article.image} alt="" />
              <p>{article.date}</p>
              <h3>{article.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
