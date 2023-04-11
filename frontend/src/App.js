import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './pages/main/Main'
import Footer from './components/footer/Footer'

import { ReactComponent as Logo } from './icons/FooterLogo.svg'

const App = () => {
  const [preloader, setPreloader] = useState(false)
  const [loadWebSite, setLoadWebSite] = useState(false)

  //ANIMATION

  let body = document.body.style
  body.overflowY = 'hidden'
  useEffect(() => {
    if (!preloader) {
      setTimeout(() => {
        setLoadWebSite(true)
      }, 2500)
      setTimeout(() => {
        body.overflowY = 'scroll'
        body.scrollBehavior = 'smooth'
      }, 8500)
      setPreloader(true)
    }
  }, [body, preloader])

  return (
    <>
      <div className='appPreLoader'>
        <Logo className='appPreLoaderIMG' />
        <div className='appPreloaderBackground' />
      </div>
      <div className={loadWebSite ? 'loadWebSite' : 'dn'}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
