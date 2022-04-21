import "./style.css";
import client from "../../utils/images/client.png";
import PageTilte from "../../Components/Atoms/title/index";
function Clients() {
  return (
    <>
      <PageTilte title={"Our Clients"} />
      <div className="testimonials">
        <div className="container">
          <div className="box">
            <img src={client} alt="" />
            <h3>Mohamed Farag</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              The services you provide, thank you, are very wonderful. Please
              persevere. Thank you very much
            </p>
          </div>
          <div className="box">
            <img src={client} alt="" />
            <h3>Mohamed Ibrahim</h3>
            <span className="title">font end Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={client} alt="" />
            <h3>Shady Nabil</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              The services you provide, thank you, are very wonderful. Please
              persevere. Thank you very much
            </p>
          </div>
          <div className="box">
            <img src={client} alt="" />
            <h3>Amr Hendawy</h3>
            <span className="title">Full Stack Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
            </div>
            <p>
              The services you provide, thank you, are very wonderful. Please
              persevere. Thank you very much
            </p>
          </div>
          <div className="box">
            <img src={client} alt="" />
            <h3>Sherief Ashraf</h3>
            <span className="title">back end Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
          <div className="box">
            <img src={client} alt="" />
            <h3>Osama Mohamed</h3>
            <span className="title">mobile Developer</span>
            <div className="rate">
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="filled fas fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              et reiciendis voluptatum, amet est natus quaerat ducimus
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Clients;
