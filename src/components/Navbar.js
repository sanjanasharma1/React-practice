import {Link} from 'react-router-dom';
import Newspaper from "../images/newspaper.png";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="brand-logo"><img src={Newspaper}/></Link>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
        </div>
    ); 
}
 
export default Navbar;