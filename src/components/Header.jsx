import {Link } from "react-router-dom";
const Header = () => {
    return ( <div className="group">
        
           <Link className="link" to="/"> <img className="img" alt="group" src="assets/shared/desktop/logo.svg"/></Link> 
       
        
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
        <button className="demoButton">Schedule a Demo</button>
        <div className="tst">
                    <img className="circle" src="assets/shared/desktop/bg-pattern-circle.svg" alt="circle" />

        </div>
    </div> );
}
 
export default Header;