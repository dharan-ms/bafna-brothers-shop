import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Shell from "./components/Shell";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Story from "./pages/Story";
import Gifting from "./pages/Gifting";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<Shell />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:slug" element={<Product />} />
        <Route path="story" element={<Story />} />
        <Route path="gifting" element={<Gifting />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Missing() {
  return (
    <section className="section wrap">
      <h1>That page is not on the shelf.</h1>
      <p>The house is still open. Head back to the shop.</p>
      <a className="pill dark" href="/">Back home</a>
    </section>
  );
}
