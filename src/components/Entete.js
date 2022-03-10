import React from 'react'
import mosque1 from '../image/mosque1.jpg'
import { Nav, NavDropdown, Navbar, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Entete({ authState }) {
    const navigate =  useNavigate();
   
    const logOut = (e)=>{
        authState.clear()
        navigate('/accueil')
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#"> <img
                        src={mosque1}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    /></Navbar.Brand>
                    <Navbar.Brand href="#home" as={Link} to="/">IslamVoice</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" as={Link} to="/">Accueil</Nav.Link>
                            <Nav.Link href="#pricing"></Nav.Link>
                            {authState ? (<NavDropdown title="Education" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" as={Link} to="/articles" style={{ color: 'white' }} >Articles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" as={Link} to="/messagerie" style={{ color: 'white' }}>Goupe de discussion</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                            </NavDropdown>) : null}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" as={Link} to="/home">Coran</Nav.Link>
                            { authState == null ? <Nav.Link eventKey={2} as={Link} to="/inscription">Inscription</Nav.Link>&&<Nav.Link eventKey={2} as={Link} to="/">Connexion</Nav.Link>: null} 
                            { authState ?(<Nav.Link  onClick={logOut} >Deconnexion&nbsp; <FiLogOut/></Nav.Link>) : null }
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar>
        </div>
    )
}

export default Entete
