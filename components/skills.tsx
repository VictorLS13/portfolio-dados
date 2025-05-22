"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Database, BarChart3, Code2, Workflow, Zap, Table, Clock } from "lucide-react"

const skills = [
  {
    name: "Power BI",
    icon: BarChart3,
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    name: "SQL Server",
    icon: Database,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    name: "Python",
    icon: Code2,
    color: "bg-green-500/10 text-green-500",
  },
  {
    name: "Power Apps",
    icon: Zap,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    name: "Power Automate",
    icon: Workflow,
    color: "bg-sky-500/10 text-sky-500",
  },
  {
    name: "Excel",
    icon: Table,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    name: "Tableau",
    icon: BarChart3,
    color: "bg-pink-500/10 text-pink-500",
  },
  {
    name: "Apache Airflow",
    icon: Clock,
    color: "bg-indigo-500/10 text-indigo-500",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">Habilidades & Ferramentas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As tecnologias e ferramentas que uso para dar vida aos dados
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-10">
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 px-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 w-28 md:w-32"
              >
                <div className={`p-4 rounded-xl ${skill.color}`}>
                  <skill.icon className="h-8 w-8" />
                </div>
                <span className="font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
