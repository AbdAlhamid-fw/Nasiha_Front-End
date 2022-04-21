import './style.css'
function Footer() {
    return (
      <>
        <div className="footer">
          <div className="container">
            <p>We Are Social</p>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fas fa-home"></i>
              <i className="fab fa-linkedin"></i>
            </div>
            <p className="copyright">
              &copy; 2022 <span>Nasihaa</span> All Right Reserved
            </p>
          </div>
        </div>
      </>
    );
}

export default Footer;