import "./style.css"
import About from "../../utils/images/About.webp";
import PageTilte from "../../Components/Atoms/title/index"; 
function AboutUs() {
  return (
    <>
      <div class="about">
        <PageTilte title={"About us"} />
        <div class="container">
          <p>
            We are a company that sells homes, we seek to secure your order with
            the best specifications, at the best competitive prices, and in the
            best possible ways We have construction projects in all of the
            Syrian governorate
          </p>
          <br />
        </div>
        <img src={About} alt="" />
      </div>
    </>
  );
}
export default AboutUs;
