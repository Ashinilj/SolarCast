"use client"

import { Moon, Sun } from 'lucide-react'
// import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
import { ContactForm } from "@/components/contact-form"
import AuthenticationCard from "@/components/AuthenticationCard";
import { Stats } from "@/components/stats"
import { WeatherForecast } from "@/components/weather-forecast"
import { UserDetailsForm } from "@/components/user-details-form"
import { DataExport } from "@/components/data-export"
import { KnowledgeSection } from "@/components/knowledge-section"
import { Objectives } from "@/components/objectives"
import { Footer } from "@/components/footer"
// import { Globe } from '@/components/ui/globe'
import Meteors from '@/components/ui/meteors'
//import Particles from '@/components/ui/particles'

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`min-h-screen bg-[#0A0A0B] ${isDark ? 'dark' : ''}`}>
      <header className="flex items-center justify-between p-4 md:p-6">
  <div className="flex flex-grow justify-start">
    <div className="bg-[#1C1C1F] bg-opacity-60 p-2 rounded-lg max-w-max mb-6">
      <Button variant="ghost" size="sm" asChild>
        <Link href="#" className="hover:text-blue-400 text-lg text-gray-400">
          Join Us
        </Link>
      </Button>
    </div>
  </div>

  <div className="flex flex-grow justify-end">
    <div className="bg-[#1C1C1F] bg-opacity-60 p-2 rounded-lg max-w-max mb-6">
      <div className="flex gap-8 text-lg text-gray-400">
        <Button variant="ghost" size="sm" asChild>
          <Link href="#" className="hover:text-blue-400 text-lg">
            Home
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link href="#" className="hover:text-blue-400 text-lg">
            About
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link href="#" className="hover:text-blue-400 text-lg">
            Contact Us
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link href="#" className="hover:text-blue-400 text-lg">
            Login
          </Link>
        </Button>
      </div>
    </div>
  </div>
</header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <section>
          <div className="text-center mb-16">
            <Meteors/>
            <div className="text-gray-500 mb-2">Introducing</div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-b from-[#8BB4F7] to-[#627EEA] text-transparent bg-clip-text">
              SolarCast
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Track, Predict, and Optimize<br />
              Your Solar Energy
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
  {/* First Card: Importance of Solar Energy */}
  <Card className="bg-[#1C1C1F]/50 border-gray-800 p-6 flex flex-col items-center text-center">
  <div className="mb-4">
    <div className="h-8 w-8 bg-[#1C1C1F] rounded-lg mb-4" />
    <h3 className="text-blue-400 font-bold mb-2">The Power of Solar Energy</h3>
    <p className="text-gray-500 text-sm mb-4">
      Solar energy is a clean, renewable source of power derived from the sun&apos;s rays. It helps reduce greenhouse gas emissions, combats climate change, and decreases dependence on fossil fuels.
    </p>
    <p className="text-gray-500 text-sm mb-4">
      Did you know? A single hour of sunlight can produce enough energy to power the entire world for a year. Embracing solar energy can revolutionize energy production and consumption.
    </p>
    <p className="text-gray-500 text-sm">
      By transitioning to solar energy, we not only save costs in the long run but also contribute to a greener and more sustainable future.
    </p>
  </div>
</Card>

  {/* Second Card: Login Form */}
    <AuthenticationCard/>
  

  {/* Third Card: Solar Energy Forecasting Tool */}
  <Card className="bg-[#1C1C1F]/50 border-gray-800 p-6 flex flex-col items-center text-center">
  <div className="mb-4">
    <div className="h-8 w-8 bg-[#1C1C1F] rounded-lg mb-4" />
    <h3 className="text-blue-400 font-bold mb-2">Forecasting Solar Energy</h3>
    <p className="text-gray-500 text-sm mb-4">
      Solar energy forecasting is crucial for optimizing energy usage and storage. It predicts solar power generation based on weather patterns and sunlight availability.
    </p>
    <p className="text-gray-500 text-sm mb-4">
      Accurate forecasting ensures efficient energy grid management, reduces energy waste, and maximizes the potential of solar panels. By analyzing data such as temperature, cloud cover, and radiation, forecasting tools can predict energy output with precision.
    </p>
    <p className="text-gray-500 text-sm">
      Unlock the full potential of solar energy with advanced forecasting tools that empower industries and households to plan energy usage effectively.
    </p>
  </div>
</Card>
</div>



        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#1C1C1F] text-gray-400 hover:text-gray-300"
            onClick={() => setIsDark(true)}
          >
            <Moon className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-[#1C1C1F] text-gray-400 hover:text-gray-300"
            onClick={() => setIsDark(false)}
          >
            <Sun className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          <Stats />
          <WeatherForecast />
          <UserDetailsForm />
          <div className="grid md:grid-cols-2 gap-8">
            <DataExport />
            <KnowledgeSection />
          </div>
          <Objectives />
            <ContactForm />
          
          <Footer />
        </div>

      </main>
    </div>
  )
}
