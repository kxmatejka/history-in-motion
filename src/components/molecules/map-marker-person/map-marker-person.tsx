import React, {FC, useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Overlay} from 'pigeon-maps'
import {MarkerPerson} from '@/src/components/atoms/marker-person'

const anchorDiff = (a: number[], b: number[]) => !(a[0] === b[0] && a[1] === b[1])

type StyledOverlayProps = {
  animate: boolean
}

const StyledOverlay = styled(Overlay).attrs<StyledOverlayProps>((props) => ({
  animate: props.animate,
}))<StyledOverlayProps>`
  transition: ${p => p.animate ? 'transform 1s linear' : 'none'};
`

type MapMarkerPersonProps = {
  name: string
  anchor: [number, number]
}

export const MapMarkerPerson: FC<MapMarkerPersonProps> = ({name, ...props}) => {
  const anchorRef = useRef([0, 0])

  useEffect(() => {
    anchorRef.current = props.anchor
  }, [props])

  return (
    <StyledOverlay {...props} animate={anchorDiff(props.anchor, anchorRef.current)}>
      <MarkerPerson name={name}/>
    </StyledOverlay>
  )
}
