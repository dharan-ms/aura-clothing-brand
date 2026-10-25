import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { familyOf, inr, menus, searchProducts, sizesFor } from './data';
import { useStore } from './store';

export function useTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Aura Clothing`
      : "Aura Clothing | Premium Men's Shirts, Trousers & Accessories";
  }, [title]);
}

function Icon({ name }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    'aria-hidden': true,
  };
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l5 5" /></svg>;
  if (name === 'pin') return <svg {...common}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.2" /></svg>;
  if (name === 'heart') return <svg {...common}><path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" /></svg>;
  if (name === 'bag') return <svg {...common}><path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8V7a3 3 0 0 1 6 0v1" /></svg>;
  if (name === 'user') return <svg {...common}><circle cx="12" cy="8" r="3.2" /><path d="M5 19c1.4-3 3.8-4.5 7-4.5S17.6 16 19 19" /></svg>;
  if (name === 'shirt') return <svg {...common}><path d="M8 6l4 2 4-2 3 3-2 2v9H7V11L5 9l3-3z" /></svg>;
  return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

const primaryNav = [
  { label: 'Home', to: '/', end: true },
  { label: 'Collection', to: '/collections' },
  { label: 'Shop', to: '/search' },
  { label: "FAQ's", to: '/faq' },
  { label: 'Contact us', to: '/contact' },
];

function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Aura Clothing home">
      <svg className="logo-disc" viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M16 3a13 13 0 0 0 0 26V3z" fill="currentColor" />
      </svg>
      <span className="logo-word">AURA</span>
    </Link>
  );
}

export function Layout() {
  const { notice, compare, drawer, setDrawer } = useStore();
  useEffect(() => {
    if (!drawer) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') setDrawer(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawer, setDrawer]);
  return (
    <div className="site">
      <div inert={drawer ? true : undefined}>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
      </div>
      <CartDrawer />
      <SearchPanel />
      <MenuDrawer />
      <MobileDock />
      {compare.length > 0 && <Link to="/compare" className="compare-bar">Compare {compare.length} of 3</Link>}
      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  );
}

function Header() {
  const { count, setDrawer } = useStore();
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={compact ? 'header compact' : 'header'}>
      <div className="header-main">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {primaryNav.map((item) => (
            <NavLink key={item.label} to={item.to} end={item.end} className="nav-link">{item.label}</NavLink>
          ))}
        </nav>
        <div className="tools">
          <button className="icon-btn" aria-label="Search" onClick={() => setDrawer('search')}><Icon name="search" /></button>
          <button className="icon-btn" aria-label="Cart" onClick={() => setDrawer('cart')}>
            <Icon name="bag" />
            {count > 0 && <span className="count">{count}</span>}
          </button>
          <Link className="signin" to="/account">
            Sign In
            <Icon name="user" />
          </Link>
        </div>
        <button className="icon-btn menu-toggle" aria-label="Menu" onClick={() => setDrawer('menu')}><Icon name="menu" /></button>
      </div>
    </header>
  );
}

function MobileDock() {
  const { count, setDrawer } = useStore();
  return (
    <div className="dock">
      <button aria-label="Search" onClick={() => setDrawer('search')}><Icon name="search" /></button>
      <Link to="/account" aria-label="Sign in"><Icon name="user" /></Link>
      <button aria-label="Cart" onClick={() => setDrawer('cart')}>
        <Icon name="bag" />
        {count > 0 && <span className="count">{count}</span>}
      </button>
      <button aria-label="Menu" onClick={() => setDrawer('menu')}><Icon name="menu" /></button>
    </div>
  );
}

function SearchPanel() {
  const { drawer, setDrawer } = useStore();
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  if (drawer !== 'search') return null;
  const hits = searchProducts(q).slice(0, 6);
  return (
    <div className="overlay" onClick={() => setDrawer(null)}>
      <form
        className="search-panel"
        onClick={(event) => event.stopPropagation()}
        onSubmit={(event) => {
          event.preventDefault();
          setDrawer(null);
          navigate(`/search?q=${encodeURIComponent(q.trim())}`);
        }}
      >
        <div className="search-head">
          <button type="button" className="text-btn" onClick={() => setDrawer(null)}>Close</button>
        </div>
        <input autoFocus value={q} onChange={(event) => setQ(event.target.value)} placeholder="Search shirts, linen, navy…" aria-label="Search" />
        <button className="btn btn-dark" type="submit">Search</button>
        <ul>
          {hits.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`} onClick={() => setDrawer(null)}>
                <img src={product.image} alt="" />
                <span>{product.name}</span>
                <strong>{inr(product.price)}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

function MenuDrawer() {
  const { drawer, setDrawer } = useStore();
  if (drawer !== 'menu') return null;
  return (
    <div className="overlay" onClick={() => setDrawer(null)}>
      <aside className="menu-drawer" onClick={(event) => event.stopPropagation()}>
        <button className="text-btn" onClick={() => setDrawer(null)}>Close</button>
        <Link to="/account" onClick={() => setDrawer(null)}>Sign in</Link>
        <Link to="/wishlist" onClick={() => setDrawer(null)}>Wishlist</Link>
        {primaryNav.map((item) => (
          <Link key={item.label} to={item.to} onClick={() => setDrawer(null)}>{item.label}</Link>
        ))}
        {menus.map((item) => (
          <div key={item.label}>
            {item.to ? <Link to={item.to} onClick={() => setDrawer(null)}>{item.label}</Link> : <strong>{item.label}</strong>}
            {item.columns && Object.values(item.columns).flat().map((link) => (
              <Link key={link.label} to={link.to} onClick={() => setDrawer(null)}>{link.label}</Link>
            ))}
          </div>
        ))}
      </aside>
    </div>
  );
}

function CartDrawer() {
  const { drawer, setDrawer, detailed, total, setQty } = useStore();
  if (drawer !== 'cart') return null;
  return (
    <div className="overlay" onClick={() => setDrawer(null)}>
      <aside className="cart-drawer" onClick={(event) => event.stopPropagation()} aria-label="Item added to your cart">
        <header>
          <h2>Item added to your cart</h2>
          <button className="text-btn" onClick={() => setDrawer(null)}>Close</button>
        </header>
        {detailed.length === 0 && <p className="muted">Your bag is empty.</p>}
        <ul className="lines">
          {detailed.map((line) => (
            <li key={`${line.id}-${line.size}`}>
              <img src={line.product.image} alt="" />
              <div>
                <Link to={`/product/${line.id}`} onClick={() => setDrawer(null)}>{line.product.name}</Link>
                <p>Size {line.size}</p>
                <div className="qty">
                  <button aria-label="Decrease quantity" onClick={() => setQty(line.id, line.size, line.qty - 1)}>−</button>
                  <span>{line.qty}</span>
                  <button aria-label="Increase quantity" onClick={() => setQty(line.id, line.size, line.qty + 1)}>+</button>
                </div>
              </div>
              <strong>{inr(line.product.price * line.qty)}</strong>
            </li>
          ))}
        </ul>
        <p className="total"><span>Total</span><span>{inr(total)}</span></p>
        <Link className="btn btn-dark block" to="/cart" onClick={() => setDrawer(null)}>View bag</Link>
        <Link className="btn btn-gold block" to="/checkout" onClick={() => setDrawer(null)}>Checkout</Link>
      </aside>
    </div>
  );
}

export function ProductCard({ product }) {
  const { add, toggleWish, wish, toggleCompare, compare } = useStore();
  const [open, setOpen] = useState(false);
  const sizes = sizesFor(product);
  const family = familyOf(product);
  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-media">
        <img src={product.image} alt={product.name} />
        <span className="swatch-circle" style={{ backgroundImage: `url(${product.image})` }} />
        {product.tags?.includes('best') && <em className="flag">Best Seller</em>}
      </Link>
      <div className="card-top">
        <span>{product.fit ? `${product.fit} Fit` : product.category}</span>
        <div className="card-actions">
          <button aria-label={`Add ${product.name} to bag`} onClick={() => setOpen((value) => !value)}><Icon name="bag" /></button>
          <button aria-label="Compare" className={compare.includes(product.id) ? 'on' : ''} onClick={() => toggleCompare(product.id)}><Icon name="shirt" /></button>
          <button aria-label="Save to wishlist" className={wish.includes(product.id) ? 'on' : ''} onClick={() => toggleWish(product.id)}><Icon name="heart" /></button>
        </div>
      </div>
      {open && (
        <div className="size-pop">
          {sizes.map((size) => (
            <button key={size} onClick={() => { add(product.id, size); setOpen(false); }}>{size}</button>
          ))}
        </div>
      )}
      <Link to={`/product/${product.id}`} className="card-name">{product.name}</Link>
      <p className="price">{inr(product.price)}</p>
      {family.length > 1 && (
        <div className="swatches">
          {family.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className={item.id === product.id ? 'swatch on' : 'swatch'} style={{ background: item.hex }} aria-label={item.color} />
          ))}
        </div>
      )}
    </article>
  );
}

export function Footer() {
  const [done, setDone] = useState(false);
  return (
    <footer className="footer">
      <form className="news" onSubmit={(event) => { event.preventDefault(); setDone(true); }}>
        <p>Notes from the workroom</p>
        {done ? <strong>You are on the list.</strong> : (
          <>
            <label className="sr" htmlFor="news-email">Email</label>
            <input id="news-email" type="email" required placeholder="Email" />
            <button className="btn btn-dark" type="submit">Subscribe</button>
          </>
        )}
      </form>
      <div className="footer-grid">
        <div>
          <p>Aura is a house of men’s fine clothing. The shirt is still the centre of the work: cloth, cut, and the patience to get both right.</p>
          <Link to="/story">Read more about Aura</Link>
        </div>
        <div>
          <h3>My account</h3>
          <Link to="/account">My orders</Link>
          <Link to="/account">Track orders</Link>
          <Link to="/account">My addresses</Link>
        </div>
        <div>
          <h3>About us</h3>
          <Link to="/story">Our story</Link>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/newsroom">Newsroom</Link>
        </div>
        <div>
          <h3>Policies</h3>
          <Link to="/policies/terms">Terms & conditions</Link>
          <Link to="/policies/returns">Return policy</Link>
          <Link to="/policies/ecommerce">E-commerce policy</Link>
        </div>
        <div>
          <h3>Visit</h3>
          <Link to="/stores">Find a store</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/investors">Investor relations</Link>
          <Link to="/contact">Contact us</Link>
        </div>
        <div>
          <h3>Top categories</h3>
          <Link to="/shop/shirts">Shirts</Link>
          <Link to="/shop/polos">Polos</Link>
          <Link to="/shop/ties">Ties</Link>
          <Link to="/shop/accessories">Accessories</Link>
          <Link to="/shop/trousers">Trousers</Link>
          <Link to="/shop/jackets">Jackets</Link>
        </div>
      </div>
      <div className="footer-base">
        <div className="pays">Visa · Mastercard · UPI · RuPay · NetBanking</div>
        <p>Copyright {new Date().getFullYear()} Aura Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
}
