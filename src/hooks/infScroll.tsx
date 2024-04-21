import { useEffect } from 'react'

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
