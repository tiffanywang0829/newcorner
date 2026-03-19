import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const PHRASES = ["I'm Tiffany.", "I'm a Product Manager.", "I'm building."]

function useTypewriter(phrases) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, 1800)
      return () => clearTimeout(timeoutRef.current)
    }

    const current = phrases[phraseIdx]
    const speed = isDeleting ? 55 : 95

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === current) setIsPaused(true)
      } else {
        const next = current.slice(0, displayText.length - 1)
        setDisplayText(next)
        if (next === '') {
          setIsDeleting(false)
          setPhraseIdx((i) => (i + 1) % phrases.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, isPaused, phraseIdx, phrases])

  return displayText
}

export default function Home() {
  const typed = useTypewriter(PHRASES)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center pt-24 pb-16">
        <div className="page-container w-full">
          <div className="max-w-2xl">
            <p className="nav-link mb-6 text-text-secondary">
              Product Manager · NYC
            </p>
            <h1 className="font-serif font-light leading-tight mb-6"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', letterSpacing: '-0.025em' }}>
              Hello,{' '}
              <br />
              <span>
                {typed}
                <span className="cursor-blink" />
              </span>
            </h1>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-md"
               style={{ fontSize: '1.0625rem' }}>
              I turn complex systems into products people actually love.
              Currently building Azure Advisor at Microsoft.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/works" className="btn-primary">
                View my work
              </Link>
              <Link to="/about" className="btn-outline">
                About me
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
