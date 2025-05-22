import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import BackToTop from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "João Victor Lima | Portfólio de Profissional de Dados",
  description: "Portfólio mostrando habilidades de análise de dados, visualização e automação",
  keywords: "analista de dados, cientista de dados, Power BI, SQL, Python, portfólio, visualização de dados",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
    </main>
  )
}
