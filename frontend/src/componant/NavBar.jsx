import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlinePhone,
} from "react-icons/ai";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavColour(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {[
              { path: "/", label: "Home", icon: <AiOutlineHome /> },
              { path: "/about", label: "About", icon: <AiOutlineUser /> },
              {
                path: "/project",
                label: "Projects",
                icon: <AiOutlineFundProjectionScreen />,
              },
              { path: "/resume", label: "Resume", icon: <CgFileDocument /> },
              { path: "/contact", label: "Contact", icon: <AiOutlinePhone /> },
            ].map(({ path, label, icon }) => (
              <Nav.Item key={path}>
                <Nav.Link
                  as={Link}
                  to={path}
                  onClick={() => setExpanded(false)}
                >
                  {icon} {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            {/* <Nav.Item>
              <Nav.Link
                href="https://soumyajitblogs.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Husensayyad"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork /> <AiFillStar />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
