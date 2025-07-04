import { Eye, Target } from "lucide-react"

const VisionMission = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white select-none">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Eye className="w-6 h-6 md:w-8 md:h-8 mr-3" />
              <h3 className="text-xl md:text-2xl font-bold ">Vision</h3>
            </div>
            <p className="text-base md:text-lg opacity-90 ">
              To be the bridge between innovation and opportunity by connecting emerging ventures with infinite
              possibilities across markets, mentorship, and capital.
            </p>
          </div>
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Target className="w-6 h-6 md:w-8 md:h-8 mr-3" />
              <h3 className="text-xl md:text-2xl font-bold select-none">Mission</h3>
            </div>
            <p className="text-base md:text-lg opacity-90 ">
              To build a global, hybrid ecosystem that supports and scales startups through digital exhibitions, access
              to capital, mentorship, and strategic collaborations — all under one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default VisionMission
