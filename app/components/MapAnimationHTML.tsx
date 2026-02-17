'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface City {
  name: string
  x: number // percentage
  y: number // percentage
}

interface Route {
  from: string
  to: string
  duration: number
  delay: number
  express?: boolean
}

const cities: City[] = [
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

const routes: Route[] = [
  { from: 'Seattle', to: 'San Francisco', duration: 8, delay: 0 },
  { from: 'San Francisco', to: 'Los Angeles', duration: 6, delay: 2 },
  { from: 'Los Angeles', to: 'Phoenix', duration: 5, delay: 1 },
  { from: 'Phoenix', to: 'Dallas', duration: 7, delay: 3 },
  { from: 'Dallas', to: 'Houston', duration: 4, delay: 0.5 },
  { from: 'Denver', to: 'Chicago', duration: 8, delay: 2 },
  { from: 'Chicago', to: 'New York', duration: 10, delay: 1, express: true },
  { from: 'Chicago', to: 'Minneapolis', duration: 6, delay: 4 },
  { from: 'Minneapolis', to: 'Seattle', duration: 12, delay: 2 },
  { from: 'Atlanta', to: 'Miami', duration: 7, delay: 3 },
  { from: 'Atlanta', to: 'Washington DC', duration: 6, delay: 1 },
  { from: 'New York', to: 'Boston', duration: 3, delay: 2 },
  { from: 'Boston', to: 'Washington DC', duration: 5, delay: 4 },
  { from: 'Houston', to: 'Atlanta', duration: 9, delay: 2 },
  { from: 'Denver', to: 'Dallas', duration: 8, delay: 5 },
  { from: 'Los Angeles', to: 'Denver', duration: 10, delay: 3 },
]

// Trucks that animate along routes
const trucks = [
  { route: 0, color: '#dc2626', delay: 0 },
  { route: 2, color: '#ef4444', delay: 1 },
  { route: 6, color: '#dc2626', delay: 2 },
  { route: 9, color: '#ef4444', delay: 0.5 },
  { route: 13, color: '#dc2626', delay: 1.5 },
  { route: 15, color: '#ef4444', delay: 2.5 },
  { route: 4, color: '#dc2626', delay: 3 },
  { route: 7, color: '#ef4444', delay: 1 },
]

export default function MapAnimationHTML() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* City dots and labels */}
      {cities.map((city, i) => (
        <div
          key={city.name}
          className="absolute"
          style={{
            left: `${city.x}%`,
            top: `${city.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Pulsing glow ring */}
          <motion.div
            className="absolute rounded-full bg-red-500/20"
            style={{
              width: '24px',
              height: '24px',
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
          
          {/* Main city dot */}
          <motion.div
            className="relative rounded-full bg-red-600 shadow-lg"
            style={{
              width: '12px',
              height: '12px',
              boxShadow: '0 0 20px rgba(220, 38, 38, 0.8), 0 0 40px rgba(220, 38, 38, 0.4)',
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              type: 'spring',
            }}
          />
          
          {/* City label */}
          <motion.div
            className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <div className="bg-white/95 px-2 py-1 rounded shadow-lg text-xs font-semibold text-red-800 border border-red-200">
              {city.name}
            </div>
          </motion.div>
        </div>
      ))}

      {/* Animated trade route flows - curved line segments */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
        <defs>
          <filter id="tradeGlow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="tradeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0" />
            <stop offset="50%" stopColor="#dc2626" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {trucks.map((truck, i) => {
          const route = routes[truck.route]
          const fromCity = cities.find(c => c.name === route.from)
          const toCity = cities.find(c => c.name === route.to)
          
          if (!fromCity || !toCity) return null

          // Calculate control point for curved path
          const midX = (fromCity.x + toCity.x) / 2
          const midY = (fromCity.y + toCity.y) / 2
          const dx = toCity.x - fromCity.x
          const dy = toCity.y - fromCity.y
          const offset = 5 // curve offset
          const controlX = midX - dy * offset / 100
          const controlY = midY + dx * offset / 100

          const pathData = `M ${fromCity.x} ${fromCity.y} Q ${controlX} ${controlY} ${toCity.x} ${toCity.y}`

          return (
            <motion.path
              key={i}
              d={pathData}
              stroke="url(#tradeGradient)"
              strokeWidth="0.4"
              fill="none"
              filter="url(#tradeGlow)"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1, 0],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: route.duration,
                repeat: Infinity,
                delay: truck.delay,
                ease: "linear",
                times: [0, 0.1, 0.9, 1]
              }}
            />
          )
        })}
      </svg>

      {/* Route lines - rendered behind cities with pulsing animation */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ zIndex: -1 }}
      >
        <defs>
          <filter id="routeGlow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {routes.map((route, i) => {
          const fromCity = cities.find(c => c.name === route.from)
          const toCity = cities.find(c => c.name === route.to)
          
          if (!fromCity || !toCity) return null

          return (
            <g key={i}>
              {/* Static base line */}
              <line
                x1={fromCity.x}
                y1={fromCity.y}
                x2={toCity.x}
                y2={toCity.y}
                stroke={route.express ? '#dc2626' : '#ef4444'}
                strokeWidth="0.2"
                strokeDasharray={route.express ? '2,1' : '0'}
                opacity="0.3"
              />
              
              {/* Animated pulsing line */}
              <motion.line
                x1={fromCity.x}
                y1={fromCity.y}
                x2={toCity.x}
                y2={toCity.y}
                stroke="url(#pulseGradient)"
                strokeWidth="0.3"
                strokeDasharray={route.express ? '2,1' : '0'}
                filter="url(#routeGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.8, 0.8, 0]
                }}
                transition={{
                  duration: route.duration * 0.8,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.8, 1]
                }}
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
