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
                    <Navbar.Brand href="">
                        <Image
                            src="https://api.nuget.org/v3-flatcontainer/multiple.languages.translate.text.api/1.0.0/icon"
                            width="35"
                            height="35"

                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="/" className='fs-3 fw-bolder'>Speakizy Academy</Navbar.Brand>

                    <Nav className="me-auto">
                        <Link to={'/'} className='text-dark fw-bolder mt-2 ms-3' style={{ textDecoration: 'none' }}>Home</Link>
                        <Link to={'/courses'} className='text-dark fw-bolder mt-2 ms-3' style={{ textDecoration: 'none' }}>Courses</Link>
                        <Link to={'/FAQ'} className='text-dark fw-bolder mt-2 ms-3' style={{ textDecoration: 'none' }}>FAQ</Link>
                        <Link to={'/blog'} className='text-dark fw-bolder mt-2 ms-3' style={{ textDecoration: 'none' }}>Blog</Link>

                        <p className="form-check form-switch form-check-reverse mt-2 ms-3">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckReverse"> Light / Dark</label>
                        </p>

                    </Nav>
                    <Nav className='d-flex flex-row justify-content-start'>

                        {
                            user?.uid ?
                                <>
                                    <span>{user?.displayName}</span>
                                    <Button variant="info" onClick={handleLogOut}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link to={'/login'} className='me-2 p-2 py-2 px-4 rounded-3 bg-primary text-white fw-bold' style={{ textDecoration: 'none' }}>Login</Link>
                                    <Link to={'/register'} className='me-2 p-2 py-2 px-4 rounded-3 bg-primary text-white fw-bold' style={{ textDecoration: 'none' }}>Register</Link>
                                </>
                        }


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