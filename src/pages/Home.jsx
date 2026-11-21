import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import ProductCard from "../components/ProductCard";

function SaffronPlayer() {
  const host = useRef(null);
  const playerRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let cancelled = false;

    function mount() {
      if (cancelled || !host.current || playerRef.current) return;
      playerRef.current = new window.YT.Player(host.current, {
        videoId: "Qri-KvtqGag",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          loop: 1,
          playlist: "Qri-KvtqGag",
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          cc_load_policy: 0,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    }

    if (window.YT?.Player) {
      mount();
    } else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        mount();
      };
      if (!document.getElementById("yt-iframe-api")) {
        const script = document.createElement("script");
        script.id = "yt-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, []);

  function toggleSound() {
    const player = playerRef.current;
    if (!player?.unMute) return;
    if (muted) {
      player.unMute();
      player.setVolume(100);
      player.playVideo();
      setMuted(false);
    } else {
      player.mute();
      setMuted(true);
    }
  }

  return (
    <>
      <div ref={host} className="yt-host" />
      <button type="button" className="sound-btn" onClick={toggleSound}>
        {muted ? "Sound on" : "Sound off"}
      </button>
    </>
  );
}

const benefits = [
  { cls: "b1", title: "100% natural", copy: "Handpicked strands. Aroma, colour, and flavour kept intact." },
  { cls: "b2", title: "Grade A", copy: "Sourced from reputable farms and checked batch by batch." },
  { cls: "b3", title: ".999 silver", copy: "Vegetarian, edible, satvik silver leaf. Machine-made and consistent." },
  { cls: "b4", title: "24K gold", copy: "Certified edible gold leaf for food, craft, and beauty." },
];

const uses = [
  { img: "/images/silver-sweets.jpg", title: "Sweets & mithai", copy: "Garnish barfi, coat dry fruit, and make a platter look like a celebration." },
  { img: "/images/gold-use.jpg", title: "Food & beauty", copy: "Lay gold on cake and dessert, or use sheets in a careful beauty routine." },
  { img: "/images/p-19.jpg", title: "Drinks & dessert", copy: "Saffron syrup for milk, soda, kheer, shakes, and a bright welcome drink." },
];

export default function Home() {
  const row = useRef(null);
  const featured = products.filter((p) => p.featured);
  const scroll = (dir) => row.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="kicker">Since 1979 · Zaveri Bazaar</p>
          <h1>A precious gift of nature</h1>
          <p className="lede">
            Enrich your dishes with natural antioxidants. Bafna Brothers Kesarwala has sold Grade A saffron,
            gold leaf, and silver leaf for more than four decades. Luxuria Signature is the gift house inside the same family.
          </p>
          <div className="hero-actions">
            <Link className="pill cream" to="/shop">Shop now</Link>
            <Link className="pill ghost" to="/story">Our story</Link>
          </div>
        </div>
        <div className="sticker">Since<br />1979</div>
        <figure className="hero-still">
          <img src="/images/hero-saffron.jpg" alt="Saffron threads in a brass box, a white spoon of kesar, and a glass of saffron tea" />
        </figure>
        <div className="hero-art" aria-hidden="true">
          <svg className="stars" viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
            <g fill="#fcfbe4">
              <circle cx="80" cy="40" r="8" />
              <circle cx="210" cy="90" r="5" />
              <path d="M360 36 l8 18 18 8-18 8-8 18-8-18-18-8 18-8z" />
              <circle cx="980" cy="50" r="10" />
              <path d="M1100 120 l7 16 16 7-16 7-7 16-7-16-16-7 16-7z" />
              <circle cx="640" cy="30" r="6" />
            </g>
          </svg>
        </div>
        <div className="hero-products">
          {featured.slice(0, 4).map((p, i) => (
            <Link key={p.id} to={`/shop/${p.slug}`} className="float-card" style={{ "--tilt": `${[-6, 3, -2, 5][i]}deg` }}>
              <img src={p.image} alt="" />
              <strong>{p.name}</strong>
            </Link>
          ))}
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop}>
              100% natural · Grade A saffron · .999 silver · 24K gold · Vegetarian · Satvik · Handpicked in Kashmir · We sell what we use ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">The house</p>
            <h2>Kesarwala, by blessing and by work</h2>
            <p>
              Founded in 1979 by Nagendrakumar Jawantraj Bafna, the company grew on integrity, dedication,
              and the line the family still uses: we sell what we use. His sons Kamlesh Bafna and Dishant Bafna
              keep the counter. The name Kesarwala came from customers.
            </p>
            <p>
              Every strand is chosen to keep its aroma, colour, and flavour. Quality control is built so each batch
              stays pure, potent, and free from adulteration.
            </p>
            <Link className="pill dark" to="/story">Read the legacy</Link>
          </div>
          <div className="story-photo story-video">
            <SaffronPlayer />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <p className="kicker">Meet saffron</p>
            <h2>The strand with the long memory</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <article key={b.title} className={`benefit ${b.cls}`}>
                <h3>{b.title}</h3>
                <p>{b.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap-wide">
          <div className="scroller-head">
            <div>
              <p className="kicker">On the counter</p>
              <h2>Shop the house</h2>
            </div>
            <div className="arrows">
              <button onClick={() => scroll(-1)} aria-label="Previous">‹</button>
              <button onClick={() => scroll(1)} aria-label="Next">›</button>
            </div>
          </div>
          <div className="scroller" ref={row}>
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap band">
          <p className="kicker">Commitment of quality</p>
          <h2>Pure. Potent. Accountable.</h2>
          <p>
            Bafna saffron has been used by more than 90,000 pregnant mothers worldwide, in the house’s own words.
            Moderation stays the rule. Customers — chefs, families, and gifters — sit at the centre of the work.
          </p>
          <div className="stats">
            <div className="stat"><b>45</b> years of heritage and trust</div>
            <div className="stat"><b>90k+</b> mothers the house says it has served</div>
            <div className="stat"><b>1M+</b> Luxuria products sold</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center-head">
            <p className="kicker">Making moments grand</p>
            <h2>Three ways to give</h2>
          </div>
          <div className="gift-grid">
            <Link to="/gifting" className="gift g1">
              <div>
                <p className="kicker">Wedding</p>
                <h3>Favours people keep</h3>
                <p>Syrups, soaps, attar, and saffron instead of another forgettable return gift.</p>
              </div>
              <img src="/images/p-38.jpg" alt="" />
            </Link>
            <Link to="/gifting" className="gift g2">
              <div>
                <p className="kicker">Corporate</p>
                <h3>On time. On brand.</h3>
              </div>
              <img src="/images/p-21.jpg" alt="" />
            </Link>
            <Link to="/gifting" className="gift g3">
              <div>
                <p className="kicker">Festive</p>
                <h3>Diwali to Eid</h3>
              </div>
              <img src="/images/p-14.jpg" alt="" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <p className="kicker">How the leaf is used</p>
            <h2>Food, beauty, gifting</h2>
          </div>
          <div className="use-grid">
            {uses.map((u) => (
              <article className="use" key={u.title}>
                <img src={u.img} alt="" />
                <div>
                  <h3>{u.title}</h3>
                  <p>{u.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center-head">
            <p className="kicker">Builders of trust</p>
            <h2>Brands that have trusted us</h2>
          </div>
          <div className="brand-sheets">
            <img src="/images/brands-india.png?v=2" alt="Logos of brands that have trusted Bafna Brothers, including L&T Construction, Zydus, Fairfield by Marriott, Grand Hyatt, Kaya, Chitale, and Mithaiwala" />
            <img src="/images/brands-dubai.png?v=2" alt="Dubai and India client logos, including Monginis, Sajjan India, DMart, TransGlobe Energy, Bajrang International Group Dubai, and Sunrise Capital Dubai" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 10 }}>
        <div className="wrap newsletter">
          <div>
            <p className="kicker">The list</p>
            <h2>Tiny strand. Big inbox.</h2>
            <p>Ask for a pack, a hamper, or a wedding count. The shop replies from Zaveri Bazaar.</p>
          </div>
          <Link className="pill dark" to="/contact">Write to the house</Link>
        </div>
      </section>
    </main>
  );
}
