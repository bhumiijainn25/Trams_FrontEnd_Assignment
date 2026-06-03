const avatars = [
  { cls: 'a1', img: 12 },
  { cls: 'a2', img: 33 },
  { cls: 'a3', img: 14 },
  { cls: 'a4', img: 51 },
  { cls: 'a5', img: 60 },
  { cls: 'a6', img: 13 },
  { cls: 'a7', img: 68 },
  { cls: 'a8', img: 56 },
]

function Squiggles() {
  return (
    <svg
      className="squiggles"
      viewBox="0 0 90 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M30 8 C8 38 52 60 30 92 C8 124 52 150 30 184 C16 206 34 222 34 222"
        stroke="#1c1c1c"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M58 18 C36 48 80 70 58 102 C36 134 80 160 58 194"
        stroke="#f48fb1"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="hero reveal" id="home">
      <Squiggles />
      <div className="crescent" />
      <h1>
        The <span className="hl-underline">thinkers</span> and doers were{' '}
        <span className="hl hl-pink">changing</span> the{' '}
        <span className="hl hl-green">status</span> Quo with
      </h1>
      <p className="lead">
        We are a team of strategists, designers communicators, researchers.
        Togeather, we belive that progress only hghappens when you refuse to
        play things safe
      </p>
      <div className="avatar-cluster">
        {avatars.map((a) => (
          <img
            key={a.cls}
            className={a.cls}
            src={`https://i.pravatar.cc/240?img=${a.img}`}
            alt="team member"
          />
        ))}
      </div>
    </header>
  )
}
