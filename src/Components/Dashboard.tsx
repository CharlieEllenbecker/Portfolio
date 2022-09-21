import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'

import '../styles.css'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <Container className="welcome">
      <h2>
        {t('welcome')}
      </h2>
    </Container>
  )
}

export default Dashboard