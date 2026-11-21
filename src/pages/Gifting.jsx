import { Link } from "react-router-dom";

const sets = [
  {
    cls: "g1",
    title: "Wedding gifting",
    img: "/images/p-38.jpg",
    copy: "The season arrives and the favour list stalls on sarees, gadgets, and another box of dry fruit. Luxuria built a collection meant to feel specific: syrups, soaps, cosmetics, perfumes, and saffron. The offerings are as particular as the wedding.",
  },
  {
    cls: "g2",
    title: "Corporate gifting",
    img: "/images/p-21.jpg",
    copy: "Business relationships need a gift that is on time and not generic. The house packs promotional and client gifts at a luxury finish without a luxury delay, and treats repeat buyers as the point of the work. If a client should notice the gesture, start here.",
  },
  {
    cls: "g3",
    title: "Festive gifting",
    img: "/images/asset1.jpg",
    copy: "Holi, Diwali, Raksha Bandhan, Ganesh Chaturthi, Bhai Dooj, Eid, Ramadan, Christmas, New Year. The festive shelf is built so the gift is not last year’s bowl passed along. Hampers are chosen so even the person who says they want nothing still opens something worth keeping.",
  },
];

export default function Gifting() {
  return (
    <main className="wrap" style={{ paddingBottom: 56 }}>
      <div className="page-hero">
        <p className="kicker">Luxuria Signature · a division of BBK</p>
        <h1>Gift like never before</h1>
        <p>
          Affordable luxury from INR 250. Festive gifts, wedding gifts, and corporate gifts for India and Dubai.
          Organic, handmade, small batch, and threaded with edible gold or silver leaf. Curate the box, pick the paper art, set the budget.
        </p>
      </div>
      <div className="gift-grid">
        {sets.map((set) => (
          <article key={set.title} className={`gift ${set.cls}`} style={{ minHeight: 420 }}>
            <div>
              <h3>{set.title}</h3>
              <p>{set.copy}</p>
            </div>
            <img src={set.img} alt="" />
          </article>
        ))}
      </div>
      <section className="section">
        <div className="band">
          <h2>Find the gift. Or design it.</h2>
          <p>
            Tell the shop the occasion, the count, and the budget. Designers in the house can build the box.
            Saffron, chocolates, milk masala, dates, soaps, chyawanprash, saffron honey, attar, and perfume all sit in the same family.
          </p>
          <Link className="pill cream" to="/contact">Plan a hamper</Link>
        </div>
      </section>
    </main>
  );
}
