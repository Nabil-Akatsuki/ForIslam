import { useState } from 'react';
import React from 'react'
import {Container, Card, Row, Col, Form,Button} from 'react-bootstrap'
import {updateAxios} from '../../src/services/updateAxios'

function UpdatePage() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [sexe, setSexe] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
   

    const sendUpdate = (e)=>{
        e.preventDefault();
        updateAxios({ nom, prenom, sexe, birthDay, userMail, userPass}).then(response=>{
            console.log(response.data)
        }, reason=>{
            console.log(reason?.response.data)
        })
    }
    return (
      
        <div style={{paddingTop: "100px", backgroundColor: '#851E2F' }}>
             <Container style={{ minHeight: "100vh"}}>
                 <h2 style={{ color:'white', textAlign:'center'}}>Modification du profile</h2><br/>
             <Card body style={{backgroundColor: '#851E2F', borderColor:'white', boxShadow:' rgba(0, 0, 0, 2) 0px 5px 15px', transition:' 0.3s'}} >
                 <Row>
                     <Col xs={12} md={6}>
                     <Form >
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <label>Entrez votre nom</label>
                            <Form.Control type="name" placeholder="Entrez votre nom"  value={nom} onChange={(e) => setNom(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <label>Entrez Votre prenom</label>
                            <Form.Control type="name" placeholder="Entrez Votre prenom"  value={prenom} onChange={(e) => setPrenom(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicDate">
                            <label>Date de naissance</label>
                            <Form.Control type="date"  value={birthDay} onChange={(e) => setBirthDay(e.target.value)}  />
                        </Form.Group>
                    </Form>
                     </Col>
                     <Col xs={12} md={6}>
                     <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <label>Choisissez votre sexe</label>
                            <Form.Select aria-label="Default select example"  value={sexe} onChange={(e) => setSexe(e.target.value)} >
                                <option value="">Choisissez votre sexe</option>
                                <option value="Homme">Homme</option>
                                <option value="Femme">Femme</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <label>Entrez votre email</label>
                            <Form.Control type="email" placeholder="Entrez votre email"  value={userMail} onChange={(e) => setUserMail(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <label>Entrez votre mot de passe</label>
                            <Form.Control type="password" placeholder="Entrez votre Mot de passe"  value={userPass} onChange={(e) => setUserPass(e.target.value)}  />
                        </Form.Group>
                    </Form>
                    <Button variant="outline-light" style={{float:'right'}} onClick={sendUpdate} >Modifié</Button>
                     </Col>
                 </Row>
             </Card>
             </Container>
   
        </div>
    )
}

export default UpdatePage
