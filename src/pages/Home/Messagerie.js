
import React from 'react'
import { Container, Row, Col, Nav, Button, Carousel } from 'react-bootstrap'
import '../../assets/css/index.css'
import mosque14 from '../../image/mosque14.jpg'
import mosque12 from '../../image/mosque12.jpg'
import mosque16 from '../../image/mosque16.jpg'



function Messagerie() {
    return (

        <Container fluid style={{ minHeight: "100vh" }}>

            <Row>
                <Col xs={3} style={{ width: '230px' }}>
                    <div style={{ marginTop: '100px', width: '195px' }}>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="" style={{ backgroundColor: 'gray', padding: '5px', textAlign: 'center', color: 'white' }}>Nom Utilisateur</Nav.Link>
                            <hr></hr>
                            <Nav.Link href="" className='barre-laterale'>Groupe de discussion</Nav.Link>
                            <Nav.Link href="" className='barre-laterale'>Nous contacter</Nav.Link>
                            <Nav.Link href="" className='barre-laterale'>Faire un DON</Nav.Link>
                            <Nav.Link href="" className='barre-laterale'>A propos</Nav.Link>
                        </Nav>
                       
                    </div>
                </Col>

                <Col xs={6}>
                    <div style={{ marginTop: '100px' }}>
                        <Nav.Link style={{ textAlign: 'center', backgroundColor: 'gray', padding: '5px', color: 'white' }}>Groupe de discussion</Nav.Link>
                    </div>
                    <div style={{ background: '#e0e4e4' }}>
                        <div style={{ minHeight: "400px", overflow: "auto" }}>
<p></p>
                        </div>
                        <div>
                            <input style={{ width: '540px', height: '40px', marginLeft: '10px' }} />
                            <Button variant="secondary" style={{ marginLeft: '11px' }}>Envoyer</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={3} style={{ marginTop: '100px', width: '440px' }}>
                    <div>
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    style={{ width: '416px' }}
                                    src={mosque14}
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                    <p className='textCarousel'>Le bien qui t'arrive provient de Dieu ; le mal qui t'arrive ne peut venir que de toi-même.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '416px' }}
                                    src={mosque12}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>

                                    <p className='textCarousel'>
                                        Et qui te fera connaître ce qui est le jour de malheur ?
                                        Le jour où les hommes seront comme des papillons qu'on disperse,
                                        Où les montagnes seront comme des flocons de laine cardée.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    style={{ width: '416px' }}
                                    src={mosque16}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>

                                    <p className='textCarousel'>
                                        Mais souviens-toi du nom de ton Seigneur matin et soir,
                                        Et pendant la nuit, adore-Le, et célèbre Ses louanges durant la longue nuit !</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Messagerie
