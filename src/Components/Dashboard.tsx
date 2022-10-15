import { useTranslation } from 'react-i18next'

import '../styles.css'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <div id="dashboard">
      <div id="dashboard-about">
        <h1>
          {t('charlie-ellenbecker')} {/* TODO: fix the naming conventions between the css files, the sections of portfolio page, and the translation files */}
        </h1>
        <h2 className="title">
          {t('about-title')}
        </h2>
        <p id="dashboard-about-paragraph">
          {t('about-paragraph')}
        </p>
      </div>
    </div>
  )
}

export default Dashboard