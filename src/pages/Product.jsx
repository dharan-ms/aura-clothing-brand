import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blurb, brandName, care, familyOf, getProduct, inr, related, sizesFor } from '../data';
import { useStore } from '../store';
import { ProductCard, useTitle } from '../ui';

export function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const { add, toggleWish, wish } = useStore();
  const [size, setSize] = useState('');
  const [qty, setQty] = useState(1);
  const [pin, setPin] = useState('');
  const [delivery, setDelivery] = useState('');
  const [open, setOpen] = useState('cloth');
  useTitle(product?.name || 'Piece');

  if (!product) {
    return (
      <div className="page">
        <h1>This piece is no longer listed.</h1>
        <Link to="/shop/shirts">Back to shirts</Link>
      </div>
    );
  }

  const sizes = sizesFor(product);
  const family = familyOf(product);
  const more = related(product);

  return (
    <div className="pdp">
      <div className="gallery">
        <img src={product.image} alt={product.name} />
        {product.image2 && <img src={product.image2} alt="" />}
      </div>
      <div className="buy">
        <p className="kicker">{brandName[product.brand] || 'Aura'}</p>
        <h1>{product.name}</h1>
        <p className="price large">{inr(product.price)}</p>
        <p>{product.stock < 6 ? `Only ${product.stock} left in this cloth.` : 'In stock.'} Inclusive of all taxes.</p>
        {family.length > 1 && (
          <div className="swatches big">
            {family.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className={item.id === product.id ? 'swatch on' : 'swatch'} style={{ background: item.hex }} aria-label={item.color} />
            ))}
          </div>
        )}
        <fieldset>
          <legend>Size</legend>
          <div className="sizes">
            {sizes.map((item) => (
              <button key={item} type="button" className={size === item ? 'chip on' : 'chip'} onClick={() => setSize(item)}>{item}</button>
            ))}
          </div>
        </fieldset>
        <div className="buy-row">
          <div className="qty">
            <button type="button" aria-label="Decrease quantity" onClick={() => setQty((value) => Math.max(1, value - 1))}>−</button>
            <span>{qty}</span>
            <button type="button" aria-label="Increase quantity" onClick={() => setQty((value) => value + 1)}>+</button>
          </div>
          <button className="btn btn-dark" type="button" disabled={!size} onClick={() => add(product.id, size, qty)}>
            {size ? 'Add to bag' : 'Select a size'}
          </button>
          <button type="button" className={wish.includes(product.id) ? 'btn btn-line on' : 'btn btn-line'} onClick={() => toggleWish(product.id)}>
            {wish.includes(product.id) ? 'Wishlisted' : 'Wishlist'}
          </button>
        </div>
        <form
          className="pin"
          onSubmit={(event) => {
            event.preventDefault();
            setDelivery(/^\d{6}$/.test(pin) ? 'Delivers in 3–5 working days.' : 'Enter a 6-digit PIN code.');
          }}
        >
          <label htmlFor="pin">Check delivery</label>
          <div>
            <input id="pin" inputMode="numeric" maxLength={6} value={pin} onChange={(event) => setPin(event.target.value)} placeholder="PIN code" />
            <button className="btn btn-line" type="submit">Check</button>
          </div>
          {delivery && <p>{delivery}</p>}
        </form>
        {[
          ['cloth', 'Cloth & cut', `${blurb(product)} Fabric: ${product.fabric}. Colour: ${product.color}.`],
          ['care', 'Care', care],
          ['shipping', 'Shipping & returns', 'Ships in 2–4 working days across India. Complimentary shipping above ₹2,999. Unworn pieces with tags can be returned within 7 days.'],
        ].map(([key, label, copy]) => (
          <div key={key} className="fold">
            <button type="button" aria-expanded={open === key} onClick={() => setOpen(open === key ? '' : key)}>{label}</button>
            {open === key && <p>{copy}</p>}
          </div>
        ))}
      </div>
      <section className="section wide">
        <h2 className="kicker">You may also like</h2>
        <div className="product-grid">
          {more.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
    </div>
  );
}
