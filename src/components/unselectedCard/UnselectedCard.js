import React from 'react'
import { CtUnselectedCard, CtUnselectedCardGroup, TxtCardName, TxtUnselectedCard } from './UnselectedCard.styled'

function UnselectedCard({text}) {
  return (
      <>
        <CtUnselectedCardGroup>    
            <TxtCardName>???</TxtCardName>
            <CtUnselectedCard>
              <TxtUnselectedCard text={text}>{text}</TxtUnselectedCard>      
            </CtUnselectedCard>
        </CtUnselectedCardGroup>
      </>
  )
}

export default UnselectedCard