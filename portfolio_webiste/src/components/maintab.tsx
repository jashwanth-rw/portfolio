import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Jashwanth <span className="text-emerald-400">Peddisetty</span>,
            </h1>
            <h2 className="text-3xl font-light mb-4">full-stack developer</h2>
            <p className="text-gray-400 max-w-xl">
              Als full-stack Javascript developer bouw ik moderne web-apps met tools als{' '}
              <span className="text-emerald-400">React.js, Next.js & Tailwind CSS</span>.
            </p>
          </div>
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Amir Akbulut avatar"
            width={150}
            height={150}
            className="rounded-full"
          />
        </header>

        <main>
          <h3 className="text-xl font-light mb-6 uppercase">Pagination</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog" passHref>
              <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>Blog</CardTitle>
                  <CardDescription className="text-gray-400">
                    Lees wat ik met de wereld deel
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/portfolio" passHref>
              <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>Portfolio</CardTitle>
                  <CardDescription className="text-gray-400">
                    Projecten, ervaringen & kennis
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/spotify" passHref>
              <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>Spotify playlist</CardTitle>
                  <CardDescription className="text-gray-400">
                    Mijn brandstof om te werken
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/contact" passHref>
              <Card className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle>Lets talk</CardTitle>
                  <CardDescription className="text-gray-400">
                    Open voor uitdagingen!
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}