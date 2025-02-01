'use client'

import { useState } from 'react'
import { MapPin, PanelTop, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'

export function UserDetailsForm() {
  const [location, setLocation] = useState('')
  const [panelArea, setPanelArea] = useState(0)
  const [efficiency, setEfficiency] = useState(0)
  const [orientation, setOrientation] = useState('')
  const [tiltAngle, setTiltAngle] = useState(0)
  const [timeRange, setTimeRange] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ location, panelArea, efficiency, orientation, tiltAngle, timeRange })
  }

  return (
    <Card className="bg-[#1C1C1F]/50 border-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-300">Solar Panel Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-400">Location</Label>
            <div className="flex space-x-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger id="location" className="flex-grow bg-[#1C1C1F] border-gray-800 text-gray-300">
                  <SelectValue placeholder="Select your location" />
                </SelectTrigger>
                <SelectContent className="bg-[#1C1C1F] border-gray-800">
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="new-york">New York, USA</SelectItem>
                  <SelectItem value="london">London, UK</SelectItem>
                  <SelectItem value="tokyo">Tokyo, Japan</SelectItem>
                  <SelectItem value="sydney">Sydney, Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="panel-area" className="text-gray-400">Panel Area (m²)</Label>
            <div className="flex items-center space-x-2">
              <PanelTop className="w-5 h-5 text-gray-500" />
              <Input
                id="panel-area"
                type="number"
                value={panelArea}
                onChange={(e) => setPanelArea(Number(e.target.value))}
                min={0}
                step={0.1}
                className="bg-[#1C1C1F] border-gray-800 text-gray-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="efficiency" className="text-gray-400">Efficiency (%)</Label>
            <Slider
              id="efficiency"
              min={0}
              max={100}
              step={1}
              value={[efficiency]}
              onValueChange={(value) => setEfficiency(value[0])}
              className="bg-[#1C1C1F]"
            />
            <div className="text-right text-sm text-gray-500">{efficiency}%</div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="orientation" className="text-gray-400">Orientation</Label>
            <Select value={orientation} onValueChange={setOrientation}>
              <SelectTrigger id="orientation" className="bg-[#1C1C1F] border-gray-800 text-gray-300">
                <SelectValue placeholder="Select panel orientation" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1F] border-gray-800">
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="tilt-angle" className="text-gray-400">Tilt Angle (degrees)</Label>
            <Slider
              id="tilt-angle"
              min={0}
              max={90}
              step={1}
              value={[tiltAngle]}
              onValueChange={(value) => setTiltAngle(value[0])}
              className="bg-[#1C1C1F]"
            />
            <div className="text-right text-sm text-gray-500">{tiltAngle}°</div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time-range" className="text-gray-400">Forecast Period</Label>
            <div className="flex space-x-2">
              <Calendar className="w-5 h-5 text-gray-500" />
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger id="time-range" className="flex-grow bg-[#1C1C1F] border-gray-800 text-gray-300">
                  <SelectValue placeholder="Select forecast period" />
                </SelectTrigger>
                <SelectContent className="bg-[#1C1C1F] border-gray-800">
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">Next Week</SelectItem>
                  <SelectItem value="month">Next Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full bg-[#1C1C1F] hover:bg-[#2C2C2F] text-gray-300">
            Update Configuration
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

