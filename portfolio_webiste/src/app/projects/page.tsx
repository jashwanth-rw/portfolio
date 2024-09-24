import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Bio Bandits",
    description: "Een creatieve website voor heerlijke organische sauzen",
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Dutch Cycling Embassy",
    description: "Een nieuwe website voor een netwerk aan experts in duurzame transport",
    image: "/placeholder.svg?height=400&width=600"
  }
]

const cases = [
  {
    title: "Uitvaart24",
    description: "Gecentraliseerde data middels API's & zelfhulp tool voor klanten",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Purify Massages",
    description: "Website & Reserveersysteem voor schoonheidsspecialiste Silva Nasri",
    image: "/placeholder.svg?height=300&width=400"
  },
  {
    title: "Jasper de Ruiter",
    description: "Nieuwe lancering van Jasper de Ruiter met 3000+ wildlife illustraties",
    image: "/placeholder.svg?height=300&width=400"
  }
]

export default function PortfolioSection() {
  return (
    <section className="bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">CASES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <Card key={index} className="bg-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-2">{caseItem.title}</h3>
                <p className="text-gray-400 text-sm">{caseItem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}