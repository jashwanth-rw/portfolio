import { Card, CardContent } from "@/components/ui/card"
// import { ReactIcon, TypescriptIcon, JavascriptIcon, Html5Icon, CssIcon, GitIcon, NpmIcon } from "lucide-react"
import Image from "next/image"

const SkillCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <Card className="bg-gray-800 text-white">
    <CardContent className="flex items-center space-x-4 p-4">
      {icon}
      <span className="text-lg">{name}</span>
    </CardContent>
  </Card>
)

const CustomIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-8 h-8 relative">
    <Image src={src} alt={alt} layout="fill" objectFit="contain" />
  </div>
)

export default function SkillSet() {
  return (
    <div className="min-h-screen bg-gray-900 px-9 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Technologies</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Backend</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="Typescript" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="NextJS" />} name="NextJS" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Node" />} name="Node" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="PHP" />} name="PHP" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Vite" />} name="Vite" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Webpack" />} name="Webpack" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Prisma" />} name="Prisma" />
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="React" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="Typescript" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="Javascript" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Tailwind CSS" />} name="Tailwind CSS" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="Boostrap" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="SASS" />} name="SASS" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="HTML" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="CSS" />
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="VS Code" />} name="VS Code" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="Github" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Wordpress" />} name="Wordpress" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Directus" />} name="Directus" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Boostrap" />} name="NPM" />
          <SkillCard icon={<CustomIcon src="/placeholder.svg?height=32&width=32" alt="Socket.io" />} name="Socket.io" />
        </div>
      </section>
    </div>
  )
}