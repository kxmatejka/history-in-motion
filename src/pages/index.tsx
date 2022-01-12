import React from 'react'
import { Map, Marker } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'

const WorldMap = () => {
  return (
    <Map
      height={'100vh' as any}
      defaultCenter={[37.98381, 23.72754]}
      defaultZoom={8}
      provider={stamenTerrain}
    >
      <Marker
        width={50}
        anchor={[37.98381, 23.72754]}
        hover={true}
        payload={'Athens'}
        onClick={(p) => console.log('onClick', p)}
      />
    </Map>
  )
}

const Home = () => {
  return (
    <WorldMap/>
  )
}

export default Home
