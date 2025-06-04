"use client"

import { useEffect, useState } from "react"
import {
  Music,
  Headphones,
  Mic,
  Radio,
  Volume2,
  AudioWaveformIcon as Waveform,
  Music2,
  Music3,
  Music4,
} from "lucide-react"

interface AnimatedMusicIconProps {
  className?: string
  size?: number
  color?: string
  interval?: number
}

export function AnimatedMusicIcon({
  className = "",
  size = 48,
  color = "white",
  interval = 1000,
}: AnimatedMusicIconProps) {
  const [currentIcon, setCurrentIcon] = useState(0)
  const [position, setPosition] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const icons = [
    <Music key="music" size={size} color={color} strokeWidth={1.5} />,
    <Headphones key="headphones" size={size} color={color} strokeWidth={1.5} />,
    <Mic key="mic" size={size} color={color} strokeWidth={1.5} />,
    <Radio key="radio" size={size} color={color} strokeWidth={1.5} />,
    <Volume2 key="volume" size={size} color={color} strokeWidth={1.5} />,
    <Waveform key="waveform" size={size} color={color} strokeWidth={1.5} />,
    <Music2 key="music2" size={size} color={color} strokeWidth={1.5} />,
    <Music3 key="music3" size={size} color={color} strokeWidth={1.5} />,
    <Music4 key="music4" size={size} color={color} strokeWidth={1.5} />,
  ]

  // Use the number of icons to determine positions, ensuring full screen coverage
  const totalPositions = icons.length
  const stepSize = 100 / (totalPositions - 1) // This ensures we go from 0% to 100%

  useEffect(() => {
    const timer = setInterval(() => {
      // First make the icon disappear
      setIsVisible(false)

      // After a short delay, change the icon and position, then make it reappear
      setTimeout(() => {
        setCurrentIcon((prev) => (prev + 1) % icons.length)
        setPosition((prevPos) => {
          // Calculate next position based on current icon index
          const currentIconIndex = (currentIcon + 1) % icons.length
          const nextPos = currentIconIndex * stepSize
          return nextPos
        })
        setIsVisible(true)
      }, 80)
    }, interval)

    return () => clearInterval(timer)
  }, [interval, icons.length, stepSize, currentIcon])

  return (
    <div className="relative w-full max-w-full mx-auto h-16 flex items-center px-4">
      <div
        className={`absolute ${className}`}
        style={{
          left: `${position}%`,
          transform: `translateX(-50%)`, // Center the icon on its position
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.1s ease-in-out",
        }}
      >
        {icons[currentIcon]}
      </div>
    </div>
  )
}
