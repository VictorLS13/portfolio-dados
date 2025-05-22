"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "An exceptional data analyst who transformed our reporting capabilities. The dashboards created have become essential tools for our executive team.",
    name: "Sarah Johnson",
    title: "VP of Operations, Tech Solutions Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Incredible attention to detail and ability to translate complex data into actionable insights. The forecasting model developed has significantly improved our planning process.",
    name: "Michael Chen",
    title: "Director of Finance, Global Enterprises",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "A true professional who consistently delivers high-quality work. The automated reporting system has saved our team countless hours and improved data accuracy.",
    name: "Emily Rodriguez",
    title: "Marketing Manager, Innovative Co.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
          className="space-y-4 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What colleagues and clients say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
