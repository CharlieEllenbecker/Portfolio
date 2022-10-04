import { useTranslation } from "react-i18next"

import '../styles.css'
import Project from './Project'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <div className="projects">
      <h2 className="title">
        {t('projects')}
      </h2>
      <div>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default Projects
