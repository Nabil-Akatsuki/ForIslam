import React, { Fragment } from 'react'
import '../assets/css/index.css'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function BarreLaterale({ menuType = "ARTICLES" }) {
    return (
        <Fragment>
            {
                menuType === "ARTICLES" && (<Fragment>
                    <h4>Articles</h4>
                    <NavLink className="side-link" to="#region">Ramadan</NavLink>
                    <NavLink className="side-link" to="#region">Tabaski</NavLink>
                    <NavLink className="side-link" to="#region">Achoura</NavLink>
                    <NavLink className="side-link" to="#region">Zakat</NavLink>
                    <NavLink className="side-link" to="#region">Histoires</NavLink>
                    <NavLink className="side-link" to="#region">Autres</NavLink>
                    <hr></hr>
                    <NavLink className="side-link" to="#region">Groupe de Discussion</NavLink>
                    <NavLink className="side-link" to="#region">Messages</NavLink>
                    <NavLink className="side-link" to="#region">Nous contacter</NavLink>
                </Fragment>)
            }

            {
                menuType === "CORAN" && (<Fragment>
                    <h4>Coran</h4>
                    <NavLink className="side-link" as={Link} to="/interfacecoran/listeArabe">Coran en Arabe</NavLink>
                    <NavLink className="side-link" as={Link} to="/interfacecoran/listeFrancais">Coran en français</NavLink>
                    <hr></hr>
                    <NavLink className="side-link" to="#region">Groupe de Discussion</NavLink>
                    <NavLink className="side-link" to="#region">Messages</NavLink>
                    <NavLink className="side-link" to="#region">Nous contacter</NavLink>
                </Fragment>)
            }
        </Fragment>
    )
}

export default BarreLaterale
