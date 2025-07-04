import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, TrendingUp, GraduationCap, ShoppingCart } from "lucide-react"
import { deflate } from "zlib"

const verticals = [
  {
    icon: Globe,
    title: "Virtual Exhibitions",
    description: "Always-on, immersive digital spaces for continuous global visibility",
    content:
      "Create interactive digital booths with videos, decks, and chat features. Function beyond single-day events with 2D/3D virtual environments for real-time engagement.",
    badges: ["Interactive Booths", "2D/3D Environment", "Global Reach"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Business Acceleration",
    description: "Smart matchmaking connecting startups with the right ecosystem resources",
    content:
      "Connect with mentors, investors, and partners through curated programs. From pitch clinics to cohort-based accelerators for scalable growth and strategic funding.",
    badges: ["Smart Matching", "Pitch Clinics", "Funding Access"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    description: "Actionable startup knowledge through curated learning experiences",
    content:
      "Micro-courses, expert-led webinars, and certification tracks designed for real-world relevance. Gain skills for better pitches and stronger strategies.",
    badges: ["Micro-courses", "Expert Webinars", "Certifications"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Marketplace",
    description: "Direct selling platform integrated with startup profiles and exhibitions",
    content:
      "List and sell products directly to global customers. Support secure transactions and early revenue generation while validating demand.",
    badges: ["Global Sales", "Secure Transactions", "Revenue Generation"],
    color: "from-orange-500 to-orange-600",
  },
]

const CoreVerticals = () =>  {
  return (
    <section id="verticals" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 select-none">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-2 md:mb-2 bg-gradient-to-br from-pink-500 to-purple-500 inline-block bg-clip-text text-transparent">OPEXN&apos;s 4 Core Verticals</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Comprehensive solutions designed to accelerate startup growth at every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {verticals.map((vertical, index) => {
            const IconComponent = vertical.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${vertical.color} rounded-lg flex items-center justify-center mb-3 md:mb-4`}
                  >
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{vertical.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base">{vertical.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{vertical.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {vertical.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


export default CoreVerticals
