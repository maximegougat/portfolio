import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/accueil"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "react-hot-toast"
import LegalNoticePage from "./pages/mentions-legales"
function App() {
  return (
    <>
    <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/mentions-legales" element={<LegalNoticePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
