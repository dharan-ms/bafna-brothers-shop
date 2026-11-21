import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import DiningBanner from "./DiningBanner";
import { contacts } from "../data";
import { useCart } from "../cart";

function Socials() {
  return (
    <div className="socials">
      <a href={contacts.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM17.4 6.9a1.12 1.12 0 1 1-1.12-1.12A1.12 1.12 0 0 1 17.4 6.9zM21.5 7.1a6.3 6.3 0 0 0-1.72-4.46A6.3 6.3 0 0 0 15.32 1H8.68A6.3 6.3 0 0 0 4.22 2.64 6.3 6.3 0 0 0 2.5 7.1v6.64a6.3 6.3 0 0 0 1.72 4.46A6.3 6.3 0 0 0 8.68 23h6.64a6.3 6.3 0 0 0 4.46-1.8 6.3 6.3 0 0 0 1.72-4.46zM19.4 16.7a3.7 3.7 0 0 1-2.08 2.08 16.5 16.5 0 0 1-5.32.36 16.5 16.5 0 0 1-5.32-.36 3.7 3.7 0 0 1-2.08-2.08 16.4 16.4 0 0 1-.36-4.7 16.4 16.4 0 0 1 .36-4.7 3.7 3.7 0 0 1 2.08-2.08 16.5 16.5 0 0 1 5.32-.36 16.5 16.5 0 0 1 5.32.36 3.7 3.7 0 0 1 2.08 2.08 16.4 16.4 0 0 1 .36 4.7 16.4 16.4 0 0 1-.36 4.7z"
          />
        </svg>
      </a>
      <a href={contacts.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M23.5 6.2a3.5 3.5 0 0 0-2.5-2.5C19.1 3.2 12 3.2 12 3.2s-7.1 0-9 .5A3.5 3.5 0 0 0 .5 6.2 36 36 0 0 0 0 12a36 36 0 0 0 .5 5.8 3.5 3.5 0 0 0 2.5 2.5c1.9.5 9 .5 9 .5s7.1 0 9-.5a3.5 3.5 0 0 0 2.5-2.5A36 36 0 0 0 24 12a36 36 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5z"
          />
        </svg>
      </a>
    </div>
  );
}

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/story", label: "Our story" },
  { to: "/gifting", label: "Gifting" },
  { to: "/shop?category=Gold%20%26%20Silver%20Leaf", label: "Gold & silver" },
  { to: "/contact", label: "Contact" },
];

export default function Shell() {
  const [menu, setMenu] = useState(false);
  const cart = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="topbar">
        <span className="diamond" />
        Luxury starts at INR 250
        <span className="diamond" />
        <Link to="/gifting">Gift like never before</Link>
        <span className="diamond" />
        India & Dubai
      </div>
      <header className="header">
        <Link to="/" className="brand" onClick={() => setMenu(false)}>
          <img src="/images/bafna-logo-root.png" alt="Bafna Brothers Kesarwala seal" />
          <div className="wordmark">
            Bafna
            <span>Kesarwala · since 1979</span>
          </div>
        </Link>
        <div className="header-actions">
          <button className="pill" onClick={() => setMenu(true)}>Menu</button>
          <button className="pill dark" onClick={() => cart.setOpen(true)}>
            Enquire {cart.count > 0 && <span className="badge">{cart.count}</span>}
          </button>
        </div>
      </header>

      {menu && (
        <div className="overlay">
          <div className="overlay-top">
            <Link to="/" className="wordmark" onClick={() => setMenu(false)}>
              Bafna<span>Kesarwala · since 1979</span>
            </Link>
            <button className="pill dark" onClick={() => setMenu(false)}>Close</button>
          </div>
          <div className="menu-grid">
            <nav className="menu-links">
              {links.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setMenu(false)}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <aside className="menu-side">
              <h3>A precious gift of nature</h3>
              <p>Grade A saffron, .999 vegetarian silver leaf, and 24K edible gold — from Zaveri Bazaar since 1979.</p>
              <Socials />
            </aside>
          </div>
        </div>
      )}

      {cart.open && (
        <>
          <button className="drawer-back" aria-label="Close enquiry" onClick={() => cart.setOpen(false)} />
          <aside className="drawer" aria-label="Enquiry list">
            <div className="drawer-head">
              <h2>Enquire</h2>
              <button className="pill" onClick={() => cart.setOpen(false)}>Close</button>
            </div>
            <p>Add what you want. We will pack it from the shop in Bhagyodya Market.</p>
            <div className="cart-list">
              {cart.items.length === 0 && <p>Your list is empty. The shelf is not.</p>}
              {cart.items.map((item) => (
                <div className="cart-row" key={item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <strong>{item.name}</strong>
                    <div className="qty">
                      <button onClick={() => cart.setQty(item.id, item.qty - 1)} aria-label="Decrease">−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => cart.setQty(item.id, item.qty + 1)} aria-label="Increase">+</button>
                    </div>
                  </div>
                  <button className="linkish" onClick={() => cart.remove(item.id)}>Remove</button>
                </div>
              ))}
            </div>
            <button
              className="pill dark"
              disabled={cart.items.length === 0}
              onClick={() => {
                cart.setOpen(false);
                navigate("/contact");
              }}
            >
              Send this list
            </button>
          </aside>
        </>
      )}

      <Outlet />

      <footer className="footer">
        <DiningBanner />
        <div className="wrap footer-grid">
          <div>
            <div className="wordmark">Bafna<span>Brothers Kesarwala</span></div>
            <p>We sell what we use. Luxuria Signature is the affordable luxury division of the house.</p>
            <Socials />
          </div>
          <div>
            <h3>House</h3>
            <ul>
              <li><NavLink to="/story">Our story</NavLink></li>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/gifting">Gifting</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div>
            <h3>Visit</h3>
            <ul>
              {contacts.address.map((line) => <li key={line}>{line}</li>)}
              <li>Tel {contacts.tel.join(" / ")}</li>
            </ul>
          </div>
          <div>
            <h3>Write</h3>
            <ul>
              <li><a href={`mailto:${contacts.email}`}>{contacts.email}</a></li>
              <li><a href={contacts.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href={contacts.youtube} target="_blank" rel="noreferrer">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <span>© {new Date().getFullYear()} Bafna Brothers Kesarwala. A luxury division by BBK.</span>
          <span>Enrich your dishes with natural antioxidants.</span>
        </div>
      </footer>
    </>
  );
}
