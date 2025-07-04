import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, CheckCircle, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FeaturedEvents = () => {
  return (
    <section id="events" className="py-10 md:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 select-none">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-8xl font-bold mb-1 md:mb-2 text-transparent bg-gradient-to-br from-pink-600 to-purple-600 bg-clip-text inline-block md:pb-2">Upcoming  Events</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Join our specialized programs designed to connect professionals with global opportunities across multiple
            sectors
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* EdTech Round Table */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden lg:col-span-2">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <Image
                  src="/edtech-roundtable.png"
                  alt="EdTech Round Table Chandigarh - Tech-Empowered Teaching"
                 fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 overflow-hidden"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                  <Badge className="mb-2 md:mb-3 bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">EdTech</Badge>
                  <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Tech-Empowered Teaching</h3>
                  <p className="text-sm md:text-lg opacity-90">EdTech Round Table</p>
                </div>
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-semibold text-sm md:text-base">29th August, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-600">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="font-medium text-sm md:text-base">Chandigarh</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-lg">
                  Uniting educators, innovators & leaders to shape NEP-driven, tech-enabled learning for Chandigarh's
                  future.
                </p>
                <div className="mb-4 md:mb-6">
                  <h4 className="font-semibold mb-3 text-gray-800 text-sm md:text-base">Discussion Areas:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600">Tech & SaaS Impact on Education</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600">NEP's Impact on Academia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600">10:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </div>
               <Link href={"https://forms.gle/5UkuGAraqBormcq67"}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-lg py-2 md:py-3">
                  Register for Round Table
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
               </Link>
              </CardContent>
            </div>
          </Card>

          {/* Dubai Agri Export Event */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src="/dubai-agri-export.png"
                alt="Gateway to Dubai - Agri Export Round Table"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                <Badge className="mb-2 md:mb-3 bg-green-600 hover:bg-green-700 text-xs md:text-sm">Agri Export</Badge>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Gateway to Dubai</h3>
                <p className="text-sm md:text-lg opacity-90">Agri Export Round Table</p>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2">
                <div className="flex items-center space-x-2 text-green-600">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-semibold text-sm md:text-base">28th July, 2025*</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">New Delhi, India</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-lg">
                Connect with UAE trade officials, institutional buyers, and agri-tech ecosystem for export opportunities
                to Dubai markets.
              </p>
              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold mb-3 text-gray-800 text-sm md:text-base">Key Components:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600">Export Stakeholder Dialogue</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600">UAE Expert Insights & Roadmap</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600">Market and Policy Access</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-sm md:text-lg py-2 md:py-3">
                Register for Round Table
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Women Entrepreneurs Training */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src="/women-training-program.png"
                alt="Women Entrepreneurs Training Program - From Local to Global"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                <Badge className="mb-2 md:mb-3 bg-orange-600 hover:bg-orange-700 text-xs md:text-sm">
                  Women Empowerment
                </Badge>
                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">From Local to Global</h3>
                <p className="text-sm md:text-lg opacity-90">3 Day Training Program</p>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 md:mb-6 gap-2">
                <div className="flex items-center space-x-2 text-orange-600">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-semibold text-sm md:text-base">12-14th August, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">3 Days</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-lg">
                Empowering women entrepreneurs & SHGs in gifts & handicrafts business for global markets.
              </p>
              <div className="mb-4 md:mb-6">
                <h4 className="font-semibold mb-3 text-gray-800 text-sm md:text-base">Focus Areas:</h4>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600">Product Quality & Market Readiness</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600">E-Commerce & Digital Selling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-gray-600">Export Preparedness</span>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-sm md:text-lg py-2 md:py-3">
                Register for Training
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


export default FeaturedEvents
