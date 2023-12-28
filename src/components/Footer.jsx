import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="up">
        <h3>Ready to start?</h3>
        <div className="right">
          <input type="email" />
          <button>Schedule a Demo</button>
        </div>
      </div>
      <div className="down">
        <Link className="link" to="/">
          <img className="img" alt="group" src="/assets/shared/desktop/logoWhite.svg" />
        </Link>
        <ul className="list">
          <li className="listItem">
            <Link className="link" to="/pricing">Pricing</Link> 
          </li>
          <li className="listItem">
            <Link className="link" to="/about">About</Link>
          </li>
          <li className="listItem">
            <Link className="link" to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="socialMedia">
          <img className="sm" alt="SM" src="/assets/shared/desktop/facebook.svg" />
          <img className="sm" alt="SM" src="/assets/shared/desktop/twitter.svg" />
          <img className="sm" alt="SM" src="/assets/shared/desktop/linkedin.svg" />
        </div>
      </div>       
    </div>
  );
}

export default Footer;
