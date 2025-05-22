"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Linkedin, Github, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou quer discutir oportunidades de dados? Adoraria ouvir de você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <h3 className="text-2xl font-semibold">Informações de Contato</h3>
          <p className="text-muted-foreground">
            Sinta-se à vontade para entrar em contato através de qualquer um desses canais. Estou sempre aberto a
            discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:contato@joaovictorlima.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@joaovictorlima.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/joaovictorlima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/joaovictorlima
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/joaovictorlima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/joaovictorlima
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Agendar uma Chamada</h4>
                  <a
                    href="https://calendly.com/joaovictorlima"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    calendly.com/joaovictorlima
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
