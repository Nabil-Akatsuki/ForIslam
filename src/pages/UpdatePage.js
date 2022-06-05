import { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Form, Button, Stack } from 'react-bootstrap'
import { updateAxios } from '../../src/services/updateAxios'
import { useRecoilState } from 'recoil';
import { authState } from '../StateGobal/authState';
import { me } from '../services/authenti';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function UpdatePage() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [sexe, setSexe] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    const [authData, setAuthDAta] = useRecoilState(authState);
    const navigate = useNavigate();
    const closeupdate = useNavigate();
   
    const closeUp = (e) =>{
        closeupdate('/messagerie')
    }

    const sendUpdate = (e) => {
        e.preventDefault();
        updateAxios(authData.userId, { nom, prenom, sexe, birthDay, userMail, userPass }).then(response => {
            toast(`${response.data}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(response.data);
            navigate("/messagerie");
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
            console.log(reason?.response.data)
        })
    }
    
    const getMe = async () => {
        try {
            let response = await me(authData.userId);
            if (response.status === 200) {
                let user = response.data;
                setUserMail(user?.userMail);
                setNom(user?.nom);
                setPrenom(user?.prenom);
                setSexe(user?.sexe);
                setBirthDay(user?.birthDay);
                setUserPass(user?.userPass)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (authData !== null) {
            getMe()
        }
        return () => {
        }
    }, [authData])

    return (

        <div style={{ paddingTop: "100px", backgroundColor: '#851E2F' }}>
            <Container style={{ minHeight: "100vh" }}>
                <h2 style={{ color: 'white', textAlign: 'center' }}>Modification du profile</h2><br />
                <Card body
                    style={{
                        backgroundColor: '#851E2F',
                        borderColor: 'white',
                        boxShadow: ' rgba(0, 0, 0, 2) 0px 5px 15px',
                        transition: ' 0.3s'
                    }} >
                    <Row>
                        <Col xs={12} md={6}>
                            <Form >
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <label>Entrez votre nom</label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Entrez votre nom"
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <label>Entrez Votre prenom</label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Entrez Votre prenom"
                                        value={prenom}
                                        onChange={(e) => setPrenom(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicDate">
                                    <label>Date de naissance</label>
                                    <Form.Control
                                        type="date"
                                        value={birthDay}
                                        onChange={(e) => setBirthDay(e.target.value)} />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <label>Choisissez votre sexe</label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        value={sexe}
                                        onChange={(e) => setSexe(e.target.value)} >
                                        <option value="">Choisissez votre sexe</option>
                                        <option value="Homme">Homme</option>
                                        <option value="Femme">Femme</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <label>Entrez votre email</label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Entrez votre email"
                                        value={userMail}
                                        onChange={(e) => setUserMail(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <label>Entrez votre nouveau mot de passe</label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Entrez votre nouveau mot de passe"
                                        value={userPass}
                                        onChange={(e) => setUserPass(e.target.value)} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Stack gap={2} className="col-md-2 mx-auto">
                            <Button
                                variant="outline-secondary"
                                type="submit"
                                onClick={sendUpdate}>Modifié</Button>
                            <Button variant="secondary" onClick={closeUp} >Annuler</Button>
                        </Stack>
                </Card>

            </Container>

        </div>
    )
}

export default UpdatePage
