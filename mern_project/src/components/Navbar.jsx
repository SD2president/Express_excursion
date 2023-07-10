import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to='/'>
                        <img src="../images/logoOnly.png" className="logoimg" />
                    </Link>
                    <Link className="link" to="/" id="navTitle">
                        <h1>
                            Express Excursions
                        </h1>
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/">
                        <h3>
                            Home
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