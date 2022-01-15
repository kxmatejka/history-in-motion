import React, {FC} from 'react'
import styled from 'styled-components'
import {Overlay} from 'pigeon-maps'
import {MarkerPerson} from '@/src/components/atoms/marker-person'

const StyledOverlay = styled(Overlay)`
  transition: 1s ease-in-out;
`

type MapMarkerPersonProps = {
  name: string
  anchor: [number, number]
}

export const MapMarkerPerson: FC<MapMarkerPersonProps> = ({name, ...props}) => {
  return (
    <StyledOverlay {...props}>
      <MarkerPerson name={name}/>
    </StyledOverlay>
  )
}
