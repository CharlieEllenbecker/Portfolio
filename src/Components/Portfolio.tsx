import Contact from './Contact'
import Dashboard from './Dashboard'
import NavbarHeader from './NavbarHeader'
import Projects from './Projects'
import Resources from './Resources'

import '../styles.css'

const Portfolio = () => {
  return (
    <div id="portfolio">
      <NavbarHeader />
      <Dashboard />
      <Projects />
      {/* <Resources /> */}
      <Contact />
    </div>
  )
}

export default Portfolio