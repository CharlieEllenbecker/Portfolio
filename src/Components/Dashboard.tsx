import { useTranslation } from 'react-i18next'

import '../styles.css'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <div id="dashboard">
      <div id="about">
        <h1>
          {t('welcome')}
        </h1>
        <h2 className="title">
          {t('about')}
        </h2>
        <p id="about-paragraph">
          {t('about_paragraph')}
        </p>
      </div>
    </div>
  )
}

export default Dashboard