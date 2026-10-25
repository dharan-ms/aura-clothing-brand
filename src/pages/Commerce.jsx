import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProduct, inr } from '../data';
import { useStore } from '../store';
import { useTitle } from '../ui';

function Lines() {
  const { detailed, setQty, total } = useStore();
  if (detailed.length === 0) {
    return <p className="empty">Your bag is empty. <Link to="/shop/shirts">Shop shirts</Link></p>;
  }
  return (
    <>
      <ul className="lines page-lines">
        {detailed.map((line) => (
          <li key={`${line.id}-${line.size}`}>
            <img src={line.product.image} alt="" />
            <div>
              <Link to={`/product/${line.id}`}>{line.product.name}</Link>
              <p>Size {line.size}</p>
              <div className="qty">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQty(line.id, line.size, line.qty - 1)}>−</button>
                <span>{line.qty}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQty(line.id, line.size, line.qty + 1)}>+</button>
              </div>
            </div>
            <strong>{inr(line.product.price * line.qty)}</strong>
          </li>
        ))}
      </ul>
      <p className="total"><span>Total</span><span>{inr(total)}</span></p>
      <p className="muted">{total >= 2999 ? 'Shipping is complimentary.' : `Add ${inr(2999 - total)} for complimentary shipping.`}</p>
    </>
  );
}

export function CartPage() {
  useTitle('Bag');
  const { detailed } = useStore();
  return (
    <div className="page narrow">
      <h1>Your bag</h1>
      <Lines />
      {detailed.length > 0 && <Link className="btn btn-dark" to="/checkout">Checkout</Link>}
    </div>
  );
}

export function CheckoutPage() {
  useTitle('Checkout');
  const { detailed, total, placeOrder, user } = useStore();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');

  if (order) {
    return (
      <div className="page narrow">
        <p className="kicker">Order {order.id}</p>
        <h1>Thank you. The workroom has it.</h1>
        <p>A confirmation stays in this browser under {order.email}. {order.items.length} line{order.items.length === 1 ? '' : 's'} · {inr(order.total)}.</p>
        <Link className="btn btn-dark" to="/account">View orders</Link>
      </div>
    );
  }

  if (detailed.length === 0) {
    return <div className="page narrow"><h1>Nothing to check out.</h1><Link to="/shop/shirts">Browse shirts</Link></div>;
  }

  return (
    <div className="page narrow">
      <h1>Checkout</h1>
      <Lines />
      <form
        className="stack"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const pin = String(data.get('pin') || '');
          if (!/^\d{6}$/.test(pin)) {
            setError('Enter a 6-digit PIN code.');
            return;
          }
          setError('');
          setOrder(placeOrder({
            email: String(data.get('email')),
            name: String(data.get('name')),
            phone: String(data.get('phone')),
            pay: String(data.get('pay')),
            address: { line: String(data.get('line')), city: String(data.get('city')), pin },
          }));
        }}
      >
        <label>Full name<input name="name" required defaultValue={user?.name || ''} /></label>
        <label>Email<input name="email" type="email" required defaultValue={user?.email || ''} /></label>
        <label>Phone<input name="phone" required pattern="[0-9]{10}" title="10 digit mobile number" /></label>
        <label>Address<input name="line" required /></label>
        <label>City<input name="city" required /></label>
        <label>PIN code<input name="pin" required inputMode="numeric" pattern="\d{6}" /></label>
        <fieldset>
          <legend>Payment</legend>
          <label><input type="radio" name="pay" value="UPI" defaultChecked /> UPI</label>
          <label><input type="radio" name="pay" value="Card" /> Card</label>
          <label><input type="radio" name="pay" value="Cash on delivery" /> Cash on delivery</label>
        </fieldset>
        {error && <p className="error">{error}</p>}
        <button className="btn btn-gold" type="submit">Place order · {inr(total)}</button>
        <p className="muted">This demo confirms the order in your browser. No payment is taken.</p>
      </form>
    </div>
  );
}

export function WishlistPage() {
  useTitle('Wishlist');
  const { wish } = useStore();
  const items = wish.map(getProduct).filter(Boolean);
  return (
    <div className="page">
      <h1>Wishlist</h1>
      {items.length === 0 ? <p className="empty">Nothing saved yet.</p> : (
        <div className="product-grid">
          {items.map((product) => (
            <article key={product.id} className="card">
              <Link to={`/product/${product.id}`} className="card-media"><img src={product.image} alt={product.name} /></Link>
              <Link to={`/product/${product.id}`} className="card-name">{product.name}</Link>
              <p className="price">{inr(product.price)}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export function ComparePage() {
  useTitle('Compare');
  const { compare, toggleCompare } = useStore();
  const items = compare.map(getProduct).filter(Boolean);
  return (
    <div className="page">
      <h1>Compare</h1>
      {items.length === 0 ? <p>Add up to three pieces from the shirt icon on a product card.</p> : (
        <div className="compare-table">
          {items.map((product) => (
            <article key={product.id}>
              <img src={product.image} alt="" />
              <h2>{product.name}</h2>
              <p className="price">{inr(product.price)}</p>
              <p>{product.fabric}</p>
              <p>{product.fit ? `${product.fit} fit` : product.category}</p>
              <p>{product.color} · {product.occasion}</p>
              <Link to={`/product/${product.id}`}>View</Link>
              <button type="button" className="text-btn" onClick={() => toggleCompare(product.id)}>Remove</button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
