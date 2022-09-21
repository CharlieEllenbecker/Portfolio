import Container from 'react-bootstrap/Container'
import { useTranslation } from "react-i18next"

import '../styles.css'

const About = () => {
  const { t } = useTranslation()

  return (
    <Container className="about">
      <h2>
        {t('about')}
      </h2>
    </Container>
  )
}

export default About
