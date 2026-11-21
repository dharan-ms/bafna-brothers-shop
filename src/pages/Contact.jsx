import { useMemo, useState } from "react";
import { contacts, waLink } from "../data";
import { useCart } from "../cart";

export default function Contact() {
  const cart = useCart();
  const preset = useMemo(
    () =>
      cart.items.length
        ? `Hello, I would like to enquire about:\n${cart.items
            .map((item) => `- ${item.name} × ${item.qty}`)
            .join("\n")}`
        : "",
    [cart.items]
  );
  const [form, setForm] = useState({ name: "", phone: "", email: "", note: preset });
  const [sent, setSent] = useState(false);

  const message = `Hello Bafna Brothers Kesarwala, this is ${form.name || "a customer"}.\n${form.note || "I would like to enquire."}\nPhone: ${form.phone}\nEmail: ${form.email}`;

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  return (
    <main className="wrap" style={{ paddingBottom: 64 }}>
      <div className="page-hero">
        <p className="kicker">The shop</p>
        <h1>Come to the bazaar, or write</h1>
        <p>Bhagyodya Market, Patwa Chawl, Zaveri Bazaar. Near Mumbadevi Temple.</p>
      </div>
      <div className="split">
        <form
          className="stack"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <input className="field" name="name" placeholder="Your name" value={form.name} onChange={update} required />
          <input className="field" name="phone" placeholder="Mobile" value={form.phone} onChange={update} required />
          <input className="field" name="email" type="email" placeholder="Email" value={form.email} onChange={update} required />
          <textarea className="field" name="note" placeholder="What should we pack?" value={form.note} onChange={update} />
          <button className="pill dark" type="submit">Save this note</button>
          <a className="pill" href={waLink(contacts.people[1].phone, message)} target="_blank" rel="noreferrer">
            WhatsApp Kamlesh
          </a>
          {sent && <div className="note">Noted on this device. Send it on WhatsApp so the shop actually receives it — this page does not run a mail server.</div>}
        </form>
        <div>
          <div className="person" style={{ marginBottom: 12 }}>
            {contacts.address.map((line) => <div key={line}>{line}</div>)}
            <p>Tel {contacts.tel.join(" / ")} · Int. 7037</p>
            <p><a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
            <p>
              <a href={contacts.instagram} target="_blank" rel="noreferrer">Instagram · luxuria_signature</a>
              <br />
              <a href={contacts.youtube} target="_blank" rel="noreferrer">YouTube</a>
            </p>
          </div>
          <div className="people">
            {contacts.people.map((person) => (
              <article className="person" key={person.phone}>
                <strong>{person.name}</strong>
                <div><a href={`tel:+91${person.phone}`}>+91 {person.phone}</a></div>
                <a href={waLink(person.phone, message)}>WhatsApp</a>
              </article>
            ))}
          </div>
          <div className="story-photo" style={{ marginTop: 16 }}>
            <iframe
              title="Bafna Brothers Kesarwala on the map"
              src="https://maps.google.com/maps?q=Bhagyodya%20Market%20Zaveri%20Bazaar%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0, width: "100%", height: 280 }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
