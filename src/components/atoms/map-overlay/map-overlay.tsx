import {FC, useEffect, useRef} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
`

type MapOverlayProps = {
  left?: number
  top?: number
  shouldAnimate?: boolean
}

export const MapOverlay: FC<MapOverlayProps> = ({left, top, shouldAnimate, children}) => {
  const overlayRef = useRef<HTMLDivElement>()
  const isAnimating = useRef(false)
  const animationRef = useRef<Animation>()

  useEffect(() => {
    overlayRef.current.style.transform = `translate(${left}px, ${top}px)`
  }, [])

  useEffect(() => {
    if (!isAnimating.current) {
      isAnimating.current = true

      animationRef.current = overlayRef.current.animate([
        {
          transform: `translate(${left}px, ${top}px)`,
        },
      ], {
        duration: 500,
      })

      animationRef.current.onfinish = () => {
        if (overlayRef.current) {
          overlayRef.current.style.transform = `translate(${left}px, ${top}px)`
        }
        isAnimating.current = false
      }
    }
  }, [shouldAnimate])

  useEffect(() => {
    if (!isAnimating.current && overlayRef.current) {
      overlayRef.current.style.transform = `translate(${left}px, ${top}px)`
    }
  }, [left, top])

  return (
    <Container
      ref={overlayRef}
    >
      {children}
    </Container>
  )
}
