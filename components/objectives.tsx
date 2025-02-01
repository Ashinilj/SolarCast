import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export function Objectives() {
  const objectives = [
    "Simplify user authentication process",
    "Enhance security measures",
    "Improve user experience",
    "Integrate with various identity providers",
  ]

  const outcomes = [
    "Reduced sign-up and login friction",
    "Increased conversion rates",
    "Better user data protection",
    "Seamless third-party integrations",
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {/* First Card: Objectives */}
      <Card className="bg-[#1C1C1F]/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-300">Objectives</CardTitle>
          <CardDescription className="text-gray-500">Key goals of the AuthKit project</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <CheckCircle className="h-5 w-5 mr-2 text-blue-400" />
                {objective}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Second Card: Targeted Outcomes */}
      <Card className="bg-[#1C1C1F]/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-300">Targeted Outcomes</CardTitle>
          <CardDescription className="text-gray-500">Expected results from implementing AuthKit</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-center text-gray-400">
                <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                {outcome}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
