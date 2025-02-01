import { Book, Calculator, Sun } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const knowledgeItems = [
  {
    icon: Sun,
    title: 'Solar Energy Basics',
    description: 'Learn about the fundamentals of solar energy and how it works.',
    content: 'Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar power to generate electricity, solar thermal energy (including solar water heating), and solar architecture. It is an essential source of renewable energy.',
  },
  {
    icon: Calculator,
    title: 'Forecasting Algorithms',
    description: 'Understand the algorithms used in solar energy forecasting.',
    content: 'Solar forecasting algorithms use a combination of weather data, historical solar production data, and machine learning techniques to predict future solar energy output. These algorithms consider factors such as cloud cover, temperature, and solar panel characteristics to make accurate predictions.',
  },
  {
    icon: Book,
    title: 'Best Practices',
    description: 'Discover best practices for maximizing solar energy production.',
    content: 'To maximize solar energy production: 1) Ensure proper panel orientation and tilt angle, 2) Keep panels clean and free from shade, 3) Regularly maintain and inspect your system, 4) Use high-efficiency panels and inverters, 5) Consider adding a solar tracking system for optimal sun exposure throughout the day.',
  },
]

export function KnowledgeSection() {
  return (
    <Card className="bg-[#1C1C1F]/50 border-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-300">Solar Energy Knowledge Base</CardTitle>
        <CardDescription className="text-gray-500">Learn more about solar energy, forecasting, and best practices</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {knowledgeItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
              <AccordionTrigger className="text-gray-300 hover:text-gray-100">
                <div className="flex items-center">
                  <item.icon className="mr-2 h-5 w-5 text-blue-400" />
                  <div className="text-left">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                <p className="text-sm">{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

