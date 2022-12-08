import React from 'react';
import { CtHeader, Logo, TxtTitle } from './Header.styled';
import LogoImg from '../../assets/img/sakuraLogo.png';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <>
          <CtHeader>
              <Link to='/'><TxtTitle>SAKURA TAROT</TxtTitle></Link>
              <Logo src={LogoImg} alt='Sakura logo'/>
          </CtHeader>
      </>
  )
}

export default Header