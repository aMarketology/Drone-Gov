'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface CityCoordinate {
  name: string
  x: number
  y: number
}

const cityNames = [
  'Seattle',
  'San Francisco',
  'Los Angeles',
  'Phoenix',
  'Denver',
  'Dallas',
  'Houston',
  'Chicago',
  'Minneapolis',
  'Atlanta',
  'Miami',
  'New York',
  'Boston',
  'Washington DC',
]

export default function CalibratePage() {
  const [cities, setCities] = useState<CityCoordinate[]>([])
  const [currentCityIndex, setCurrentCityIndex] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentCityIndex >= cityNames.length) return

    const rect = imageRef.current?.getBoundingClientRect()
    if (!rect) return

    // Calculate percentage position within the image
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    const newCity: CityCoordinate = {
      name: cityNames[currentCityIndex],
      x: parseFloat(x.toFixed(2)),
      y: parseFloat(y.toFixed(2)),
    }

    setCities([...cities, newCity])
    setCurrentCityIndex(currentCityIndex + 1)
  }

  const resetCalibration = () => {
    setCities([])
    setCurrentCityIndex(0)
  }

  const generateCode = () => {
    const code = `const cities = [\n${cities.map(city => 
      `  { name: '${city.name}', x: ${city.x}, y: ${city.y} },`
    ).join('\n')}\n]`
    
    return code
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode())
    alert('Coordinates copied to clipboard!')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🎯 Map Calibration Tool
          </h1>
          <p className="text-gray-600 mb-4">
            Click on each city's actual location on the map to capture precise coordinates.
          </p>
          
          {currentCityIndex < cityNames.length ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-800 font-semibold text-lg">
                📍 Click on: <span className="text-red-600">{cityNames[currentCityIndex]}</span>
              </p>
              <p className="text-red-600 text-sm mt-1">
                City {currentCityIndex + 1} of {cityNames.length}
              </p>
            </div>
          ) : (
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-800 font-semibold text-lg">
                ✅ All cities calibrated! Copy the code below.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Area */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Map</h2>
            <div 
              ref={imageRef}
              className="relative w-full cursor-crosshair border-4 border-red-500 rounded"
              onClick={handleMapClick}
              style={{ aspectRatio: '1200/692' }}
            >
              <Image
                src="/What-are-the-Lower-48-States-2.png"
                alt="United States Map"
                fill
                className="object-contain"
                priority
                quality={100}
              />
              
              {/* Show placed markers */}
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="absolute w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {city.name}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex gap-2">
              <button
                onClick={resetCalibration}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              >
                🔄 Reset
              </button>
              {currentCityIndex > 0 && (
                <button
                  onClick={() => {
                    setCities(cities.slice(0, -1))
                    setCurrentCityIndex(currentCityIndex - 1)
                  }}
                  className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  ↩️ Undo Last
                </button>
              )}
            </div>
          </div>

          {/* Code Output */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Generated Code</h2>
            
            {cities.length > 0 && (
              <>
                <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-auto max-h-96 mb-4">
                  <pre>{generateCode()}</pre>
                </div>
                
                <button
                  onClick={copyToClipboard}
                  className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
                >
                  📋 Copy to Clipboard
                </button>
              </>
            )}

            {/* Progress List */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Progress:</h3>
              <div className="space-y-1">
                {cityNames.map((name, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-2 rounded ${
                      index < currentCityIndex
                        ? 'bg-green-100 text-green-800'
                        : index === currentCityIndex
                        ? 'bg-red-100 text-red-800 font-semibold'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <span className="w-6 text-center">
                      {index < currentCityIndex ? '✅' : index === currentCityIndex ? '👉' : '⭕'}
                    </span>
                    <span>{name}</span>
                    {index < currentCityIndex && cities[index] && (
                      <span className="ml-auto text-xs">
                        ({cities[index].x.toFixed(1)}, {cities[index].y.toFixed(1)})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2">📖 Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-blue-800">
            <li>Click on each city's location on the map in order</li>
            <li>The red dot will mark your click position</li>
            <li>Use "Undo Last" if you misclick</li>
            <li>After all 14 cities, copy the generated code</li>
            <li>Paste the code into MapAnimation.tsx to replace the cities array</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
