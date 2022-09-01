import { useTranslation } from "react-i18next"

const About = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h2>
        {t('about')}
      </h2>
    </div>
  )
}

export default About
