import './NavBar.css';
import { Link } from 'react-router-dom';
import profile_pic from './profile_pic.jpeg';
import { MdOutlineHome, MdOutlineContactSupport, MdOutlineInfo, MdOutlineCases } from 'react-icons/md';
const NavBar = (props) => {
    return (
        <>

            <nav>
                <div>
                    <img className="profile_pic" src={profile_pic} alt="profile_pic" />
                </div>
                <ul>
                    <li> <Link to="/"><MdOutlineHome size={28} /><label>Home</label></Link></li>
                    <li> <Link to="/about"><MdOutlineInfo size={28} /><label>About</label></Link></li>
                    <li><Link to="/portfolio"><MdOutlineCases size={28} /><label>Portfolio</label></Link></li>
                    <li><Link to="/contact"><MdOutlineContactSupport size={28} /><label>Contact</label></Link></li>
                </ul>
            </nav>
        </>
    );
};
export default NavBar;