import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
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
    <div className='navbar'>
      <div className='navbarMobile'>
        <div className='navbarCenterIcon'>
          <div className='navbarMobileTopRight '>MobileLeftTitle</div>
        </div>
      </div>
      <div className='navbarMobileButton'>
        <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen'>MobileMenuText</div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <div className='navbarCenterLink opacity7'>MobileMenuMiddleText</div>
                <div className='navbarCenterLink navbarRightButton'>MobileMenuButton</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='navbarContainer SlideRightAnimation'>
        <div className='navbarLeft'>
          <div className='navbarLeftLogo '>
            <Logo />
          </div>
        </div>
        <div className='navbarCenter'>
          <div className='navbarCenterItem'>Home</div>
          <div className='navbarCenterItem'>Pricing</div>
          <div className='navbarCenterItem'>Project</div>
          <div className='navbarCenterItem'>About Company</div>
          <div className='navbarCenterItem'>Contact</div>
        </div>
        <div className='navbarRight'>
          <div className='navbarRightItemCustom'>
            <MenuDesktop />
          </div>
          <div className='navbarRightButton'>Book a call</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
