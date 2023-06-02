import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function HeaderMenuLayout() {
  const links = [
    {
      item: "All Items",
    },
    {
      item: "Dresses",
    },
    {
      item: "Sesonal",
    },
    {
      item: "Denims",
    },
    {
      item: "Tshirts",
    },
    {
      item: "Tops",
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
      <Navbar.Brand href="#home">
            <img
              src='logo.png'
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="lakkaru logo"
            />lKFashion
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{textAlign:'right'}}>
        <Nav className="me-auto justify-content-end">
            {links.map((val, key)=>{
              return <Nav.Link  key={key} href="#features">{val.item.toUpperCase()}</Nav.Link>
            })}
            
          
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              CART
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderMenuLayout;
