'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SignInModal } from './sigin-modal'

export function Header() {
  const [isToggled, setIsToggled] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        focusInput()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        blurInput()
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const focusInput = () => {
    inputRef.current?.focus()
  }

  const blurInput = () => {
    inputRef.current?.blur()
  }

  return (
    <div className="flex h-16 items-center justify-center text-white">
      <div className="flex h-full w-full max-w-[1200px] items-center justify-between text-black">
        <div className="flex items-center gap-12">
          <span className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-gray-200"></div>
            <span className="text-2xl font-semibold tracking-tight">
              Goznuk
            </span>
          </span>
          <div className="relative flex">
            <motion.input
              layout
              ref={inputRef}
              onChange={() => console.log('change happening')}
              type="text"
              className={cn(
                'z-10 h-10 w-[320px] rounded-[14px] border-[3px] border-gray-200 px-3 text-sm font-normal text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-[3px] focus:ring-gray-800 focus:placeholder:opacity-50',
                isToggled && 'border-0'
              )}
              placeholder="Search item..."
              whileFocus={{
                width: 400,
              }}
              transition={{
                type: 'spring',
                duration: 0.4,
                bounce: 0.3,
              }}
              onFocus={() => setIsToggled(!isToggled)}
              onBlur={() => setIsToggled(!isToggled)}
            ></motion.input>

            <span
              className={cn(
                'absolute inset-y-0 right-0 top-0 z-10 mr-3 inline-flex items-center justify-center gap-1',
                isToggled && 'rounded-[6px] px-[6px]'
              )}
            >
              <AnimatePresence>
                {!isToggled && (
                  <>
                    <motion.kbd className="text-muted-foreground pointer-events-none flex h-5 w-5 select-none items-center justify-center gap-1 rounded border border-b-[3px] bg-gray-100 font-mono text-[14px] font-normal text-gray-400 opacity-100">
                      <span className="text-[20px]/[20px]">⌘</span>
                    </motion.kbd>
                    <motion.kbd className="text-muted-foreground pointer-events-none flex h-5 w-5 select-none items-center justify-center gap-1 rounded border border-b-[3px] bg-gray-100 font-mono font-normal text-gray-400 opacity-100">
                      <span className="text-[14px]/[20px]">K</span>
                    </motion.kbd>
                  </>
                )}
              </AnimatePresence>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="text-md rounded-[12px]" variant="outline">
            Start writing
          </Button>
          <SignInModal />
        </div>
      </div>
    </div>
  )
}
