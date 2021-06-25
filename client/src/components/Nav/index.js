import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link to="/orderHistory">
                            Order History
                        </Link>
                    </li>
                    <li className="mx-1">
                        {}
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="flex-row">
                    <li className="mx-1">
                        <Link style={{textDecoration:"none"}} to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="mx-1">
                        <Link style={{textDecoration: "none"}} to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            );
        }
    }

    return (
        <header className="flex-row px-1">
            <h1>
                <Link style={{textDecoration: "none"}} to="/">
                    WALLPAPER MARKET
                </Link>
            </h1>

            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}

export default Nav;
