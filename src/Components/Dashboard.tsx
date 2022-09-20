import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <h2>
        {t('welcome')}
      </h2>
    </Container>
  )
}

export default Dashboard