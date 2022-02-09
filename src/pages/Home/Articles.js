import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import BarreLaterale from '../../components/BarreLaterale'
import BarreLateraleDroite from '../../components/BarreLateraleDroite'

function Articles() {
    return (
        <Container fluid style={{ 
            minHeight: "100vh",
        backgroundColor:"#14283D",
        borderRadius:"5px"}}>
            <Row>
                <Col xs={2} style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginTop: "6%",
                    backgroundColor:"#14283D"
                }}>
                    <BarreLaterale menuType="ARTICLES"/>
                </Col>
                <Col xs={8}></Col>
                <Col xs={2}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginTop: "7%",
                        backgroundColor: "#14283D",
                        borderRadius: "5px"
                    }}>
                        <BarreLateraleDroite  menuType2="DIVERS"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Articles
