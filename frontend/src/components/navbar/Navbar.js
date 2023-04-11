import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as MobileMenuSettings } from '../../icons/MobileMenuSettings.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'
import { ReactComponent as MenuDesktop } from '../../icons/MenuDesktop.svg'
import { ReactComponent as Logo } from '../../icons/Logo.svg'

import './navbar.css'
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  useEffect(() => {
    WindowChange()
  }, [])

  const HandleMobileMenu = () => {
    setMobile(!Mobile)
  }

  const WindowChange = () => {
    if (window.innerWidth > 1050) {
      setMobile(false)
    }
  }

  window.addEventListener('resize', WindowChange)
  return (
    <>
      <div className='mobileNavBarMenu'>
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen'>
                  <Logo />
                </div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <div className='navbarCenterLink opacity7'>Pradzia</div>
                <div className='navbarCenterLink opacity7'>Projektai</div>
                <div className='navbarCenterLink opacity7'>Apie Mus</div>
                <div className='navbarCenterLink opacity7'>Funkcionalumas</div>
                <div className='navbarCenterLink opacity7'>Kainorastis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='navbar navbarAnimation'>
        <div className='navbarMobile'>
          <div className='navbarCenterIcon'>
            <div className='navbarMobileTopRight '>
              <Logo />
            </div>
          </div>
        </div>
        <div className='navbarMobileButton'>
          <MobileMenuSettings className='navbarMobileHide' />
          <div className='navbarRightButton navbarMobileHide'>Book a call</div>
          <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
        </div>

        <div className='navbarContainer '>
          <div className='navbarLeft'>
            <div className='navbarLeftLogo '>
              <Logo />
            </div>
          </div>
          <div className='navbarCenter'>
            <div className='navbarCenterItem'>Pradzia</div>
            <div className='navbarCenterItem'>Projektai</div>
            <div className='navbarCenterItem'>Apie Mus</div>
            <div className='navbarCenterItem'>Funkcionalumas</div>
            <div className='navbarCenterItem'>Kainorastis</div>
          </div>
          <div className='navbarRight'>
            <div className='navbarRightItemCustom'>
              <MenuDesktop />
            </div>
            <div className='navbarRightButton'>Susisiekti</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
