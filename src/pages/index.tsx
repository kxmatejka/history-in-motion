import React, { useState } from 'react'
import styled from 'styled-components'
import { Map, Overlay } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'

const MAP_MARKERS = [
  {
    id: 'athens',
    gps: {
      lat: 37.98381,
      lon: 23.72754,
    },
    lifespan: {
      from: -500,
      to: 500,
    },
  },
  {
    id: 'sparta',
    gps: {
      lat: 37.07116,
      lon: 22.41467,
    },
    lifespan: {
      from: -700,
      to: 100,
    },
  },
  {
    id: 'troy',
    gps: {
      lat: 39.95748,
      lon: 26.2389,
    },
    lifespan: {
      from: -1000,
      to: -200,
    },
  },
  {
    id: 'syracuse',
    gps: {
      lat: 37.07547,
      lon: 15.28659,
    },
    lifespan: {
      from: -900,
      to: 300,
    },
  },
]

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
        min={-1000}
        max={1000}
        step={10}
        value={value}
        onChange={e => onValueChange(parseInt(e.target.value))}
      />
      <div>{humanYear}</div>
    </Container>
  )
}

const City = (props) => {
  return (
    <Overlay {...props}>
      <img src='https://cdn-icons-png.flaticon.com/512/4215/4215034.png' width={50}/>
    </Overlay>
  )
}

const WorldMap = () => {
  const [currentYear, setCurrentYear] = useState(0)

  return (
    <div>
      <Map
        height={'100vh' as any}
        defaultCenter={[37.98381, 23.72754]}
        defaultZoom={8}
        provider={stamenTerrain}
      >
        {MAP_MARKERS
          .filter((marker) =>{
            return !(marker.lifespan && (marker.lifespan.from > currentYear || marker.lifespan.to < currentYear))
          })
          .map(({id, gps}) => (
            <City
              key={id}
              width={50}
              anchor={[gps.lat, gps.lon]}
              offset={[25, 25]}
            />
          ))}
      </Map>
      <Slider
        value={currentYear}
        onValueChange={setCurrentYear}
      />
    </div>
  )
}

const Home = () => {
  return (
    <WorldMap/>
  )
}

export default Home
