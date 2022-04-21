import "./style.css";
// import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">Nasiha</div>
          <nav>
            <i className="fas fa-bars toggle-menu"></i>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/add-offer">Add offer</a>
              </li>
              <li>
                <a href="clients ">clients </a>
              </li>
              <li>
                <a href="About-us">About</a>
              </li>
              {/* <li>
                <a href="Pricing">Pricing</a>
              </li> */}
              <li>
                <a href="Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
