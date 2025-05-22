"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Download, Calendar, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Analista de Dados Pleno",
    company: "J&T Express Brasil",
    period: "Julho 2024 - Atual",
    description:
      "Desenvolvimento de dashboards logísticos, implementação de automações com Python, construção de pipelines de dados, orquestração com Apache Airflow, modelagem de dados em camadas e análises exploratórias para apoiar a tomada de decisões estratégicas.",
  },
  {
    title: "Analista de Dados Júnior",
    company: "J&T Express Brasil",
    period: "Fevereiro 2023 - Junho 2024",
    description:
      "Estruturação de processos de extração e ingestão de dados com Python, colaboração com equipes de logística para redução de falhas de entrega e desenvolvimento de painéis interativos no Power BI para monitoramento de processos logísticos.",
  },
  {
    title: "Analista de Controladoria",
    company: "Alter Benefícios",
    period: "Março 2022 - Fevereiro 2023",
    description:
      "Elaboração de indicadores financeiros, apuração de comissionamentos, desenvolvimento de dashboards financeiros em Power BI e Excel, automação de processos com VBA e tratamento de dados com técnicas de ETL.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um profissional de dados apaixonado com expertise em transformar dados complexos em insights acionáveis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Minha Jornada</h3>
            <p className="text-muted-foreground">
              Analista de Dados com mais de 3 anos de experiência em Business Intelligence, automação de processos e
              engenharia de dados. Possuo expertise na criação de soluções analíticas que transformam dados brutos em
              insights estratégicos, desenvolvendo dashboards interativos no Power BI que otimizaram indicadores
              logísticos e financeiros em até 15%. Implementei arquiteturas de dados escaláveis e criei pipelines
              eficientes com Python, SQL e Apache Airflow, automatizando fluxos críticos que reduziram o tempo de
              processamento em até 70% e eliminaram tarefas manuais repetitivas.
            </p>
            <Button className="rounded-full" asChild>
              <a href="/imagens/Currículo_João_Victor_Lima.pdf" download="Currículo_João_Victor_Lima.pdf">
                <Download className="mr-2 h-4 w-4" /> Baixar Currículo
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Experiência</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 bg-primary/10 p-2 rounded-full">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold">{exp.title}</h4>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <span>{exp.company}</span>
                            <span className="mx-2">•</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <p className="text-sm mt-2">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
