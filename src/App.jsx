import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from './store';
import { Layout } from './ui';
import { Home } from './pages/Home';
import { CollectionsPage, Shop } from './pages/Shop';
import { ProductPage } from './pages/Product';
import { CartPage, CheckoutPage, ComparePage, WishlistPage } from './pages/Commerce';
import {
  AccountPage,
  ArticlePage,
  ContactPage,
  FaqPage,
  JournalPage,
  MissingPage,
  PolicyPage,
  StaticPage,
  StoresPage,
} from './pages/Info';

export default function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop/:category" element={<Shop />} />
            <Route path="collection/:slug" element={<Shop />} />
            <Route path="collections" element={<CollectionsPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="compare" element={<ComparePage />} />
            <Route path="search" element={<Shop />} />
            <Route path="stores" element={<StoresPage />} />
            <Route path="account" element={<AccountPage />} />
            <Route path="journal" element={<JournalPage />} />
            <Route path="journal/:slug" element={<ArticlePage />} />
            <Route path="newsroom" element={<JournalPage />} />
            <Route path="story" element={<StaticPage page="story" />} />
            <Route path="sustainability" element={<StaticPage page="sustainability" />} />
            <Route path="careers" element={<StaticPage page="careers" />} />
            <Route path="investors" element={<StaticPage page="investors" />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="policies/:slug" element={<PolicyPage />} />
            <Route path="*" element={<MissingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}
