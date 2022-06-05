import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import mosque10 from '../../image/mosque10.jpg'
import { logIn } from '../../services/authenti';
import { authState } from '../../StateGobal/authState'
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { registerState } from '../../StateGobal/registerState'
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Accueil() {
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPassWord] = useState('');
    const [infoState, setInfoState] = useRecoilState(authState);
    const [regiState, setRegiState] = useRecoilState(registerState)
    const navigate = useNavigate();
    const [mask, setMask] = useState(false);

    const unMask = (e) => {
        setMask(prevState => !prevState)
    }
    const sendLogIn = (e) => {
        e.preventDefault();
        logIn({ userMail, userPass }).then(response => {
            console.log(response.data);
            setInfoState(response.data);
            navigate("/messagerie");
            let responseJson = JSON.stringify(response.data);
            console.log(responseJson)
            sessionStorage.setItem('usersData', responseJson)
        }, reason => {
            console.log(reason?.response?.data)
            setRegiState(reason?.response?.data)
        })
    }

    return (
        <div style={{ paddingTop: "150px", backgroundImage: "url(" + mosque10 + ")", backgroundSize: 'cover' }}>
            <Container style={{ minHeight: "100vh" }}>
                <Row>
                    <Col xs={12} md={8} >
                        <h3 style={{ color: "white" }}><strong> Qui combat la vérité sera vaincu </strong></h3>
                        <h5 style={{ color: "white" }}><p>Proverbe d'Hazrat Ali ; Les proverbes et sentences islamiques - VIIe siècle</p></h5>
                        <h3 style={{ color: "white" }}><strong>Allah égare qui Il veut, et Il guide qui Il veut. Il est le Puissant, le Sage.</strong></h3>
                        <h5 style={{ color: "white" }}><p>Et implorez le pardon de votre Seigneur et repentez-vous à Lui. Mon Seigneur est vraiment Miséricordieux et plein d'Amour.</p></h5>
                        <h3> <p style={{ color: "white" }}>Bienvenu à vous Mr/Mme {infoState?.firstName}</p></h3>
                    </Col>
                    {
                        infoState === null ? (<Col xs={12} md={4}>
                            <h2 style={{ color: "white" }}><strong>IslamVoice</strong></h2>
                            <h5 style={{ color: "white" }}>Restez connecter à l'Islam où que vous soyez !</h5>
                            <hr style={{ color: "white" }}></hr>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <p style={{ color: "white", textAlign: 'center' }}>{regiState}</p>
                                    <Form.Control type="email" placeholder="E-mail" value={userMail} onChange={(e) => setUserMail(e.target.value)} />
                                </Form.Group>

                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Mot de passe"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        type={mask ? 'text' : 'password'}
                                        value={userPass}
                                        onChange={(e) => setUserPassWord(e.target.value)}
                                    />
                                    <Button
                                        variant="secondary"
                                        id="button-addon2"
                                        onClick={unMask}>
                                        {mask ? <FaEye /> : <FaEyeSlash />}
                                    </Button>
                                </InputGroup>
                            </Form>
                            <Button onClick={sendLogIn} variant="primary" type="submit" style={{ float: 'right' }}>Connexion</Button>
                            <a href="#" style={{ float: 'left', color: 'white' }}>Mot de passe oublié ?</a>
                        </Col>) : null
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Accueil
