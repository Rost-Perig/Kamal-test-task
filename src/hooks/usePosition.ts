import { useRef, useState, MouseEvent } from 'react'

export const usePosition = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 100 })
  const initialPos = useRef({ x: 0, y: 0 })

  const handleMouseDown = (e: MouseEvent) => {
    let element = e.target as Element | null
    let shouldStartDragging = true
    while (element) {
      if (element.classList.contains('not-draggable')) {
        shouldStartDragging = false
        break
      }
      element = element.parentElement
    }
    if (e.button === 0 && shouldStartDragging) {
      setIsDragging(true)
      initialPos.current.x = e.clientX
      initialPos.current.y = e.clientY
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - initialPos.current.x
      const dy = e.clientY - initialPos.current.y
      setOffset({ x: offset.x + dx, y: offset.y + dy })
      initialPos.current.x = e.clientX
      initialPos.current.y = e.clientY
    }
  }

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  const toTop = () => {
    setOffset((prev) => ({ ...prev, y: prev.y - 16 }))
  }

  const toBottom = () => {
    setOffset((prev) => ({ ...prev, y: prev.y + 16 }))
  }

  const toLeft = () => {
    setOffset((prev) => ({ ...prev, x: prev.x - 16 }))
  }

  const toRight = () => {
    setOffset((prev) => ({ ...prev, x: prev.x + 16 }))
  }

  const toDefault = () => setOffset({ x: 0, y: 100 })

  return {
    isDragging,
    offset,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    toTop,
    toBottom,
    toLeft,
    toRight,
    toDefault,
  }
}
