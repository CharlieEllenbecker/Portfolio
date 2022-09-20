import Container from 'react-bootstrap/Container'
import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <h2>
        {t('about')}
      </h2>
    </Container>
  )
}

export default About
