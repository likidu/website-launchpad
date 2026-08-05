'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface CommandProps {
  /** Plain-text command written to the clipboard */
  cmd: string
  /** Syntax-highlighted command markup */
  children: React.ReactNode
}

/** One command in the hero code panel, with a hover-revealed copy button. */
export function Command({ cmd, children }: CommandProps) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  const copy = () => {
    if (!navigator.clipboard?.writeText) return
    navigator.clipboard.writeText(cmd).then(
      () => {
        setCopied(true)
        clearTimeout(timer.current)
        timer.current = setTimeout(() => setCopied(false), 1400)
      },
      () => {}
    )
  }

  return (
    <div className="group relative -mx-2 rounded-[5px] py-px pl-2 pr-[88px] hover:bg-white/[0.06]">
      {children}
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy command: ${cmd}`}
        className={cn(
          'absolute right-2 top-0.5 rounded border bg-black/40 px-2 py-0.5',
          'font-mono text-[10px] tracking-[0.04em] text-carbon-400',
          'cursor-pointer opacity-0 transition-[opacity,border-color] duration-150',
          'group-hover:opacity-100 focus-visible:opacity-100',
          'hover:border-brand-red-primary hover:text-white',
          copied ? 'border-brand-red-primary' : 'border-white/[0.16]'
        )}
      >
        {copied ? 'copied' : 'copy'}
      </button>
    </div>
  )
}
