import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold mb-2 md:mb-2 bg-gradient-to-br from-pink-600 to-purple-600 bg-clip-text inline-block text-transparent select-none">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 select-none">Ready to be part of the OPEXN ecosystem?</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-center">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 select-none">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Phone</h3>
                <p className="text-gray-600 text-sm md:text-base">+91 84390 56300</p>
                <p className="text-gray-600 text-sm md:text-base">+91 70785 83771</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow select-none">
              <CardContent className="pt-6">
                <Mail className="w-6 h-6 md:w-8 md:h-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Email</h3>
                <p className="text-gray-600 text-sm md:text-base">info.opexn@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


export default ContactSection
