import React, {useState} from 'react'
import styled from 'styled-components'
import {Map} from 'pigeon-maps'
import {stamenTerrain} from 'pigeon-maps/providers'
import {PEOPLE} from '@/src/constants'
import {MapMarkerPerson} from '@/src/components/molecules/map-marker-person'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledRange = styled.input`
  width: 500px;
  margin: 20px;
`

const Slider = ({ value, onValueChange }) => {
  const humanYear = (value >= 0) ? `${value} AC` : `${value*-1} BC`

  return (
    <Container>
      <StyledRange
        type={'range'}
        min={-600}
        max={-400}
        step={1}
        value={value}
        onChange={e => onValueChange(parseInt(e.target.value))}
      />
      <div>{humanYear}</div>
    </Container>
  )
}

const WorldMap = () => {
  const [currentYear, setCurrentYear] = useState(-500)

  return (
    <>
      <Map
        defaultCenter={[37.98381, 23.72754]}
        defaultZoom={8}
        provider={stamenTerrain}
      >
        {
          PEOPLE.filter((marker) => {
            return !(marker.lifetime && (marker.lifetime.from > currentYear || marker.lifetime.to < currentYear))
          }).map((person) => {
            const residence = person.residence.find((residence) => {
              return (currentYear < 0)
                ? residence.period.from <= currentYear && residence.period.to >= currentYear
                : residence.period.from >= currentYear && residence.period.to <= currentYear
            })

            if (!residence) {
              return null
            }

            const gps = residence.gps
            const state = residence.state ? residence.state : 'LIVE'

            return (
              <MapMarkerPerson
                key={person.name}
                name={person.name}
                anchor={[gps.lat, gps.lon]}
                state={state as 'LIVE' | 'DEAD'}
              />
            )
          })
        }
      </Map>
      <Slider
        value={currentYear}
        onValueChange={setCurrentYear}
      />
    </>
  )
}

const Home = () => {
  return (
    <WorldMap/>
  )
}

export default Home
