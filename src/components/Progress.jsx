function Arrow() {
  return (
    <a href="#" className="read-more">
      Read more <span className="dash" />
    </a>
  )
}

export default function Progress() {
  return (
    <section className="progress">
      {/* Row 1: text left, image right */}
      <div className="split reveal">
        <div className="text">
          <h2>
            <span className="hl-underline">Tomorrow</span> should
            <br />
            be better than today
          </h2>
          <p>
            We are a team of strategists, designers communicators, researchers.
            Together, we belive that progress only happpens when you allow to
            play things safe
          </p>
          <Arrow />
        </div>
        <div className="visual">
          <img
            className="circle-img"
            src="src/Assets/Image7.png"
            
            alt="team collaborating"
          />
          <span className="tri tri-right" />
        </div>
      </div>

      {/* Row 2: image left, text right */}
      <div className="split reverse reveal">
        <div className="visual">
          <img
            className="circle-img"
            src="src/Assets/Image8.png"
            alt="team working"
          />
          <span className="tri tri-bottom" />
        </div>
        <div className="text">
          <h2>
            <span className="hl-underline">See</span> how we can
            <br />
            help you progress
          </h2>
          <p>
            We add a layer of fearless insights and action that drives change
            makers to accelerate their progress in areas such as brand, design,
            digital, comms and social aspects.
          </p>
          <Arrow />
        </div>
      </div>
    </section>
  )
}
