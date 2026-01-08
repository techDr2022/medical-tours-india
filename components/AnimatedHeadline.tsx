"use client"

import { useEffect, useState } from "react"

export function AnimatedHeadline() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const line1 = "You're Not Looking for a Hospital."
  const line2 = "You're Looking for the Right Decision."

  const words1 = line1.split(" ")
  const words2 = line2.split(" ")

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900" itemProp="headline">
      <span className="inline-block">
        {words1.map((word, index) => (
          <span
            key={index}
            className={`inline-block mr-2 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-8 scale-95"
            }`}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </span>
      <br />
      <span className="inline-block text-primary">
        {words2.map((word, index) => (
          <span
            key={index}
            className={`inline-block mr-2 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-8 scale-95"
            }`}
            style={{
              transitionDelay: `${(words1.length + index) * 100 + 200}ms`,
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </h1>
  )
}
