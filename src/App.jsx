import { useRef } from 'react'
import { Button } from './components/ui/Button'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { MethodSection } from './components/sections/MethodSection'
import { TrainingSection } from './components/sections/TrainingSection'
import { SpaceSection } from './components/sections/SpaceSection'
import { CoachesSection } from './components/sections/CoachesSection'
import { PlansSection } from './components/sections/PlansSection'
import { FinalCtaSection } from './components/sections/FinalCtaSection'
import { siteConfig } from './data/siteConfig'
import { createThemeStyles } from './utils/themeStyles'
import { useEditorialMotion } from './hooks/useEditorialMotion'
import './styles/editorial-motion.css'

function App() {
  const main = useRef(null)
  useEditorialMotion(main)
  const demoDialog = useRef(null)
  const returnFocus = useRef(null)
  const { demo } = siteConfig

  function showDemo(trigger) {
    returnFocus.current = trigger
    demoDialog.current.showModal()
  }

  return (
    <div
      className="site-shell min-h-screen bg-[var(--theme-background)] text-[var(--theme-text)]"
      style={createThemeStyles(siteConfig.theme)}
    >
      <a className="skip-link" href="#main-content">
        Ir al contenido
      </a>

      <Navbar onSession={showDemo} />

      <main ref={main} id="main-content" tabIndex="-1">
        <HeroSection onSession={showDemo} />
        <MethodSection />
        <TrainingSection />
        <SpaceSection />
        <CoachesSection />
        <PlansSection onSession={showDemo} />
        <FinalCtaSection onSession={showDemo} />
      </main>

      <Footer />
      <dialog className="demo-dialog" ref={demoDialog} aria-labelledby="demo-title"
        aria-describedby="demo-message" onClose={() => returnFocus.current?.focus()}>
        <h2 id="demo-title">{demo.title}</h2>
        <p id="demo-message">{demo.message}</p>
        <form method="dialog"><Button type="submit">{demo.closeLabel}</Button></form>
      </dialog>
    </div>
  )
}

export default App
