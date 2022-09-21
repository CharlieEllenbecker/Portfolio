import Container from 'react-bootstrap/Container'
import { useTranslation } from "react-i18next"

import '../styles.css'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <Container className="projects">
      <h2>
        {t('projects')}
      </h2>
    </Container>
  )
}

export default Projects
