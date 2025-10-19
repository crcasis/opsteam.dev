import { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [progress, setProgress] = useState(0)
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        let ticking = false

        const updateScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPercentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

            setProgress(scrollPercentage)
            setShowButton(scrollTop > 40)
            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScroll)
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll)
        updateScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const goToTop = (e: React.MouseEvent) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <a
            className={`btn-scroll-top ${showButton ? 'show' : ''}`}
            href="#"
            onClick={goToTop}
            aria-label="Scroll back to top"
        >
            <svg viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle
                    cx={20}
                    cy={20}
                    r={19}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeDasharray="120"
                    strokeDashoffset={120 - (progress / 100) * 120}
                />
            </svg>
            <i className="ai-arrow-up" />
        </a>
    )
}

export default ScrollToTop
