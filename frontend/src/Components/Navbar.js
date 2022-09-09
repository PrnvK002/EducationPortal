import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const NavbarComponent = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand> Education Portal </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
