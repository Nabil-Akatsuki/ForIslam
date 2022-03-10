
import React from 'react'
import { Container, Row, Col, Nav, Button, NavDropdown, FloatingLabel, Form, Alert } from 'react-bootstrap'
import '../../assets/css/messagerie.css'
import { FaRegPaperPlane } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { authState } from '../../StateGobal/authState';


function Messagerie() {
  const [authData, setAuthData] = useRecoilState(authState);

    return (

        <Container fluid style={{ minHeight: "100vh", paddingTop: "80px", backgroundColor: '#430F18' }}>

            <Row>
                <Col xs={12} md={2}>
                    <div>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="" style={{ backgroundColor: '#851E2F', padding: '5px', textAlign: 'center', color: 'white' }}>
                                {`${authData?.firstName} ${authData?.lastName}`}
                                </Nav.Link>
                            <hr></hr>
                            <Nav className="me-auto">
                                <NavDropdown title="Messagerie" id="basic-nav-dropdown" style={{ backgroundColor: '#851E2F' }}>
                                    <NavDropdown.Item className="dropCss" href="#action/3.2"> Nous contacter</NavDropdown.Item>
                                    <NavDropdown.Item className="dropCss" href="#action/3.3">Faire un DON</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className="dropCss" href="#action/3.4"> A propos</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Nav><br/>
                    </div>
                </Col>

                <Col xs={12} md={7} >
                    <Row >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card" style={{ backgroundColor: '#851E2F' }} >
                                        <div className="card-body">
                                            <div className="card-title" style={{ color: 'white', textAlign: 'center' }} >Groupe de discussion</div>
                                            <hr />
                                            <div className="messages">
                                                <div></div>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="card-footer" style={{ marginTop: '250px' }} >
                                                <input id="text"
                                                    type="text"
                                                    placeholder="Taper votre message ici"
                                                    className="form-control"
                                                />
                                                <br />
                                                <button type="submit" style={{ width: '124px' }}
                                                    className="btn btn-primary form-control">
                                                    Envoyer&nbsp; <FaRegPaperPlane />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Messagerie
