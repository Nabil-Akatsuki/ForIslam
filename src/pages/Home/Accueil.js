import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import mosque10 from '../../image/mosque10.jpg'
function Accueil({ setLoggedIn }) {
    return (
        <Container fluid style={{ minHeight: "100vh",paddingTop: "80px", backgroundImage: "url(" + mosque10 + ")" }}>
            <Row>
                <Col xs={12} md={8} >
                    <h3 style={{ color: "white" }}><strong> Qui combat la vérité sera vaincu</strong></h3>
                    <h5 style={{ color: "white" }}><p>Proverbe d'Hazrat Ali ; Les proverbes et sentences islamiques - VIIe siècle</p></h5>
                    <h3 style={{ color: "white" }}><strong>Allah égare qui Il veut, et Il guide qui Il veut. Il est le Puissant, le Sage.</strong></h3>
                    <h5 style={{ color: "white" }}><p>Et implorez le pardon de votre Seigneur et repentez-vous à Lui. Mon Seigneur est vraiment Miséricordieux et plein d'Amour.</p></h5>
                </Col>
                <Col xs={12} md={4}>
                    <h2 style={{ color: "white"}}><strong>IslamVoice</strong></h2>
                    <h5 style={{ color: "white" }}>Restez connecter à l'Islam où que vous soyez !</h5>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Mot de passe" />
                        </Form.Group>
                    </Form>
                    <Button onClick={(e) => { e.preventDefault(); setLoggedIn(true) }} variant="primary" type="submit">Connexion</Button>
                    <a href="#" style={{marginLeft:'50px'}}>Mot de passe oublié ?</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Accueil
