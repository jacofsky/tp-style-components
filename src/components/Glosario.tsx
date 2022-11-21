import React, { useState } from 'react'
import styled from 'styled-components'
import GlosarioItem, { IProps } from './GlosarioItem'

const Glosario = () => {
  
  const [item, setItem] = useState<IProps[]>([{categoria: 'Subcontractors', cantidad: null, color: 'purple'}, {categoria: 'Training', cantidad: 0, color: 'cyan'}, {categoria: 'Pending Status', cantidad: 6, color: 'red'}, {categoria: 'Overassigned', cantidad: null, color: 'orange'}, {categoria: 'Low Allocation', cantidad: null, color: 'pink'}, ])

  const GlosarioBox = styled.div `
  display: flex;
  justify-content: space-evenly;
`

  return (
    <GlosarioBox>
        {
            item.map(({categoria, cantidad, color}) => <GlosarioItem categoria={categoria} cantidad={cantidad} color={color}/>)
        }
    </GlosarioBox>
  )
}

export default Glosario