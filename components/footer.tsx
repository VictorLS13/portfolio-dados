import Link from "next/link"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-xl font-bold tracking-tight">
              João Victor <span className="text-primary">Lima</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">Transformando dados em decisões.</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contato@joaovictorlima.com"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/joaovictorlima"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/joaovictorlima"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/joaovictorlima"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} João Victor Lima. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
