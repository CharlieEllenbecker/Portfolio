import { useTranslation } from 'react-i18next'
import Tag from './Tag';

interface Tag {
  name: string
}

interface ProjectProps {
  titleRef: string,
  descriptionRef: string,
  link: string,
  tags: Array<Tag>
}

const Project = ({ titleRef, descriptionRef, link, tags }: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <div className="project">
      <div className="project-header">
        <div className="project-title">
          <h3>
            {t(titleRef)}
          </h3>
        </div>
        <div className="project-link">
          <a href={link} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="project-description">
        <p>
          {t(descriptionRef)}
        </p>
      </div>
      <div className="tags">
        {tags.map(t => <Tag name={t.name} />)}
      </div>
    </div>
  )
}

export default Project