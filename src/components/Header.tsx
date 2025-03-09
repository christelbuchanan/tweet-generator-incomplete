import React from 'react'
import { Bitcoin } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-white p-2 rounded-full shadow-md">
              <Bitcoin size={28} className="text-yellow-500" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold">CZ Tweet Generator</h1>
              <p className="text-yellow-100 text-sm">Powered by AI</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://twitter.com/cz_binance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition"
            >
              @cz_binance
            </a>
            <a 
              href="#"
              className="bg-white text-yellow-500 px-4 py-2 rounded-full text-sm font-medium transition hover:shadow-md"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
