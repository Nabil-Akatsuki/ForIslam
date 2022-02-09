import React from 'react'
import { Container} from 'react-bootstrap'

function Piedpage() {
    return (
        <div>
            <Container fluid style={{backgroundColor:"#14283D"}}>
                <footer style={{color:"cornflowerblue"}}>
                    <div className="footer-copyright text-center py-3">
                        <Container>
                            &copy; {new Date().getFullYear()} Copyright: <a href="#"> IslamVoice </a>
                        </Container>
                    </div>
                </footer>
            </Container>
        </div>
    )
}

export default Piedpage
