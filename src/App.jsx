import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Apps from './pages/Apps.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import Support from './pages/Support.jsx'
import Terms from './pages/Terms.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apps" element={<Apps />} />
          <Route path="about" element={<About />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
