import Footer from './Footer'
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
      <Footer />
    </div>
  )
}

export default Portfolio