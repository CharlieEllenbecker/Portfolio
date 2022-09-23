import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Path } from 'react-router-dom'
import i18next from 'i18next'

import { useTranslation } from 'react-i18next'

const NavbarHeader = () => {
  const { t } = useTranslation()

  const lang = i18next.language

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={`/${lang}`}>{t('charlie_ellenbecker')}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href={`/${lang}/projects`}>{t('projects')}</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <NavDropdown title={t('language')} id="basic-nav-dropdown">
            <NavDropdown.Item href="en">English</NavDropdown.Item>
            <NavDropdown.Item href="ja">日本語</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarHeader