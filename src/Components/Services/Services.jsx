export default function Services() {
  return (
    <section className="cards" id="services">
      <h2 className="title">Services</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <img
              src="/portfolio/icons/code.svg"
              width={150}
              height={150}
              alt="code"
            ></img>
          </div>
          <div className="info">
            <h3>Web Design</h3>
            <p>
              Design and develop responsive web pages through code as a
              &#34;Front-End Developer&#34;
            </p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img
              src="/portfolio/icons/palette.svg"
              width={150}
              height={150}
              alt="palette"
            ></img>
          </div>
          <div className="info">
            <h3>Graphic Design</h3>
            <p>
              Graphic Designer dealing with &#34;Logos, Banners, Business cards,
              etc..&#34; using Adobe Photoshop & Adobe illustrator
            </p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img
              src="/portfolio/icons/figma.svg"
              width={150}
              height={150}
              alt="figma"
            ></img>
          </div>
          <div className="info">
            <h3>UI Design</h3>
            <p>
              Designing mobile app screens and Web-pages Using Adobe XD & Figma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
