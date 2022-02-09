import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import mosque5 from '../../image/mosque5.jpg'
function Inscription() {
    return (
        <Container fluid style={{ minHeight: "100vh", backgroundImage: "url(" + mosque5 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Row>
                <Col>
                    <Form style={{ margin: "100px" }}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="name" placeholder="Entrez votre nom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control type="name" placeholder="Entrez Votre prenom" />
                        </Form.Group>
                        <Col style={{ marginLeft: "inherit", marginBottom: "8px" }}>
                            <Form.Check
                                style={{ color: "white" }}
                                required
                                label="Homme"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                            <Form.Check
                                style={{ color: "white" }}
                                required
                                label="Femme"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Col>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Entrez votre email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Entrez votre Mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirmez votre Mot de passe" />
                            <Button variant="primary" style={{ marginTop: "20px" }}>Inscription</Button>
                        </Form.Group>

                    </Form>
                </Col>
                <Col>
                    <h2 style={{color:"floralwhite",margin:"100px"}}>Sachez que la vie présente n'est que jeu, amusement, vaine parure, une course à l'orgueil entre vous et une rivalité dans l'acquisition des richesses et des enfants. Elle est en cela pareille à une pluie : la végétation qui en vient émerveille les cultivateurs, puis elle se fane et tu la vois donc jaunie; ensuite elle devient des débris. [...]</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Inscription
