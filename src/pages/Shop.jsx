import { Link, useParams, useSearchParams } from 'react-router-dom';
import { collectionTitle, collections, inCollection, products } from '../data';
import { ProductCard, useTitle } from '../ui';

export function Shop() {
  const { category, slug } = useParams();
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const fit = params.get('fit') || '';
  const color = params.get('color') || '';
  const sort = params.get('sort') || 'featured';

  let list = products.slice();
  let title = 'Shop';
  if (slug) {
    list = list.filter((product) => inCollection(product, slug));
    title = collectionTitle(slug);
  } else if (category) {
    list = list.filter((product) => product.category === category);
    title = category.charAt(0).toUpperCase() + category.slice(1);
  } else if (query) {
    const term = query.toLowerCase();
    list = list.filter((product) =>
      product.name.toLowerCase().includes(term)
      || product.color.toLowerCase().includes(term)
      || product.fabric.toLowerCase().includes(term)
    );
    title = `Search “${query}”`;
  }
  useTitle(title);

  const base = list.slice();
  if (fit) list = list.filter((product) => product.fit === fit);
  if (color) list = list.filter((product) => product.color === color);
  if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
  if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));

  const fits = [...new Set(base.map((product) => product.fit).filter(Boolean))];
  const colors = [...new Set(base.map((product) => product.color))];

  const set = (key, value) => {
    const next = new URLSearchParams(params);
    if (!value) next.delete(key);
    else next.set(key, value);
    setParams(next);
  };

  return (
    <div className="shop">
      <header className="page-head">
        <p className="kicker">{slug ? 'Collection' : category ? 'Category' : 'Search'}</p>
        <h1>{title}</h1>
        <p className="muted">{list.length} pieces</p>
      </header>
      <div className="shop-layout">
        <aside className="filters">
          <label>
            Sort
            <select value={sort} onChange={(event) => set('sort', event.target.value === 'featured' ? '' : event.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price, low to high</option>
              <option value="price-desc">Price, high to low</option>
              <option value="name">Name</option>
            </select>
          </label>
          {fits.length > 1 && (
            <div>
              <p>Fit</p>
              <button className={!fit ? 'chip on' : 'chip'} onClick={() => set('fit', '')}>All</button>
              {fits.map((item) => (
                <button key={item} className={fit === item ? 'chip on' : 'chip'} onClick={() => set('fit', item)}>{item}</button>
              ))}
            </div>
          )}
          {colors.length > 1 && (
            <div>
              <p>Colour</p>
              <button className={!color ? 'chip on' : 'chip'} onClick={() => set('color', '')}>All</button>
              {colors.map((item) => (
                <button key={item} className={color === item ? 'chip on' : 'chip'} onClick={() => set('color', item)}>{item}</button>
              ))}
            </div>
          )}
        </aside>
        {list.length === 0 ? (
          <p className="empty">Nothing in this edit yet. <Link to="/shop/shirts">Browse shirts</Link></p>
        ) : (
          <div className="product-grid">
            {list.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export function CollectionsPage() {
  useTitle('Collections');
  return (
    <div className="page">
      <header className="page-head">
        <p className="kicker">Collections</p>
        <h1>Edited by cloth, colour, and occasion</h1>
      </header>
      <div className="collection-grid">
        {collections.map((item) => (
          <Link key={item.slug} to={`/collection/${item.slug}`} className="collection-card">
            <img src={item.image} alt="" />
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
