import {FC} from 'react'
import styled from 'styled-components'

const Label = styled.p`
  background: #eee;
  padding: 2px 4px;
  margin: 0;
  border-radius: 5px;
  font-size: 0.8rem;

  display: inline-flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    background: #000;
    width: 10px;
    height: 10px;
    margin-right: 5px;
    border-radius: 50%;
  }
`

type MarkerPersonProps = {
  name: string
  state?: 'LIVE'|'DEAD'
}

export const MarkerPerson: FC<MarkerPersonProps> = ({name, state = 'LIVE'}) => {
  return (
    <Label>{name}</Label>
  )
}
