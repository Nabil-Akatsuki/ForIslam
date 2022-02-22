
import React, { useState, useEffect } from 'react'
import { ButtonGroup, Button, Row, Col, Container, DropdownButton, Dropdown, InputGroup, FormControl, Alert } from 'react-bootstrap';
import data from '../../assets/data/quran.json'

function Home() {
    const [sourate, setSourate] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sourateByPage, setSourateByPage] = useState([]);
    const [currentSourate, setCurrentSourate] = useState();
    const [currentPosition, setCurrentPosition] = useState();
    const affichageParPage = 9;

    const handleSourateClick = (position) => {
        setCurrentPosition(position);
    }

    const handleClickSuivant = () => {
        let elementSourate = [];

        if (currentPage <= 12) {
            setCurrentPage(currentPage + 1);
            let tempcurrentPage = currentPage + 1;

            for (let i = ((tempcurrentPage - 1) * affichageParPage);
                i <= (((tempcurrentPage - 1) * affichageParPage) + affichageParPage);
                i++) {

                if (sourate[i] !== undefined) {
                    elementSourate.push(sourate[i]);
                }
            }
            setSourateByPage([...elementSourate]);
        }
    }
    const handleClickPrecedent = () => {
        let elementSourate = [];

        if (currentPage > 1) {
            let lastIndex = currentPage * affichageParPage - 9;
            let startIndex = lastIndex - 9;


            for (let i = startIndex; i <= lastIndex; i++) {

                if (sourate[i] !== undefined) {
                    elementSourate.push(sourate[i]);
                }
            }
            setSourateByPage([...elementSourate]);
            setCurrentPage(currentPage - 1);
        }


    }
    useEffect(() => {
        setSourate(data.sourates);
        console.log(data)
    }, []);

    useEffect(() => {
        let elementSourate = [];
        for (let i = 0; i <= 9; i++) {
            elementSourate.push(sourate[i]);
        }
        setSourateByPage([...elementSourate]);
        return () => {
        }
    }, [sourate]);

    useEffect(() => {
        if (currentPosition > 0) {
            setCurrentSourate(sourateByPage.find(sourate => sourate.position === currentPosition))
        }
        return () => {

        }
    }, [currentPosition])
    return (
        <Container fluid style={{ minHeight: "100vh" }}>
            <Row style={{ marginLeft: "130px" }}>
                <Col xs={6} style={{ marginTop: "80px" }}>
                    <ButtonGroup>
                        <DropdownButton variant="secondary" as={ButtonGroup} title="Langues" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Français</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Arabe</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Col>
                <Col xs={6} style={{ marginTop: "80px" }}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Recherchez une Sourate"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="secondary">Recherche</Button>
                    </InputGroup>
                </Col>
            </Row>
            <hr></hr>
            <Row style={{ margin: "35px" }}>
                <Col xs={9} >
                    <Alert className="TextArabe" variant="secondary">
                        Sourate :   {currentSourate?.nom_phonetique}
                    </Alert>

                    <div style={{ maxHeight: "500px", overflow: "auto" }}>
                        {
                            currentSourate?.versets.map(verset => {
                                return <p key={verset?.position} className='textArabe'>
                                    {`${verset.position}-${verset.text}`}
                                </p>
                            })
                        }
                    </div>
                </Col>
                <Col xs={3}>
                    <Alert className="TextArabe" variant="secondary">
                        Listes des Sourates
                    </Alert>

                    {
                        sourateByPage?.map(sour => {
                            return <p key={sour?.position} className="TextArabe">

                                <a className="liste" href="#" onClick={(e) => {
                                    e.preventDefault();
                                    handleSourateClick(sour?.position)

                                }} style={{ textDecoration: 'none' }}>
                                    {` ${sour?.position}-${sour?.nom_phonetique}`}
                                </a>
                            </p>

                        })
                    }
                    <div className="row" style={{ padding: '5px' }}>
                        <div className="col-6">
                            <Button onClick={handleClickPrecedent}>Précédant</Button>
                        </div>
                        <div className='col-6' style={{ textAlign: 'right' }}>
                            <Button onClick={handleClickSuivant}>suivant</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
