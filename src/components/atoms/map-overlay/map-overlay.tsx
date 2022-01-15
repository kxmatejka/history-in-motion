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

  useEffect(() => {
    overlayRef.current.style.transform = `translate(${left}px, ${top}px)`
  }, [])

  useEffect(() => {
    if (shouldAnimate) {
      isAnimating.current = true

      const animation = overlayRef.current.animate([
        {
          transform: `translate(${left}px, ${top}px)`,
        },
      ], {
        duration: 5000,
      })

      animation.onfinish = () => {
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
