"use client"

import { useEffect, useState, useRef, RefObject } from "react"

interface TouchPosition {
  x: number
  y: number
}

interface UseTouchGesturesProps {
  ref: RefObject<HTMLElement>
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onPinch?: (scale: number) => void
  threshold?: number
}

export function useTouchGestures({
  ref,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onPinch,
  threshold = 50,
}: UseTouchGesturesProps) {
  const [touchStart, setTouchStart] = useState<TouchPosition | null>(null)
  const [touchEnd, setTouchEnd] = useState<TouchPosition | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        setTouchStart({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        })
      } else if (e.touches.length === 2 && onPinch) {
        // Handle pinch start
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const distance = Math.sqrt(
          Math.pow(touch1.clientX - touch2.clientX, 2) +
          Math.pow(touch1.clientY - touch2.clientY, 2)
        )
        // Store initial pinch distance
        element.setAttribute('data-initial-pinch', distance.toString())
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && onPinch) {
        e.preventDefault()
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const distance = Math.sqrt(
          Math.pow(touch1.clientX - touch2.clientX, 2) +
          Math.pow(touch1.clientY - touch2.clientY, 2)
        )
        
        const initialDistance = parseFloat(element.getAttribute('data-initial-pinch') || '0')
        if (initialDistance > 0) {
          const scale = distance / initialDistance
          onPinch(scale)
        }
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return

      if (e.changedTouches.length === 1) {
        const touchEndPos = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY,
        }
        setTouchEnd(touchEndPos)

        const deltaX = touchStart.x - touchEndPos.x
        const deltaY = touchStart.y - touchEndPos.y

        const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)
        const isVerticalSwipe = Math.abs(deltaY) > Math.abs(deltaX)

        if (isHorizontalSwipe && Math.abs(deltaX) > threshold) {
          if (deltaX > 0 && onSwipeLeft) {
            onSwipeLeft()
          } else if (deltaX < 0 && onSwipeRight) {
            onSwipeRight()
          }
        } else if (isVerticalSwipe && Math.abs(deltaY) > threshold) {
          if (deltaY > 0 && onSwipeUp) {
            onSwipeUp()
          } else if (deltaY < 0 && onSwipeDown) {
            onSwipeDown()
          }
        }
      }

      setTouchStart(null)
      setTouchEnd(null)
      element.removeAttribute('data-initial-pinch')
    }

    element.addEventListener('touchstart', handleTouchStart, { passive: false })
    element.addEventListener('touchmove', handleTouchMove, { passive: false })
    element.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchmove', handleTouchMove)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [ref, touchStart, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onPinch, threshold])

  return { touchStart, touchEnd }
}

export function useSwipeNavigation(
  currentIndex: number,
  maxIndex: number,
  onNavigate: (index: number) => void
) {
  const swipeRef = useRef<HTMLDivElement>(null)

  useTouchGestures({
    ref: swipeRef,
    onSwipeLeft: () => {
      if (currentIndex < maxIndex) {
        onNavigate(currentIndex + 1)
      }
    },
    onSwipeRight: () => {
      if (currentIndex > 0) {
        onNavigate(currentIndex - 1)
      }
    },
  })

  return swipeRef
}