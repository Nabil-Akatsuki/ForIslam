import React, { useState } from 'react'
import { Button, Form, Container, Col, Row, Stack, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { senderMailAxios } from '../../services/SenderMailAxios'
import { toast } from 'react-toastify';


function MailSender() {

    const [senderMail, setSenderMail] = useState("");
    const [senderMessage, setSenderMessage] = useState("");

    const handleSendMail = (e) => {
        e.preventDefault();
        senderMailAxios({ senderMail, senderMessage }).then(response => {
            toast(`${response.data}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setSenderMessage('');

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
    }
    const navigate = useNavigate();
    const closeSender = () => {
        navigate("/messagerie");
    }
    return (
        <div style={{ paddingTop: "150px", backgroundColor: '#851E2F' }}>
            <Container style={{ minHeight: "100vh" }} >
                <Row>
                    <Col></Col>
                    <Col xs={8}>
                        <Card body style={{
                            backgroundColor: '#851E2F',
                            borderColor: 'white',
                            boxShadow: 'rgba(0, 0, 0, 2) 0px 5px 15px',
                            transition: '0.3s'
                        }} >
                            <Form>
                                <>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Entrez votre e-mail</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                                value={senderMail}
                                                onChange={(e) => setSenderMail(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Entrez votre message ici</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={3}
                                                value={senderMessage}
                                                onChange={(e) => setSenderMessage(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Form>
                                    <Stack gap={2} className="col-md-3 mx-auto">
                                        <Button
                                            variant="outline-secondary" onClick={handleSendMail} >Envoyer</Button>
                                        <Button
                                            variant="secondary"
                                            onClick={closeSender} >
                                            Annuler
                                        </Button>
                                    </Stack>
                                </>
                            </Form>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>

            </Container>
        </div>
    )
}

export default MailSender