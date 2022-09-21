import Container from 'react-bootstrap/Container'
import { useTranslation } from "react-i18next"

import '../styles.css'
import HistoryItem from './HistoryItem'

const History = () => {
  const { t } = useTranslation()

  return (
    <Container className="history">
      <h2>
        {t('history')}
      </h2>
      <div className="history-items">
        <HistoryItem />
      </div>
    </Container>
  )
}

export default History
