import React, {FC, useEffect, useRef} from 'react'
import {MapOverlay, MarkerPerson} from '@/src/components/atoms'

const anchorDiff = (a: number[], b: number[]) => (a[0] !== b[0] || a[1] !== b[1])

type MapMarkerPersonProps = {
  name: string
  anchor: [number, number]
}

export const MapMarkerPerson: FC<MapMarkerPersonProps> = ({name, ...props}) => {
  const prevAnchorRef = useRef([0, 0])
  const shouldAnimate = anchorDiff(props.anchor, prevAnchorRef.current)

  useEffect(() => {
    prevAnchorRef.current = props.anchor
  }, [props.anchor])

  return (
    <MapOverlay
      {...props}
      shouldAnimate={shouldAnimate}
    >
      <MarkerPerson name={name}/>
    </MapOverlay>
  )
}
