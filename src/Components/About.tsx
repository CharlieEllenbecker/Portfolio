import Container from 'react-bootstrap/Container'
import { useTranslation } from "react-i18next"

import '../styles.css'

const About = () => {
  const { t } = useTranslation()

  return (
    <Container className="about">
      <h2 className="title">
        {t('about')}
      </h2>
      <p className="about-paragraph">
        This is all about me.
        Where I am from, where I went to school, and what I like to do in my free time.
        What I like about being a software engineer. What I want to learn.
        Maybe a little bit about learning Japanese.
      </p>
    </Container>
  )
}

export default About
