import { useEffect } from "react"
import Header from "./Sections/Header"
import Hero from "./Sections/Hero"

export default function App() {
  return(
    <>
      <header className="main-bg">
        <Header/>
      </header>
      <main className="max-container">
        <Hero/>
      </main>
    </>
  )
}

