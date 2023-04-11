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
        <div className='footerMain componentSecond borderColorOnWhite'>
          <div className='footerMainLeft'>
            <div className='footerMainLeftGrid'>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG />
              </div>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG className='footerHide' />
              </div>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG className='footerHide' />
              </div>
              <div className='footerMainLeftItem'>
                <FooterLogoSVG className='footerHide' />
              </div>
            </div>
          </div>
          <div className='line lineWhiteBackground' />
          <div className='footerMainRight'>
            <div className='footerMainRightContainer'>
              <div className='footerMainRightItem'>
                <div className='footerMainRightItemTitle'>MEDIJA</div>
                <div className='footerMainRightItemText'>Linkedin</div>
                <div className='footerMainRightItemText'>Instagram</div>
                <div className='footerMainRightItemText'>Medium</div>
                <div className='footerMainRightItemText'>Facebook</div>
              </div>
              <div className='footerMainRightItem'>
                <div className='footerMainRightItemTitle'>MENIU</div>
                <div className='footerMainRightItemText'>Pradzia</div>
                <div className='footerMainRightItemText'>Projektai</div>
                <div className='footerMainRightItemText'>Apie Mus</div>
                <div className='footerMainRightItemText'>Funkcija</div>
                <div className='footerMainRightItemText'>Kainorastis</div>
              </div>
              <div className='footerMainRightItem'>
                <div className='footerMainRightItemTitle'>PAPILDOMA</div>
                <div className='footerMainRightItemText'>Pagalba</div>
                <div className='footerMainRightItemText'>Kontaktai</div>
                <div className='footerMainRightItemText'>Pavyzdziai</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footerBC componentFirst'>
        <div className='footerMain componentSecond borderColorOnWhite borderTopWhite'>
          <div className='footerMainLeftUnder'>
            <div className='footerUnderTextContainer'>
              <div className='footerUnderText'>© 360 Sprendimai</div>
            </div>
            <div className='footerUnderSubText'>
              Nekilnojamojo turto rinkodaros pasaulis keičiasi, tad kodėl gi nepriėmus šio pokyčio ir nepasiūlius
              klientams kažko „kitokio“, kuris padėtų gauti šias instrukcijas
            </div>
          </div>
          <div className='line lineWhiteBackground' />
          <div className='footerMainRightUnder'>
            <div className='footerMainRightLeft'></div>
            <div className='line' />
            <div className='footerMainRightRight'>
              <div className='footerMainRightIcon'>
                <BookNow className='footerMainRightSVG' />
              </div>
              <div className='footerMainRightText'>Kontaktai</div>
            </div>
          </div>
        </div>
      </div>

      <div className='footerBCMobile componentFirst'>
        <div className='componentSecond borderColorOnWhite'>
          <div className='footerMobile'>
            <div className='footerMobileLeft'>
              <div className='footerMobileLeftIcon'>
                <FooterLogoSVG />
              </div>
              <div className='footerLine' />
              <div className='footerMainRightRight'>
                <div className='footerMainRightIcon'>
                  <BookNow className='footerMainRightSVG' />
                </div>
                <div className='footerMainRightText'>Subscribe</div>
              </div>
            </div>
            <div className='line'></div>
            <div className='footerMobileRight'>
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

              <div className='FooterLineMobile' />
              <div className='footerMainLeftUnder'>
                <div className='footerUnderTextContainer'>
                  <div className='footerUnderText'>© Wortex, ltd.</div>
                  <div className='footerUnderText'>Privacy Policy</div>
                  <div className='footerUnderText'>Responsible Disclosure</div>
                  <div className='footerUnderText'>Terms of use</div>
                </div>
                <div className='footerUnderSubText'>
                  Everyone has the right to freedom of thought, conscience and religion; this right includes
                  freedom to change his religion or belief, and freedom, either alone or in community with others
                  and in public or private.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
