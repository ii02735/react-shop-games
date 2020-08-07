import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
    <Navbar>
            <Navbar.Brand>
                <Link to="/catalog">
                    React Gaming
                </Link>
            </Navbar.Brand>
            <Nav className="mr-auto">

            </Nav>
    </Navbar>
)

export default Header;