import "../assets/contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-detail">
              <h1 className="contact-head">Contact</h1>
              <form className="contact-form">
                <div className="input-card">
                  <input
                    className="form-input"
                    placeholder="Your name"
                    type="text"
                  />
                  <input
                    className="form-input"
                    placeholder="Your email"
                    type="email"
                  />
                  <textarea
                    className="form-input"
                    placeholder="Your Message ... "
                    type="text"
                  ></textarea>
                </div>
                <div className="submit-card">
                  <button className="contact-submit">
                    {" "}
                    <i
                      style={{ paddingRight: "15px" }}
                      className="fas fa-paper-plane"
                    ></i>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
