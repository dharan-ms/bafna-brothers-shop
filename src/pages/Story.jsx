import { Link } from "react-router-dom";

export default function Story() {
  return (
    <main>
      <section className="section story-intro">
        <div className="wrap split story-lead">
          <div className="prose">
            <p className="kicker">About the house</p>
            <h1>A legacy of excellence<br />since 1979</h1>
            <p>
              For over four decades, Bafna Brothers Kesarwala has been synonymous with quality and tradition.
              Established in 1979, the house set out to deliver the finest saffron to discerning customers.
              The journey began with a passion for purity. That is still the cornerstone.
            </p>
            <p>
              The founder, Nagendrakumar Jawantraj Bafna, built the company on principles, people, and products.
              The catalogue remembers him as Jawantraj Bafna. The legacy is carried by his sons, Kamlesh Bafna
              and Dishant Bafna. Nagin Bafna is on the counter with them.
            </p>
            <p>
              Customers became the marketing. They buy, they like, they share. In return the house watches
              what those customers actually need. A line they still repeat: we sell what we use.
            </p>
          </div>
          <div className="story-photo">
            <img className="fall" src="/images/saffron-fall.jpg" alt="Purple saffron crocuses falling toward a white bowl of red saffron threads" />
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap benefit-grid">
          <article className="benefit b1">
            <h3>45 years</h3>
            <p>Heritage and trust. A timeless tradition of procuring saffron, carried across generations.</p>
          </article>
          <article className="benefit b2">
            <h3>Your trust</h3>
            <p>Forty-five years of a fulfilling trade because customers kept coming back.</p>
          </article>
          <article className="benefit b3">
            <h3>Honest service</h3>
            <p>Quality and consistency take commitment and heart. The house says so plainly.</p>
          </article>
          <article className="benefit b4">
            <h3>Mothers</h3>
            <p>The catalogue states Bafna saffron has been used by more than 90,000 pregnant mothers worldwide.</p>
          </article>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="story-photo">
            <img className="bloom" src="/images/saffron-bloom.png" alt="Purple saffron crocus flowers beside a pile of red saffron threads" />
          </div>
          <div className="prose">
            <p className="kicker">The product</p>
            <h2>From the valley to the bazaar</h2>
            <p>
              Saffron is sourced from reputable farms and from the valley of Kashmir. Strands are handpicked
              and processed to hold aroma, colour, and flavour. The promise is a product that meets the
              customer and then goes past that expectation.
            </p>
            <p>
              The range also holds puja articles, incense, and dhoop, machine-made gold and silver leaf,
              and — under Luxuria Signature — syrups, chocolates, soaps, honey, attar, and bespoke perfume.
              Collections are infused with silver or gold leaf. Pieces are organic where claimed, handmade,
              prepared in small batches, and quality tested.
            </p>
            <p>
              In-house designers handle paper arts for boxes and invites, from plain print to floral,
              for weddings, house-warmings, baby showers, and festive tables.
            </p>
            <Link className="pill dark" to="/shop">See the packs</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
