import React from 'react'
import styled from 'styled-components'

export interface IProps {
    categoria: string,
    cantidad: number|null,
    color: string
}

const GlosarioItem = ({categoria, cantidad, color}:IProps) => {

  const Item = styled.div`
    display: flex;
    align-items: center;
  `

  const Point = styled.div`
    width: 15px;
    height: 15px;
    margin-right: 10px;
    background-color: ${color};
    border-radius: 50%;
  `

  const Info = styled.div`
    display: flex; 
    flex-direction: column;
  `

  const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bolder;
    margin: 0;

  `

  const SubText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    margin: 0;

  `

  const SubNumber = styled.span`
    color: ${color};
  `

  return (
    <Item>
        <Point/>
        <Info>
            <Title>{categoria}</Title>
            {
                cantidad != null && <SubText>{cantidad > 0 ? <SubNumber>{cantidad}</SubNumber> : 'No'} Resources</SubText>
            }

        </Info>
    </Item>
  )
}

export default GlosarioItem