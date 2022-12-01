import React from 'react'
import styled from 'styled-components'

const SideBarStyled = styled.div`
  background-color: #cbc5c5e1;
  min-height: 100vh;

  @media (min-width: 0px) and (max-width: 991px) {
    width: 50px;
    /* display: none; */
    transition: all 0.3s;
  }

  @media (min-width: 992px) {
    width: 250px;
    /* display: block; */
    transition: all 0.3s;
  }
`

const SideBarComponent = () => {
    
  return <SideBarStyled className='app-side-bar'></SideBarStyled>
}

export default React.memo(SideBarComponent)
