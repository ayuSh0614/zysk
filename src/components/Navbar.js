import React from "react";
import { Navbar, Nav, NavDropdown, Image, Container } from "react-bootstrap";
import "../styles/Navbar.css"; // Import the custom CSS file
import logo from "../logos/Logo wrap.png";

const NavbarComponent = () => {
  const profilePhoto =
    "https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QG~Klln1fhzUy1rkQlgHwFy4g3-9EBdYU54aO3ADBbMndp4aovBwNypWvyFPMSBaKrdIQiEgnDsvqvH5GCAFHlmH0sZulCRrp152TULvPr0E3puyjjgN6NwCxWyhQMFgKbnjAyasHt5~zVsc49CMYY7w64TEOUEVifHeTg9FS6D503j0ADg~Uh768fYf2upyEQX6hkAUOeWexYZaxMvNarNdtK6a6qcHmVihApWK4Lv7vrhVAdlI9fLd7mAjiFOE-0U5MiegfvEXPNVI2T4NbsFCODmDGppns~hlm9rVp4JG0h2dQoD37PqSId8yBMkv8zt-iuotxkH3uR7Yrw~Rsg__";

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Company Logo"
            className="d-inline-block align-top"
            style={{ height: "40px" }}
          />
        </Navbar.Brand>

        {/* Left-aligned Navigation Links */}
        <Nav className="me-auto align-items-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Products" id="products-dropdown">
            <NavDropdown.Item href="#product1">Product 1</NavDropdown.Item>
            <NavDropdown.Item href="#product2">Product 2</NavDropdown.Item>
            <NavDropdown.Item href="#product3">Product 3</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Resources" id="resources-dropdown">
            <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#documentation">
              Documentation
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        {/* Profile Image on Right */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Image
              src={profilePhoto}
              alt="Profile"
              roundedCircle
              style={{ width: "40px", height: "40px" }}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
