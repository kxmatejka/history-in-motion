import {FC} from 'react'
import styled from 'styled-components'

const PALETTE = {
  LIVE: {
    background: '#eee',
    color: '#3d3d3d',
    clipPah: 'circle(50% at 50% 50%)',
  },
  DEAD: {
    background: '#3d3d3d',
    color: '#eee',
    clipPah: 'polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)',
  },
}

const Label = styled.p.attrs<{state: 'LIVE'|'DEAD'}>(({state}) => PALETTE[state])<{state: 'LIVE'|'DEAD', background?: string, clipPah?: string}>`
  background: ${p => p.background};
  color: ${p => p.color};
  padding: 2px 4px;
  margin: 0;
  border-radius: 5px;
  font-size: 0.8rem;

  display: inline-flex;
  align-items: center;

  transition: all 0.3s ease;

  &::before {
    content: "";
    display: block;
    background: ${p => p.color};
    width: 10px;
    height: 10px;
    margin-right: 5px;

    clip-path: ${p => p.clipPah}
  }
`

type MarkerPersonProps = {
  name: string
  state: 'LIVE'|'DEAD'
}

export const MarkerPerson: FC<MarkerPersonProps> = ({name, state = 'LIVE'}) => {
  return (
    <Label state={state}>{name}</Label>
  )
}
