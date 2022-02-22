import React from 'react'
import { Container, Row, Col, Form, Button, Link } from 'react-bootstrap'
import mosque10 from '../../image/mosque10.jpg'
function Accueil({ setLoggedIn }) {
    return (
        <Container fluid style={{ minHeight: "100vh", backgroundImage: "url(" + mosque10 + ")" }}>
            <Row style={{ margin: "45px" }}>
                <Col xs={6} style={{ marginTop: "50px" }}>
                    <h3 style={{ color: "white" }}><strong> Qui combat la vérité sera vaincu</strong></h3>
                    <h5 style={{ color: "white" }}><p>Proverbe d'Hazrat Ali ; Les proverbes et sentences islamiques - VIIe siècle</p></h5>
                    <h3 style={{ color: "white" }}><strong>Allah égare qui Il veut, et Il guide qui Il veut. Il est le Puissant, le Sage.</strong></h3>
                    <h5 style={{ color: "white" }}><p>Et implorez le pardon de votre Seigneur et repentez-vous à Lui. Mon Seigneur est vraiment Miséricordieux et plein d'Amour.</p></h5>
                    <div>

                    </div>
                </Col>
                <Col xs={6} style={{ marginTop: "-95px" }}>
                    <Row>
                        <Col className="corpsLogin">
                            <Row>
                                <h2 className="textColor"><strong>IslamVoice</strong></h2>
                                <h5 className="textColor">Restez connecter à l'Islam où que vous soyez !</h5>
                            </Row>
                            <Form style={{ marginTop: "20px" }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Entemail" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Mot de passe" />
                                </Form.Group>

                                <Row style={{
                                    marginLeft: "238px",
                                    marginTop: "28px",
                                }}>
                                    <Button onClick={(e) => {
                                        e.preventDefault();
                                        setLoggedIn(true)
                                    }} style={{ width: "110px" }} variant="primary" type="submit">
                                        Connexion
                                    </Button>
                                    <a style={{
                                        marginLeft: "-30px",
                                        color: "white", textDecoration: 'none',
                                        marginTop: '15px',
                                    }} href="#">Mot de passe oublié ?</a>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Accueil
