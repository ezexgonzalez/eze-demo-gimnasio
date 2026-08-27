import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { siteConfig } from './data/siteConfig'
import { createThemeStyles } from './utils/themeStyles'

function App() {
  return (
    <div
      className="site-shell min-h-screen bg-[var(--theme-background)] text-[var(--theme-text)]"
      style={createThemeStyles(siteConfig.theme)}
    >
      <a className="skip-link" href="#main-content">
        Ir al contenido
      </a>

      <Navbar />

      <main id="main-content" tabIndex="-1">
        <HeroSection />
      </main>
    </div>
  )
}

export default App
