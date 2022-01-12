import React from 'react'
import { Map, Marker } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'

const MAP_MARKERS = [
  {
    id: 'athens',
    gps: {
      lat: 37.98381,
      lon: 23.72754,
    },
  },
  {
    id: 'sparta',
    gps: {
      lat: 37.07116,
      lon: 22.41467,
    },
  },
  {
    id: 'troy',
    gps: {
      lat: 39.95748,
      lon: 26.2389,
    },
  },
  {
    id: 'syracuse',
    gps: {
      lat: 37.07547,
      lon: 15.28659,
    },
  },
]

const WorldMap = () => {
  return (
    <Map
      height={'100vh' as any}
      defaultCenter={[37.98381, 23.72754]}
      defaultZoom={8}
      provider={stamenTerrain}
    >
      {MAP_MARKERS.map(({id, gps}) => (
        <Marker
          key={id}
          width={50}
          anchor={[gps.lat, gps.lon]}
          hover={true}
          payload={id}
          onClick={(p) => console.log('onClick', p)}
        />
      ))}
    </Map>
  )
}

const Home = () => {
  return (
    <WorldMap/>
  )
}

export default Home
