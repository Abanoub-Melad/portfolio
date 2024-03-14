import { Routes, Route, useLocation } from "react-router-dom"
import Layout from "./Components/Layout"
import AboutMe from "./Pages/AboutMe"
import Home from "./Pages/Home"
import Resume from "./Pages/Resume"
import Contact from "./Pages/Contact"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import { Toaster } from "react-hot-toast"
import { AnimatePresence } from "framer-motion"



function App() {
  const location = useLocation()
  return (
    <div className="App">

      <Layout />
      <AnimatePresence

        initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </AnimatePresence >
      <Toaster position="top-center"
        reverseOrder={false} />

    </div>
  )
}

export default App
