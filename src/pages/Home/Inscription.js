import React from 'react'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import mosque5 from '../../image/mosque5.jpg'
import '../../assets/css/inscription.css'
function Inscription() {
    return (
        <Container fluid style={{ minHeight: "100vh", paddingTop: "80px", backgroundImage: "url(" + mosque5 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Row>
                <Col xs={12} md={3}>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <label>Entrez votre nom</label>
                            <Form.Control type="name" placeholder="Entrez votre nom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <label>Entrez Votre prenom</label>
                            <Form.Control type="name" placeholder="Entrez Votre prenom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <label>Choisissez votre sexe</label>
                            <Form.Select aria-label="Default select example">
                                <option value="">Choisissez votre sexe</option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <label>Date de naissance</label>
                            <Form.Control type="date" />
                        </Form.Group>

                    </Form>
                </Col>
                <Col xs={12} md={3}>
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <label>Entrez votre email</label>
                            <Form.Control type="email" placeholder="Entrez votre email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <label>Entrez votre Mot de passe</label>
                            <Form.Control type="password" placeholder="Entrez votre Mot de passe" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <label>Confirmez votre Mot de passe</label>
                            <Form.Control type="password" placeholder="Confirmez votre Mot de passe" />
                            <Button variant="primary" style={{ marginTop: "20px" }}>Inscription</Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} md={6}>
                    <h4 style={{ color: "floralwhite" }}>Sachez que la vie présente n'est que jeu, amusement, vaine parure, une course à l'orgueil entre vous et une rivalité dans l'acquisition des richesses et des enfants. Elle est en cela pareille à une pluie : la végétation qui en vient émerveille les cultivateurs, puis elle se fane et tu la vois donc jaunie; ensuite elle devient des débris. [...]</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default Inscription
