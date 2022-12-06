import React from 'react';
import { CtHeader, Logo, TxtTitle } from './Header.styled';
import LogoImg from '../../assets/img/sakuraLogo.png';


function Header() {
  return (
      <>
          <CtHeader>
              <TxtTitle>SAKURA TAROT</TxtTitle>
              <Logo src={LogoImg} alt='Sakura logo'/>
          </CtHeader>
      </>
  )
}

export default Header