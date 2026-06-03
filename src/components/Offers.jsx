const offers = [
  {
    small: 'Office of multiple intrest content',
    title: 'Collaborative & partnership',
    flower: false,
  },
  {
    small: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
    flower: false,
  },
  {
    small: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
    flower: true,
  },
]

export default function Offers() {
  return (
    <section className="offers reveal" id="service">
      <h2>
        <span className="hl-underline">What</span> we{' '}
        <span className="hl hl-green">can</span>
        <br />
        offer you!
      </h2>

      {offers.map((o) => (
        <div className="offer-row" key={o.title}>
          <p className="small">{o.small}</p>
          <div className="title">
            {o.title}
            {o.flower && (
              <span className="flower" role="img" aria-label="flower">
                🌼
              </span>
            )}
          </div>
          <span className="arrow">&rarr;</span>
        </div>
      ))}
    </section>
  )
}
