import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import Category from "./page/Category";
import Checkout from "./page/Checkout";
import Cart from "./page/Cart";
import Account from "./page/Account";
import Login from "./page/Login";
import Contact from "./page/Contact";
import About from "./page/About";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="category/:categoryName" element={<Category />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="account" element={<Account />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
