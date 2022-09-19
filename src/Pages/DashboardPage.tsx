import { useTranslation } from 'react-i18next'

const DashboardPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h2>
        {t('welcome')}
      </h2>
    </div>
  )
}

export default DashboardPage