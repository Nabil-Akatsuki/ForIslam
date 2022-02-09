import React from 'react'
import '../../assets/css/index.css'
import Arabefrancais from '../../components/Arabefrancais'

function ListeFrancais({ menuType3 = "ARABE" }) {
    return (

        <div>
            <div style={{ marginTop: "100px" }}>
                <Arabefrancais menuType3="FRANCAIS" />
            </div>
            
        </div>
    )
}

export default ListeFrancais
