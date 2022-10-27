import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Speakizy Academy</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link><Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={'/courses'} style={{ textDecoration: 'none' }}>Courses</Link></Nav.Link>
                        <Nav.Link><Link to={'/FAQ'} style={{ textDecoration: 'none' }}>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to={'/blog'} style={{ textDecoration: 'none' }}>Blog</Link></Nav.Link>

                        <div className="form-check form-switch form-check-reverse mt-2 ms-2">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" />
                            <label className="form-check-label" for="flexSwitchCheckReverse"> Light / Dark</label>
                        </div>

                    </Nav>
                    <Nav className='d-flex flex-row justify-content-start'>
                        <Nav.Link>
                            <>
                                <Button to={'/login'} className='me-2'>Login</Button>
                                <Button to={'/register'}>Sign Up</Button>
                            </>
                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;