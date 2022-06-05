import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import mosque5 from '../../image/mosque5.jpg'
import '../../assets/css/inscription.css'
import { register } from '../../services/register'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Inscription() {
    const navigate = useNavigate();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [sexe, setSexe] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [userMail, setUserMail] = useState('')
    const [userPass, setUserPass] = useState('');
    const [registerError, setRegisterError] = useState(null)

    const sendRegister = (e) => {
        e.preventDefault();
        register({ nom, prenom, sexe, birthDay, userMail, userPass }).then(response => {
            toast(`${response.data}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/accueil")
        }, reason => {
            toast(`${reason?.response.data}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
           
        });
        setNom('');
        setPrenom('');
        setSexe('');
        setBirthDay('');
        setUserMail('');
        setUserPass('');

    }

    return (
        <div style={{ paddingTop: "150px", backgroundImage: "url(" + mosque5 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Container style={{ minHeight: "100vh" }}>
                <Row>
                    <Col xs={12} md={3}>
                        <Form >
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <label>Entrez votre nom</label>
                                <Form.Control type="name" placeholder="Entrez votre nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <label>Entrez Votre prenom</label>
                                <Form.Control type="name" placeholder="Entrez Votre prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <label>Date de naissance</label>
                                <Form.Control type="date" value={birthDay} onChange={(e) => setBirthDay(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xs={12} md={3}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <label>Choisissez votre sexe</label>
                                <Form.Select aria-label="Default select example" value={sexe} onChange={(e) => setSexe(e.target.value)}>
                                    <option value="">Choisissez votre sexe</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <label>Entrez votre email</label>
                                <Form.Control type="email" placeholder="Entrez votre email" value={userMail} onChange={(e) => setUserMail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <label>Entrez votre mot de passe</label>
                                <Form.Control type="password" placeholder="Entrez votre Mot de passe" value={userPass} onChange={(e) => setUserPass(e.target.value)} />
                            </Form.Group>

                            <Button variant="primary" onClick={sendRegister} style={{ float: 'right' }}>S'inscrire</Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4 style={{ color: "floralwhite" }}>Sachez que la vie présente n'est que jeu, amusement, vaine parure, une course à l'orgueil entre vous et une rivalité dans l'acquisition des richesses et des enfants. Elle est en cela pareille à une pluie : la végétation qui en vient émerveille les cultivateurs, puis elle se fane et tu la vois donc jaunie; ensuite elle devient des débris. [...]</h4>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

export default Inscription