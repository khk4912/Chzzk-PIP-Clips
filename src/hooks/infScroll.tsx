import { useEffect, useRef } from 'react'

export function useInfiniteScroll (callback: () => void): void {
  useEffect(() => {
    const handleScroll = (): void => {
      const {
        scrollTop,
        clientHeight,
        scrollHeight
      } = document.documentElement

      if (scrollTop + clientHeight >= scrollHeight * 0.8) {
        callback()
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [callback])
}

type ObserveFunction = (element: HTMLElement | null) => void
export function useInfiniteScrollUsingInterSectionObserver (callback: () => void): [ObserveFunction, ObserveFunction] {
  const observerRef = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback()
        }
      })
    }, { threshold: 0.4 })
  )

  const observe = (element: HTMLElement | null): void => {
    if (element != null) {
      observerRef.current.observe(element)
    }
  }

  const unobserve = (element: HTMLElement | null): void => {
    if (element != null) {
      observerRef.current.unobserve(element)
    }
  }

  return [observe, unobserve]
}
