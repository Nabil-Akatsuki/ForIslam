
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import BarreLaterale from '../../components/BarreLaterale'
import BarreLateraleDroite from '../../components/BarreLateraleDroite'
import ListeArabe from './ListeArabe'
import ListeFrancais from './ListeFrancais'

function InterfaceCoran() {
    return (
        <Container fluid style={{
            minHeight: "100vh",
            backgroundColor: "#14283D"
        }}>
            <Row>
                <Col xs={2}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginTop: "7%",
                        backgroundColor: "#14283D",
                        borderRadius: "5px"
                    }}>
                    <BarreLaterale menuType="CORAN" />
                </Col>
                <Col xs={8}>
                    <Routes>
                        <Route path="/listeArabe" element={<ListeArabe />} />
                        <Route path="/listeFrancais" element={<ListeFrancais   />} />
                    </Routes>
                </Col>
                <Col xs={2}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "#14283D",
                        borderRadius: "5px",
                        marginTop: "100px"
                    }}>
                    <BarreLateraleDroite menuType2="CORAN1" />
                </Col>
            </Row>
        </Container>
    )
}

export default InterfaceCoran
