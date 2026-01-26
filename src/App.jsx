import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/accueil.jsx"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "react-hot-toast"
import LegalNoticePage from "./pages/mentions-legales"
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {

  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/mentions-legales" element={<LegalNoticePage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <SpeedInsights/>
    </>
  )
}

export default App
