import React, {FC, useEffect, useRef} from 'react'
import {MarkerPerson} from '@/src/components/atoms/marker-person'

const anchorDiff = (a: number[], b: number[]) => (a[0] !== b[0] || a[1] !== b[1])

const Overlay: FC<any> = ({left, top, style, className, animate, children}) => {
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
        duration: 1000,
      })

      animationRef.current.onfinish = () => {
        if (overlayRef.current) {
          overlayRef.current.style.transform = `translate(${left}px, ${top}px)`
        }
        isAnimating.current = false
      }
    }
  }, [animate])

  useEffect(() => {
    if (!isAnimating.current && overlayRef.current) {
      overlayRef.current.style.transform = `translate(${left}px, ${top}px)`
    }
  }, [left, top])

  return (
    <div
      style={{
        position: 'absolute',
        ...(style || {}),
      }}
      className={className ? `${className} pigeon-click-block` : 'pigeon-click-block'}
      ref={overlayRef}
    >
      {children}
    </div>
  )
}

type MapMarkerPersonProps = {
  name: string
  anchor: [number, number]
}

export const MapMarkerPerson: FC<MapMarkerPersonProps> = ({name, ...props}) => {
  const anchorRef = useRef([0, 0])

  useEffect(() => {
    anchorRef.current = props.anchor
  }, [props])

  const animate = anchorDiff(props.anchor, anchorRef.current)

  return (
    <Overlay
      {...props}
      animate={animate}
    >
      <MarkerPerson name={name}/>
    </Overlay>
  )
}
