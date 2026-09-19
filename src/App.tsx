import { BuildingNow } from './components/BuildingNow'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Honors } from './components/Honors'
import { Leadership } from './components/Leadership'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Stats } from './components/Stats'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <BuildingNow />
        <Honors />
        <Leadership />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
