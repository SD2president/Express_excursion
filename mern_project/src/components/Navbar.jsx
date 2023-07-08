import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
    <div className="navBar">
        <div className="Container">
            <div className="logo">
                <a href="/">
                    <img className="logoimg" src='/images/logo.png' alt="Express Excursions"/>
                </a>
            </div>
            <div className="links">
                <Link className="link" to="/">
                    <h3>
                        Home
                    </h3>
                </Link>
                <Link className="link" to="/about">
                    <h3>
                        About
                    </h3>
                </Link>
                <Link className="link" to="/destinations">
                    <h3>
                        Destinations
                    </h3>
                </Link>
                <Link className="link" to="/new">
                    <h3>
                        Post
                    </h3>
                </Link>
                <Link className="link" to="/login" id="margR">
                    <h3>
                        Login
                    </h3>
                </Link>
            </div>
        </div>
    </div>
    )
}
export default Navbar