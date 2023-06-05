import { Box } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

function HeaderMenuLayout() {
  const links = [
    {
      item: "All Items",
      url: "/allItems",
    },
    {
      item: "Dresses",
      url: "/dress",
    },
    {
      item: "Seasonal",
      url: "/seasonal",
    },
    {
      item: "Denims",
      url: "/denims",
    },
    {
      item: "Tshirts",
      url: "/tshirts",
    },
    {
      item: "Tops",
      url: "/tops",
    },
  ];
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#6A5ACD" }}
    >
      <Container>
        <Navbar.Brand href="/lakkaru_fashion_with_react">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="lakkaru logo"
          />
          lKFashion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ textAlign: "right" }}
        >
          <Nav className="me-auto justify-content-end">
            {links.map((val, key) => {
              return (
                <Box className="nav-box" key={key}>
                  <NavLink
                    
                    to={val.url}
                    style={({ isActive }) => {
                      return isActive
                        ? {
                            color: "#BDCD5A",
                            // textDecoration: "none",
                            paddingRight: "30px",
                            fontWeight: "500",
                            textDecorationColor: "red",
                            textUnderlineOffset: "5px",
                          }
                        : {
                            color: "white",
                            textDecoration: "none",
                            marginRight: "30px",
                          };
                    }}
                    // style={{
                    //   marginRight: "30px",
                    //   color: "white",
                    //   textDecoration: "none",
                    // }}
                  >
                    {val.item.toUpperCase()}
                  </NavLink>
                </Box>
              );
            })}
          </Nav>
          <Nav>
            <Box className="nav-box cart">
              <NavLink
                // eventKey={2}
                style={({ isActive }) => {
                  return isActive
                    ? {
                      color: "#BDCD5A",
                      // textDecoration: "none",
                      // paddingRight: "30px",
                      fontWeight: "500",
                      textDecorationColor: "red",
                      textUnderlineOffset: "5px",
                      }
                    : { color: "white",
                    textDecoration: "none",
                    
                   };
                }}
                to="/cart"
                // style={{ color: "white", textDecoration: "none" }}
              >
                CART
              </NavLink>
            </Box>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenuLayout;
