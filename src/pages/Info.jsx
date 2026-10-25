import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { articles, stores } from '../data';
import { useStore } from '../store';
import { useTitle } from '../ui';

const pages = {
  story: {
    title: 'Our story',
    kicker: 'About Aura',
    body: [
      'Aura started as a shirt bench and stayed one, even after the room got larger. Trousers, jackets, ties, and the smaller things exist to finish the shirt, not to replace it.',
      'The house works in three lines. Aura is the formal and semi-formal cloth. Aura Club is for the evening. A3 is the relaxed line: oxfords, linen, polos, and jackets with less canvas.',
      'Fit is still Classic, Tailored, or Slim. If you are between sizes, take the larger neck and have the waist taken in.',
    ],
  },
  sustainability: {
    title: 'Sustainability',
    kicker: 'The workroom',
    body: [
      'The longest-lasting shirt is the one you do not replace. Aura cuts fewer styles in cloth meant to be worn for years: Giza, two-ply mercerized cotton, and European flax linen.',
      'Offcuts are kept for handkerchiefs. The gift box is rigid board, not a film you throw away at the door.',
      'This is not a claim that clothing is impact-free. It is a narrower practice: waste less of the cloth already on the table.',
    ],
  },
  careers: {
    title: 'Careers',
    kicker: 'Work with Aura',
    body: [
      'Stores need people who can talk about collar and cloth without a script. The workroom needs pattern makers who care about a millimetre at the shoulder.',
      'Write to careers@aura.example with the room you want and a short note on a shirt you rate.',
    ],
  },
  investors: {
    title: 'Investor relations',
    kicker: 'The house',
    body: [
      'Aura is a private clothing house. There is no public listing and no shareholder portal on this site.',
      'Press and partnership notes can be sent through the contact page. Do not send payment details by email.',
    ],
  },
};

const policies = {
  terms: {
    title: 'Terms & conditions',
    body: 'Prices are in Indian rupees and include tax. An order is an offer to buy until Aura accepts it by confirming dispatch. Product colours on screen can shift with your display. The size you select is the size we ship.',
  },
  returns: {
    title: 'Return policy',
    body: 'Unworn pieces with tags attached can be returned within 7 days of delivery. Innerwear, handkerchiefs, and opened gift boxes are final. Refunds go back to the original payment method after the piece is checked in.',
  },
  ecommerce: {
    title: 'E-commerce policy',
    body: 'This shop is a demonstration storefront. Orders are saved in your browser and are not sent to a warehouse or a payment gateway. Do not enter a real card number.',
  },
};

export function StaticPage({ page }) {
  const copy = pages[page];
  useTitle(copy.title);
  return (
    <article className="page prose">
      <p className="kicker">{copy.kicker}</p>
      <h1>{copy.title}</h1>
      {copy.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </article>
  );
}

const faqs = [
  ['How long does delivery take?', 'Metro orders usually leave the workroom in two days and arrive within five. Other cities take a little longer.'],
  ['Can I return a piece?', 'Unworn pieces with tags attached can come back within 7 days of delivery. Innerwear, handkerchiefs, and opened gift boxes are final.'],
  ['Do you ship outside India?', 'This drop is marked for worldwide shipping. Duties, where they apply, are collected on delivery.'],
  ['How do I pick a size?', 'Shirts are listed by neck size. If you are between sizes, take the larger neck and have the waist taken in.'],
  ['Is checkout a real payment?', 'This shop is a demonstration storefront. Orders stay in your browser and are not sent to a payment gateway.'],
];

export function FaqPage() {
  useTitle("FAQ's");
  return (
    <article className="page prose">
      <p className="kicker">Help</p>
      <h1>FAQ's</h1>
      {faqs.map(([question, answer]) => (
        <section key={question}>
          <h2>{question}</h2>
          <p>{answer}</p>
        </section>
      ))}
    </article>
  );
}

export function PolicyPage() {
  const { slug } = useParams();
  const copy = policies[slug];
  useTitle(copy?.title || 'Policy');
  if (!copy) return <div className="page"><h1>Policy not found.</h1></div>;
  return <article className="page prose"><h1>{copy.title}</h1><p>{copy.body}</p></article>;
}

export function JournalPage() {
  useTitle('Journal');
  return (
    <div className="page">
      <header className="page-head">
        <p className="kicker">Journal</p>
        <h1>Notes on cloth and occasion</h1>
      </header>
      <div className="journal-row">
        {articles.map((article) => (
          <Link key={article.slug} to={`/journal/${article.slug}`} className="journal-card">
            <img src={article.image} alt="" />
            <p>{article.date} · {article.author}</p>
            <h3>{article.title}</h3>
            <span>{article.excerpt}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  useTitle(article?.title || 'Journal');
  if (!article) return <div className="page"><h1>This note is missing.</h1><Link to="/journal">Journal</Link></div>;
  return (
    <article className="page prose">
      <p className="kicker">{article.date} · {article.author}</p>
      <h1>{article.title}</h1>
      <img className="hero-inline" src={article.image} alt="" />
      {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </article>
  );
}

export function StoresPage() {
  useTitle('Stores');
  const [city, setCity] = useState('All');
  const cities = useMemo(() => ['All', ...new Set(stores.map((store) => store.city))], []);
  const list = city === 'All' ? stores : stores.filter((store) => store.city === city);
  return (
    <div className="page">
      <header className="page-head">
        <p className="kicker">Store locator</p>
        <h1>Find an Aura room</h1>
      </header>
      <div className="chips">
        {cities.map((item) => (
          <button key={item} className={city === item ? 'chip on' : 'chip'} type="button" onClick={() => setCity(item)}>{item}</button>
        ))}
      </div>
      <ul className="store-list">
        {list.map((store) => (
          <li key={store.name}>
            <h2>{store.name}</h2>
            <p>{store.address}</p>
            <p>{store.hours}</p>
            <p><a href={`tel:${store.phone.replace(/\s/g, '')}`}>{store.phone}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AccountPage() {
  useTitle('Account');
  const { user, login, logout, orders } = useStore();
  const [formError, setFormError] = useState('');
  if (!user) {
    return (
      <div className="page narrow">
        <h1>Log in</h1>
        <p className="muted">Use any email and a password of at least 4 characters. The account stays in this browser.</p>
        <form
          className="stack"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const password = String(data.get('password') || '');
            if (password.length < 4) {
              setFormError('Use at least 4 characters.');
              return;
            }
            login({ name: String(data.get('name') || 'Guest'), email: String(data.get('email')) });
          }}
        >
          <label>Name<input name="name" /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Password<input name="password" type="password" minLength={4} required /></label>
          {formError && <p className="error">{formError}</p>}
          <button className="btn btn-dark" type="submit">Continue</button>
        </form>
      </div>
    );
  }
  return (
    <div className="page">
      <header className="page-head">
        <p className="kicker">{user.email}</p>
        <h1>Hello, {user.name}</h1>
        <button className="text-btn" type="button" onClick={logout}>Log out</button>
      </header>
      <h2>Orders</h2>
      {orders.length === 0 ? <p>No orders yet.</p> : (
        <ul className="orders">
          {orders.map((order) => (
            <li key={order.id}>
              <strong>{order.id}</strong>
              <span>{new Date(order.placedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              <span>{order.items.map((item) => `${item.qty} × ${item.name}`).join(', ')}</span>
              <span>{order.address?.city} {order.address?.pin}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ContactPage() {
  useTitle('Contact');
  const [sent, setSent] = useState(false);
  return (
    <div className="page narrow">
      <h1>Contact</h1>
      <p>Customer support · hello@aura.example · 1800 000 1954 · Daily 10:00 – 19:00 IST</p>
      {sent ? <p>Message received. We will reply to the email you entered.</p> : (
        <form className="stack" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <label>Name<input name="name" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Message<textarea name="message" required rows={5} /></label>
          <button className="btn btn-dark" type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export function MissingPage() {
  useTitle('Not found');
  return (
    <div className="page narrow">
      <h1>This page is not in the house.</h1>
      <Link to="/">Back home</Link>
    </div>
  );
}
