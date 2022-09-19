import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h2>
        {t('welcome')}
      </h2>
    </div>
  )
}

export default Dashboard