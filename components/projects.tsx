"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Dashboard Logístico: Análise de KPIs em Transporte e Entregas",
    description:
      "Dashboard completo para análise de desempenho operacional no transporte e entregas de mercadorias, usando Power BI e DAX com mais de 5.000 linhas de dados.",
    image: "/images/dashboard-logistico.png",
    tags: ["Power BI", "DAX", "Logística", "KPIs"],
    fullDescription:
      "Desenvolvi um dashboard completo para análise de desempenho operacional no transporte e entregas de mercadorias. O foco foi criar um painel robusto, interativo e com alto valor analítico, usando Power BI e DAX para simular um cenário real com mais de 5.000 linhas de dados fictícios. O dashboard inclui Big Numbers com OTIF (On Time In Full), Total de Entregas, Custo Médio por Entrega e Número de Erros nas Entregas. Também implementei gráficos estratégicos como linha do tempo de custo médio mensal, gráfico de colunas por status de entrega, indicador tipo velocímetro para Capacidade de Ocupação dos Veículos e evolução mensal das entregas. Criei métricas DAX com variações mensais para permitir análise comparativa e tomada de decisão mais inteligente. Montei também um modelo de dados normalizado com tabelas dimensão como Clientes, Transportadoras, Veículos, e Tempo, respeitando boas práticas de modelagem.",
    impact:
      "Este projeto é ideal para quem busca entender como aplicar BI no contexto logístico, especialmente para profissionais que trabalham com transporte, cadeia de suprimentos ou estão se especializando em dados.",
    demoLink: "https://lnkd.in/dPKnbDEK",
    repoLink: "https://lnkd.in/dADNhu3G",
  },
  {
    title: "Dashboard de Vendas para E-commerce",
    description:
      "Dashboard de vendas para e-commerce com modelagem e tratamento de dados no Power Query, relacionamentos no Power BI e cálculos com DAX.",
    image: "/images/dashboard-ecommerce.png",
    tags: ["Power BI", "DAX", "Power Query", "E-commerce"],
    fullDescription:
      "Desenvolvi um dashboard de vendas para e-commerce com o principal objetivo de realizar toda a modelagem e o tratamento de dados usando o próprio Power Query, definir os relacionamentos no Power BI e criar todos os cálculos com DAX. Optei por uma visualização simples e clara das métricas. O painel mostra faturamento total e variação ano a ano, ticket médio, quantidade de pedidos e taxa de conversão, top 10 categorias mais vendidas, desempenho de vendas por estado (UF), e análises mensais e sazonais com visual dinâmico. A intenção é evoluir o projeto incluindo novas páginas de acompanhamento de pedidos e entregas.",
    impact:
      "Este dashboard proporciona uma visão clara e objetiva do desempenho de vendas em e-commerce, facilitando a tomada de decisões estratégicas baseadas em dados.",
    demoLink: "https://lnkd.in/dPShnTh6",
    repoLink: "https://lnkd.in/dFhC_e7P",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma mostra dos meus projetos de análise de dados, visualização e automação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="bg-card rounded-lg overflow-hidden border shadow-sm cursor-pointer h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-[90vw] max-w-[800px] max-h-[90vh] overflow-y-auto my-4">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="mr-2 mt-2">
                          {tag}
                        </Badge>
                      ))}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="relative h-[400px] my-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Visão Geral</h4>
                      <p className="text-sm text-muted-foreground">{project.fullDescription}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Impacto</h4>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="gap-2" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Ver Projeto
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
