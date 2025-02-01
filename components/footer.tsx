
// import { Github } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1C1C1F] border-t border-gray-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2023 SolarCast. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-300">
              Contact Us
            </Link>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Link href="https://github.com/your-repo" className="text-gray-400 hover:text-gray-300">
              {/* <Github className="h-6 w-6" /> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

