import { useEffect, useState, useRef } from 'react'

const useScrollEvent = () => {
    const [scrollPassed, setScrollPassed] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    const [scrollHeight, setScrollHeight] = useState(0)
    const ticking = useRef(false)

    const handleScroll = () => {
        const scrollTop = window.scrollY
        const docHeight = document.body.offsetHeight
        const winHeight = window.innerHeight

        const scrollPercent = ((scrollTop + winHeight) * 100) / docHeight

        setScrollY(scrollTop)
        setScrollPassed(scrollPercent)
    }

    const onScroll = () => {
        if (!ticking.current) {
            window.requestAnimationFrame(() => {
                handleScroll()
                ticking.current = false
            })
            ticking.current = true
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
        setScrollY(window.scrollY)
        setScrollHeight(document.body.offsetHeight)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return {
        scrollPassed,
        scrollY,
        scrollHeight,
    }
}

export default useScrollEvent
