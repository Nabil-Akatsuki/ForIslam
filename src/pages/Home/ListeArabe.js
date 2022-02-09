import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/css/index.css'
import Arabefrancais from '../../components/Arabefrancais'



function ListeArabe() {
    return (
        <div>
            <div style={{ marginTop: "100px" }}>
                <Arabefrancais menuType3="ARABE" />
            </div>
            
        </div>
    )
}

export default ListeArabe
