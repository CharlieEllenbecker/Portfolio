import { useTranslation } from 'react-i18next'

import '../styles.css'
import NavbarHeader from './NavbarHeader'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavbarHeader />
      <div className="dashboard">
        <div className="welcome">
          <h1>
            {t('welcome')}
          </h1>
        </div>
        <div className="about">
          <h2 className="title">
            {t('about')}
          </h2>
          <p className="about-paragraph">
            {t('about_paragraph')}
          </p>
        </div>
      </div>
    </>
  )
}

export default Dashboard