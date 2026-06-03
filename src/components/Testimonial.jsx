import Customer1 from "../Assets/Customer1.png";
import Customer2 from "../Assets/Customer2.png";
import Customer3 from "../Assets/Customer3.png";
import Customer4 from "../Assets/Customer4.png";
import Customer5 from "../Assets/Customer5.png";
import Customer6 from "../Assets/Customer6.png";



const tAvatars = [
  { cls: 't1', img: Customer1 },
  { cls: 't2', img: Customer2 },
  { cls: 't3', img: Customer3 },
  { cls: 't4', img: Customer4 },
  { cls: 't5', img: Customer5 },
  { cls: 't6', img: Customer6 },
]

export default function Testimonial() {
  return (
    <section className="testimonial reveal">
      <h2>
        <span className="hl hl-green">What</span> our customer
        <br />
        says <span className="hl-underline">About Us</span>
      </h2>

      <div className="t-avatars">
        {tAvatars.map((a) => (
          <img
            key={a.cls}
            className={a.cls}
            src={a.img}
            alt="customer"
          />
        ))}
      </div>

      <div className="quote-card">
        <span className="quote-mark open">&ldquo;</span>
        Elementum delivered the site within timeline as they requested. In the
        end, the client found a 50% increase in traffic within days since its
        launch. They also had an impressive ability to use technologies that the
        company hadn't used, which have also proved to be easy to use and
        reliable
        <span className="quote-mark close">&rdquo;</span>
      </div>
    </section>
  )
}
