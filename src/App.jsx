import { Suspense , lazy } from "react"

import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./Pages/Home"
import Layout from "./Components/Layout"
// import AboutMe from "./Pages/AboutMe"
// import Resume from "./Pages/Resume"
// import Contact from "./Pages/Contact"
// import Skills from "./Pages/Skills"
// import Projects from "./Pages/Projects"
const AboutMe = lazy(() => import("./Pages/AboutMe"))
const Resume = lazy(() => import("./Pages/Resume"))
const Skills = lazy(() => import("./Pages/Skills"))
const Projects = lazy(() => import("./Pages/Projects"))
const Contact = lazy(() => import("./Pages/Contact"))
import { Toaster } from "react-hot-toast"
import { AnimatePresence } from "framer-motion"
import Spinner from "./Components/Spinner"



function App() {
  const location = useLocation()
  return (
    <div className="App">
          <Suspense fallback={<Spinner/>}>
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

        </Suspense>
    </div>
  )
}

export default App
