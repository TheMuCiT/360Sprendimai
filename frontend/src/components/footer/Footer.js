import React from 'react'

import { ReactComponent as BookNow } from '../../icons/BookNow.svg'
import { ReactComponent as FooterLogoSVG } from '../../icons/FooterLogo.svg'

import './footer.css'
const Footer = () => {
  // const handleDiscord = () => {
  //   window.open('')
  // }

  // const handleTwitter = () => {
  //   window.open('')
  // }

  // const handleM = () => {
  //   window.open('')
  // }
  return (
    <>
      <div className='footerBC componentFirst'>
        <div className='footerMain componentSecond'>
          <div className='footerMainLeft'>
            <div className='footerMainLeftGrid'>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG />
              </div>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG />
              </div>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG />
              </div>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG />
              </div>
            </div>
          </div>
          <div className='line' />
          <div className='footerMainRight'>
            <div className='footerMainRightContainer'>
              <div className='footerMainRightItem'>
                <div className='footerMainRightItemTitle'>SOCIALS</div>
                <div className='footerMainRightItemText'>Linkedin</div>
                <div className='footerMainRightItemText'>Instagram</div>
                <div className='footerMainRightItemText'>Medium</div>
                <div className='footerMainRightItemText'>Facebook</div>
              </div>
              <div className='footerMainRightItem'>
                <div className='footerMainRightItemTitle'>BRAND</div>
                <div className='footerMainRightItemText'>About</div>
                <div className='footerMainRightItemText'>Product</div>
                <div className='footerMainRightItemText'>Blog</div>
                <div className='footerMainRightItemText'>Deployment</div>
                <div className='footerMainRightItemText'>News</div>
                <div className='footerMainRightItemText'>Upcoming</div>
              </div>
              <div className='footerMainRightItem'>
                <div className='footerMainRightItemTitle'>RESOURCES</div>
                <div className='footerMainRightItemText'>Support</div>
                <div className='footerMainRightItemText'>FAQs</div>
                <div className='footerMainRightItemText'>Careers</div>
                <div className='footerMainRightItemText'>Contact Us</div>
                <div className='footerMainRightItemText'>Sigh up</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footerBC componentFirst'>
        <div className='footerMain componentSecond '>
          <div className='footerMainLeftUnder'>
            <div className='footerUnderTextContainer'>
              <div className='footerUnderText'>© Wortex, ltd.</div>
              <div className='footerUnderText'>Privacy Policy</div>
              <div className='footerUnderText'>Responsible Disclosure</div>
              <div className='footerUnderText'>Terms of use</div>
            </div>
            <div className='footerUnderSubText'>
              Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to
              change his religion or belief, and freedom, either alone or in community with others and in public or
              private.
            </div>
          </div>
          <div className='line' />
          <div className='footerMainRightUnder'>
            <div className='footerMainRightLeft'></div>
            <div className='line' />
            <div className='footerMainRightRight'>
              <div className='footerMainRightIcon'>
                <BookNow className='footerMainRightSVG' />
              </div>
              <div className='footerMainRightText'>Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
