import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Cloud, Sun, CloudRain } from 'lucide-react'

const forecast = [
  { day: 'Mon', temp: 28, icon: Sun },
  { day: 'Tue', temp: 27, icon: Cloud },
  { day: 'Wed', temp: 25, icon: CloudRain },
  { day: 'Thu', temp: 26, icon: Sun },
  { day: 'Fri', temp: 29, icon: Sun },
]

export function WeatherForecast() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between">
          {forecast.map((day) => (
            <div key={day.day} className="text-center">
              <day.icon className="mx-auto h-6 w-6 text-muted-foreground" />
              <div className="mt-1 text-sm font-medium">{day.day}</div>
              <div className="text-sm text-muted-foreground">{day.temp}°C</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

