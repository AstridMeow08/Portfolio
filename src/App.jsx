import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'

import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import CaseStudies from './pages/CaseStudies/CaseStudies'
import RankSEO from './pages/CaseStudies/pages/RankSEO'
import Ecommerce from './pages/CaseStudies/pages/Ecommerce'
import Paplixo from './pages/CaseStudies/pages/Paplixo'
import PDFWorks from './pages/CaseStudies/pages/PDFWorks'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/rankseo" element={<RankSEO />} />
        <Route path="/case-studies/ecommerce" element={<Ecommerce />} />
        <Route path="/case-studies/paplixo" element={<Paplixo />} />
        <Route path="/case-studies/pdfworks" element={<PDFWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
