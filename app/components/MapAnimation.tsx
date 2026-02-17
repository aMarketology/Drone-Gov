'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Major US cities with CALIBRATED coordinates from click-to-place tool
// These coordinates are precisely aligned with the actual map image
// Note: Coordinates are based on the image container, accounting for object-contain spacing
const cities = [
  { name: 'Seattle', x: 19.18, y: 14.08 },
  { name: 'San Francisco', x: 10.58, y: 37.03 },
  { name: 'Los Angeles', x: 15.66, y: 55 },
  { name: 'Phoenix', x: 25.8, y: 55.15 },
  { name: 'Denver', x: 42.34, y: 45.36 },
  { name: 'Dallas', x: 44.76, y: 76.36 },
  { name: 'Houston', x: 48.73, y: 75.21 },
  { name: 'Chicago', x: 48.29, y: 28.47 },
  { name: 'Minneapolis', x: 67.44, y: 34.14 },
  { name: 'Atlanta', x: 65.23, y: 68.18 },
  { name: 'Miami', x: 77.36, y: 83.87 },
  { name: 'New York', x: 84.38, y: 35.38 },
  { name: 'Boston', x: 80.63, y: 43.16 },
  { name: 'Washington DC', x: 82.61, y: 53.53 },
]

// Define routes between cities (indices)
const routes: Array<{ from: number; to: number; type: 'standard' | 'express' | 'heavy' }> = [
  // West Coast
  { from: 0, to: 1, type: 'standard' }, // Seattle to SF
  { from: 1, to: 2, type: 'express' }, // SF to LA
  { from: 2, to: 3, type: 'standard' }, // LA to Phoenix
  
  // Southern Route
  { from: 3, to: 4, type: 'heavy' }, // Phoenix to Denver
  { from: 4, to: 5, type: 'standard' }, // Denver to Dallas
  { from: 5, to: 6, type: 'express' }, // Dallas to Houston
  { from: 6, to: 9, type: 'standard' }, // Houston to Atlanta
  { from: 9, to: 10, type: 'express' }, // Atlanta to Miami
  
  // Northern Route
  { from: 0, to: 8, type: 'heavy' }, // Seattle to Minneapolis
  { from: 8, to: 7, type: 'standard' }, // Minneapolis to Chicago
  { from: 7, to: 11, type: 'express' }, // Chicago to NYC
  { from: 11, to: 12, type: 'standard' }, // NYC to Boston
  
  // Cross-country connectors
  { from: 4, to: 7, type: 'heavy' }, // Denver to Chicago
  { from: 7, to: 9, type: 'standard' }, // Chicago to Atlanta
  { from: 11, to: 13, type: 'express' }, // NYC to DC
  { from: 13, to: 9, type: 'standard' }, // DC to Atlanta
]

interface Truck {
  id: number
  routeIndex: number
  progress: number
  type: 'standard' | 'express' | 'heavy'
}

export default function MapAnimation() {
  const [trucks, setTrucks] = useState<Truck[]>([])

  useEffect(() => {
    // Initialize trucks
    const initialTrucks: Truck[] = routes.slice(0, 8).map((route, index) => ({
      id: index,
      routeIndex: index,
      progress: Math.random(),
      type: route.type,
    }))
    setTrucks(initialTrucks)
  }, [])

  // Get color based on truck type - Red and White theme
  const getTruckColor = (type: string) => {
    switch (type) {
      case 'express':
        return '#dc2626' // Red-600
      case 'heavy':
        return '#991b1b' // Red-800
      default:
        return '#ef4444' // Red-500
    }
  }

  const getRouteColor = (type: string) => {
    switch (type) {
      case 'express':
        return 'rgba(220, 38, 38, 0.35)' // Red-600
      case 'heavy':
        return 'rgba(153, 27, 27, 0.35)' // Red-800
      default:
        return 'rgba(239, 68, 68, 0.25)' // Red-500
    }
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      style={{ zIndex: 15 }}
    >
      <defs>
        {/* Enhanced glow filters for professional look */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="strongGlow">
          <feGaussianBlur stdDeviation="2.2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Text shadow filter */}
        <filter id="textGlow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="0" result="offsetblur"/>
          <feFlood floodColor="#dc2626"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Draw route lines - thinner */}
      {routes.map((route, index) => {
        const fromCity = cities[route.from]
        const toCity = cities[route.to]
        
        return (
          <motion.line
            key={`route-${index}`}
            x1={fromCity.x}
            y1={fromCity.y}
            x2={toCity.x}
            y2={toCity.y}
            stroke={getRouteColor(route.type)}
            strokeWidth="0.15"
            strokeDasharray={route.type === 'express' ? '0.5,0.25' : '0'}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, delay: index * 0.15, ease: "easeInOut" }}
            filter="url(#glow)"
          />
        )
      })}

      {/* Draw cities with labels - scaled down */}
      {cities.map((city, index) => (
        <g key={`city-${index}`}>
          {/* Outer glow ring */}
          <motion.circle
            cx={city.x}
            cy={city.y}
            r="0.8"
            fill="none"
            stroke="#dc2626"
            strokeWidth="0.1"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: index * 0.15
            }}
          />
          
          {/* Main city dot */}
          <motion.circle
            cx={city.x}
            cy={city.y}
            r="0.4"
            fill="#dc2626"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1
            }}
            filter="url(#strongGlow)"
          />

          {/* Inner highlight */}
          <circle
            cx={city.x}
            cy={city.y}
            r="0.15"
            fill="white"
            opacity="0.6"
          />
          
          {/* City label background for readability */}
          <motion.rect
            x={city.x - (city.name.length * 0.5)}
            y={city.y - 2.3}
            width={city.name.length * 1}
            height="1.5"
            fill="white"
            opacity="0.8"
            rx="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
          />
          
          {/* City label text */}
          <motion.text
            x={city.x}
            y={city.y - 1.2}
            fontSize="1.2"
            fill="#991b1b"
            textAnchor="middle"
            fontWeight="600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em'
            }}
          >
            {city.name}
          </motion.text>
        </g>
      ))}

      {/* Animated trucks - smaller */}
      {trucks.map((truck) => {
        const route = routes[truck.routeIndex]
        if (!route) return null
        
        const fromCity = cities[route.from]
        const toCity = cities[route.to]
        
        return (
          <g key={`truck-${truck.id}`}>
            {/* Truck trail effect */}
            <motion.circle
              r="0.5"
              fill={getTruckColor(truck.type)}
              opacity="0.15"
              initial={{
                cx: fromCity.x,
                cy: fromCity.y,
              }}
              animate={{
                cx: [fromCity.x, toCity.x, fromCity.x],
                cy: [fromCity.y, toCity.y, fromCity.y],
              }}
              transition={{
                duration: truck.type === 'express' ? 8 : truck.type === 'heavy' ? 15 : 12,
                repeat: Infinity,
                ease: "linear",
                delay: truck.id * 0.5,
              }}
            />
            
            {/* Main truck */}
            <motion.circle
              r="0.35"
              fill={getTruckColor(truck.type)}
              filter="url(#strongGlow)"
              initial={{
                cx: fromCity.x,
                cy: fromCity.y,
              }}
              animate={{
                cx: [fromCity.x, toCity.x, fromCity.x],
                cy: [fromCity.y, toCity.y, fromCity.y],
              }}
              transition={{
                duration: truck.type === 'express' ? 8 : truck.type === 'heavy' ? 15 : 12,
                repeat: Infinity,
                ease: "linear",
                delay: truck.id * 0.5,
              }}
            />
            
            {/* Truck highlight */}
            <motion.circle
              r="0.12"
              fill="white"
              opacity="0.8"
              initial={{
                cx: fromCity.x,
                cy: fromCity.y,
              }}
              animate={{
                cx: [fromCity.x, toCity.x, fromCity.x],
                cy: [fromCity.y, toCity.y, fromCity.y],
              }}
              transition={{
                duration: truck.type === 'express' ? 8 : truck.type === 'heavy' ? 15 : 12,
                repeat: Infinity,
                ease: "linear",
                delay: truck.id * 0.5,
              }}
            />
          </g>
        )
      })}

      {/* Animated route highlights - smaller pulses */}
      {routes.slice(0, 5).map((route, index) => {
        const fromCity = cities[route.from]
        const toCity = cities[route.to]
        
        return (
          <motion.line
            key={`pulse-${index}`}
            x1={fromCity.x}
            y1={fromCity.y}
            x2={toCity.x}
            y2={toCity.y}
            stroke={getTruckColor(route.type)}
            strokeWidth="0.3"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 0.3, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "easeInOut"
            }}
            filter="url(#strongGlow)"
          />
        )
      })}
    </svg>
  )
}
