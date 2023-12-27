const Footer = () => {
    return ( <div className="footer">
    <div className="up">
        <h3>Ready to start?</h3>
        <div className="right">
            <input type="email" />
            <button>Schedule a Demo</button>
        </div>
    </div>
    <div className="down">
    <img className="img" alt="group" src="/assets/shared/desktop/logoWhite.svg"/>
        <ul className="list">
        <li className="listItem">Pricing</li>
            <li className="listItem">About</li>
            <li className="listItem">Contact</li>
        </ul>
        <div className="socialMedia">
            <img className="sm" alt="SM" src="/assets/shared/desktop/facebook.svg"></img>
            <img className="sm" alt="SM" src="/assets/shared/desktop/twitter.svg"></img>
            <img className="sm" alt="SM" src="/assets/shared/desktop/linkedin.svg"></img>
        </div>
    </div>       
    </div> );
}
 
export default Footer;