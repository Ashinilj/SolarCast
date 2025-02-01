import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react'

const stats = [
  {
    title: 'Total Users',
    value: '10,483',
    change: '+12.3%',
    icon: Users,
  },
  {
    title: 'Active Sessions',
    value: '2,345',
    change: '+5.7%',
    icon: Zap,
  },
  {
    title: 'Auth Requests',
    value: '45,672',
    change: '+8.2%',
    icon: ShieldCheck,
  },
  {
    title: 'API Calls',
    value: '1.2M',
    change: '+14.5%',
    icon: ArrowUpRight,
  },
]

export function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">{stat.change}</span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

