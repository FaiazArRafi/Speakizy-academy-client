import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FaUser } from "react-icons/fa";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            src="https://api.nuget.org/v3-flatcontainer/multiple.languages.translate.text.api/1.0.0/icon"
                            width="35"
                            height="35"

                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/" className='fs-3'>Speakizy Academy</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link><Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={'/courses'} style={{ textDecoration: 'none' }}>Courses</Link></Nav.Link>
                        <Nav.Link><Link to={'/FAQ'} style={{ textDecoration: 'none' }}>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to={'/blog'} style={{ textDecoration: 'none' }}>Blog</Link></Nav.Link>

                        <div className="form-check form-switch form-check-reverse mt-2 ms-2">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckReverse"> Light / Dark</label>
                        </div>

                    </Nav>
                    <Nav className='d-flex flex-row justify-content-start'>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="info" onClick={handleLogOut}>Log Out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to={'/login'} className='me-2 p-2 b' style={{ textDecoration: 'none' }}>Login</Link>
                                        <Link to={'/register'} style={{ textDecoration: 'none' }}>Register</Link>
                                    </>
                            }
                        </Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;