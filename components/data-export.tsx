'use client'

import { useState } from 'react'
import { FileDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function DataExport() {
  const [exportFormat, setExportFormat] = useState('')
  const [dateRange, setDateRange] = useState('')

  const handleExport = () => {
    console.log(`Exporting ${dateRange} data in ${exportFormat} format`)
  }

  return (
    <Card className="bg-[#1C1C1F]/50 border-gray-800">
      <CardHeader>
        <CardTitle className="text-gray-300">Export Data</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="export-format" className="text-sm font-medium text-gray-400">Export Format</label>
            <Select value={exportFormat} onValueChange={setExportFormat}>
              <SelectTrigger id="export-format" className="bg-[#1C1C1F] border-gray-800 text-gray-300">
                <SelectValue placeholder="Select export format" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1F] border-gray-800">
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label htmlFor="date-range" className="text-sm font-medium text-gray-400">Date Range</label>
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger id="date-range" className="bg-[#1C1C1F] border-gray-800 text-gray-300">
                <SelectValue placeholder="Select date range" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C1C1F] border-gray-800">
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
                <SelectItem value="all-time">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleExport} className="w-full bg-[#1C1C1F] hover:bg-[#2C2C2F] text-gray-300">
            <FileDown className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

