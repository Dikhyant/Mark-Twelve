import "./NavBar.css";
import NavTab from "./Widgets/NavTab";

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar" >
            <div className="site-title">Tri It</div>
            <div className="nav-tabs">
                <Link to="quiz" ><NavTab title="Quiz" /></Link>
                <Link to="triangle-area" ><NavTab title="Area of Triangle" /></Link>
                <Link to="hypotenues" ><NavTab title="Hypotenues" /></Link>
                <Link to="verify-triangle" ><NavTab title="Verify Triangle" /></Link>
            </div>
            <div style={{flex: 1}}></div>
        </div>
    )
}

export default NavBar;