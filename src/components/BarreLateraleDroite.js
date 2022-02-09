import React, { Fragment}from 'react'
import { NavLink } from 'react-bootstrap'
import '../assets/css/index.css'
import {Link} from 'react-router-dom';
function BarreLateraleDroite({menuType2 = "DIVERS"}) {
    return (
        <Fragment>
            {
                menuType2 === "DIVERS" && (<Fragment>
                    <h4 className="Titre">Divers</h4>
                    <NavLink className="side-link1" to="#region">Horaire de prière</NavLink>
                    <NavLink className="side-link1" to="#region">Calendrier musulman</NavLink>
                    <NavLink className="side-link1" to="#region">Pélérinage</NavLink>
                    <NavLink className="side-link1" to="#region">Sermon du vendredi</NavLink>
                </Fragment>)
            }

            {
                menuType2 === "CORAN1" && (<Fragment>
                    <input className="search" type="search" placeholder="Recherche"></input>
                    <NavLink className="side-link1" to="#region">Sourates</NavLink>
                    <NavLink className="side-link1" to="#region">Versets</NavLink>
                    <NavLink className="side-link1" to="#region">Douhas</NavLink>
                </Fragment>)
            }
        </Fragment>
    )
}

export default BarreLateraleDroite
