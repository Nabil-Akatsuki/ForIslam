
import React from 'react'
import { Container, Row, Col, Nav, Button, NavDropdown, FloatingLabel, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../assets/css/messagerie.css'
import { FaRegPaperPlane } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { authState } from '../../StateGobal/authState';
import { RiUser3Fill,RiUserSettingsLine} from "react-icons/ri";


function Messagerie() {
    const [authData, setAuthData] = useRecoilState(authState);


    return (
        <div style={{ paddingTop: "130px", backgroundColor: '#851E2F' }}>
            <Container >
                <Row>
                    <Col xs={12} md={2}>
                        <div style={{paddingBottom:'10px'}}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="" style={{
                                    backgroundColor: '#851E2F',
                                    padding: '5px',
                                    textAlign: 'center',
                                    color: 'white'
                                }}>
                                    {`${authData?.firstName} ${authData?.lastName}`} <RiUser3Fill/>
                                </Nav.Link>
                                <hr style={{ color: 'white' }} ></hr>
                                <Button variant="outline-light">
                                    <Nav className="me-auto">
                                        <NavDropdown title="Messagerie" id="basic-nav-dropdown">
                                            <NavDropdown.Item className="dropCss" href="#action/3.2"> Nous contacter</NavDropdown.Item>
                                            <NavDropdown.Item className="dropCss" href="#action/3.3">Faire un DON</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item className="dropCss" href="#action/3.4"> A propos</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Button>
                            </Nav><br />
                            <Button variant="outline-light" as={Link} to="/updatepage" >Modifier profile <RiUserSettingsLine /></Button>
                            <Button variant="outline-light" as={Link} to="/utilisateurs" style={{marginTop:'15px'}} >Utilisateurs</Button>
                        </div>
                    </Col>
                        <br />
                    <Col xs={12} md={8} >
                        <Row >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card" style={{
                                            backgroundColor: '#851E2F',
                                            borderColor: 'white',
                                            boxShadow: ' rgba(0, 0, 0, 2) 0px 5px 15px',
                                            transition: ' 0.3s'
                                        }} >
                                            <div className="card-body">
                                                <div className="card-title" style={{ color: 'white', textAlign: 'center' }} >Groupe de discussion</div>
                                                <hr style={{color:'white'}} />
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
        </div>
    )
}
export default Messagerie
