import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function MainNav({ brand, leftLinks, rightLinks }) {


  
  return (
      <Navbar className="bg-success navbar-dark">
        <Container fluid>
        <Navbar.Brand href="/">{brand}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            {leftLinks.map(({ url, text }) => (
              <Nav.Link key={text} href={url}>{text}</Nav.Link>
            ))}
          </Nav>
          <Nav>
            {rightLinks.map(({ url, text }) => (
              <Nav.Link key={text} href={url}>{text}</Nav.Link>
            ))}
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
 );
}
