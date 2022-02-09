
import './App.css';
import mosque1 from './mosque1.jpg'
import { Button, Row, Col, Icon, Nav, NavDropdown, Navbar, Container, Form } from 'react-bootstrap';
import { left, right } from '@popperjs/core';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home"> <img
            src={mosque1}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          /></Navbar.Brand>
          <Navbar.Brand href="#home">IslamVoice</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Contacts</Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
              <NavDropdown title="Education" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Articles</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Coran</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Connexion</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Inscription</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar>
      <Container className="corps">
        <Row>
          <Col className="corpsLogin">
            <Row>
              <h2 className="textColor"><strong>IslamVoice</strong></h2>
              <h5 className="textColor">Restez connecter à l'Islam où que vous soyez !</h5>
            </Row>
            <Form style={{ marginTop: "20px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Entrer email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Mot de passe" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Connexion
              </Button>
              <Row style={{ marginTop: "20px" }}>
                <a href="#">Mot de passe oublié ?</a>
              </Row>
            </Form>
          </Col>
          <Col className="imageMosque">
            <img src={mosque1} alt='' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
