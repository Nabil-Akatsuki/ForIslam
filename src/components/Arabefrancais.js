import React, { Fragment } from 'react'
import '../assets/css/index.css'

function Arabefrancais({menuType3 = "ARABE"}) {
    return (
        <Fragment>
            {
                menuType3 === "ARABE" && (
                    <Fragment>
                        <h4 style={{textAlign:"center"}}>Version Arabe -------------- Sourate :     |  Verset :     </h4>
                        
                    </Fragment>
                )
            }
            {
                menuType3 === "FRANCAIS" && (
                    <Fragment>
                        <h4 style={{textAlign:"center"}}>Version Française -------------- Sourate :     |  Verset :     </h4>
                        
                    </Fragment>
                )
            }
        </Fragment>
    )
}
export default Arabefrancais
