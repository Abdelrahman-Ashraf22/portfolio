export default function Contact() {
  return (
    <section className="cards contact" id="contact">
      <h2 className="title">Contact</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <img
              alt="facebook"
              src="/icons/phone.svg"
              width={50}
              height={50}
            ></img>
          </div>
          <div className="info">
            <h3>Phone</h3>
            <p>+201226611122</p>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <img
              alt="facebook"
              src="/icons/email.svg"
              width={50}
              height={50}
            ></img>
          </div>
          <div className="info">
            <h3>Email</h3>
            <p>abdo.ashraf645@yahoo.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
