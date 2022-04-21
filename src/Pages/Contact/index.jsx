import "./style.css"
import discount from "../../utils/images/discount.jpg";
import PageTilte from '../../Components/Atoms/title/index'

function Contact() {
  return (
    <>
      <PageTilte title={"contact us"} />
      <div className="discount">
        <div className="image">
          <div className="content">
         
            <h3>It is our pleasure to contact us when needed or to join us</h3>
            <br /><br /><br />
            <img src={discount} alt="" />
          </div>
        </div>
        <div className="form">
          <div className="content">
            <h2>Submit your Information</h2>
            <br />
            <form action="">
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                className="input"
                type="email"
                placeholder="Your Email"
                name="email"
              />
              <input
                className="input"
                type="text"
                placeholder="Your Phone"
                name="mobile"
              />
              <textarea
                className="input"
                placeholder="Tell Us About Your Needs"
                name="message"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
