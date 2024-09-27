import "../css/navbar.css";

// export default function Navbar() {
//     return (
//         <div className="navbar">
//             <div className="left">
//                 <a className="home" href="/">
//                     <img src="/static/logos/favicon.webp"></img>
//                     <p>WHS Comp Sci Club</p>
//                 </a>
//                 <a href="/leaderboard">Leaderboard</a>
//                 <a href="/events">Events</a>
//                 <a href="/board">Board</a>
//             </div>

//             <div className="right">
//                 <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i> Instagram</a>
//                 <a href="https://discord.gg/g6HMBn9GZD" target="_blank"><i className="fa-brands fa-discord"></i> Discord</a>
//             </div>
//         </div>
//     )
// }

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                <img src="/static/logos/favicon.webp" width="30" height="30"></img>
                WHS Comp Sci Club</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/board">Board</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>

                    <Nav.Link href="https://discord.gg/g6HMBn9GZD" target="_blank" className="rightitem"><i className="fa-brands fa-discord"></i> Discord</Nav.Link>
                    <Nav.Link href="https://www.instagram.com/westhighcsc" target="_blank" className="rightitem"><i className="fa-brands fa-instagram"></i> Instagram</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}