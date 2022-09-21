import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { useTranslation } from 'react-i18next'

const NavbarHeader = () => {
  const { t } = useTranslation()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{t('charlie_ellenbecker')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={t('language')} id="basic-nav-dropdown" >
              <NavDropdown.Item href="en">English</NavDropdown.Item>
              <NavDropdown.Item href="ja">日本語</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader