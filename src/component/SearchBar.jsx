'use client'

import { Field, Input, Button } from "@headlessui/react"
import clsx from "clsx"
import { useState } from "react"

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <Field>
      {/* This wrapper gives horizontal padding on mobile */}
      <div className="w-full px-10 sm:px-0 max-w-md mx-auto mt-6">
        <div className="relative">
          <Input
            placeholder="e.g Driver"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={clsx(
              "w-full rounded-full ring-[#f14126] ring-1 bg-white",
              "px-2 py-2 pr-[5.5rem] text-sm text-gray-900",
              "focus:outline-none focus:ring-2 focus:ring-[#f14126]",
              "transition duration-200"
            )}
          />
          <Button
            className={clsx(
              "absolute top-1/2 right-1.5 -translate-y-1/2 px-3 py-1.5 text-xs",
              "rounded-full bg-[#f14126] text-white hover:bg-[#d53e1c]",
              "transition-opacity duration-200",
              isFocused ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            Search
          </Button>
        </div>
      </div>
    </Field>
  )
}
