import { useTranslation } from "react-i18next"

import projects from '../assets/projects.json'
import '../styles.css'
import Project from './Project'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <div id="project-section">
      <h2 className="title">
        {t('projects')}
      </h2>
      <div id="projects">
        {projects.map(p => <Project titleRef={p.titleRef} descriptionRef={p.descriptionRef} link={p.link} tags={p.tags} />)}
      </div>
    </div>
  )
}

export default Projects
