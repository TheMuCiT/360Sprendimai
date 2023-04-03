import React from 'react'

import { ReactComponent as BookNow } from '../../icons/BookNow.svg'
import { ReactComponent as StarIcon } from '../../icons/StarIcon.svg'
import { ReactComponent as MainArrow } from '../../icons/MainArrow.svg'

import mainBC from '../../images/Main.webp'
import Project360 from '../../images/360Project.png'
import Video360 from '../../images/360Video.png'
import Animation from '../../components/animation/Animation'

import './main.css'

const Main = () => {
  return (
    <div className='mainContainer'>
      <img src={mainBC} alt='' className='mainImage' />

      <div className='componentFirst' style={{ paddingTop: '125px' }}>
        <div className='componentSecond headerComponent noTopLine'>
          <div className='lineFullContainer'>
            <div className='lineFull' />
          </div>
          <div className='mainNoBorder'>
            <div className='mainLeft' style={{ backgroundColor: 'transparent' }}></div>
            <div className='line' />
            <div className='mainRight'>
              <div className='line mobileLineHide' />
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst'>
        <div className='componentSecond noTopLine'>
          <div className='lineFullContainer'>
            <div className='lineFull' />
          </div>
          <div className='main'>
            <div className='mainLeft'>
              <div className='mainTitle mainTitlePadding'>Property Marketing Excellence</div>
              <div className='mainSubTitle mainSubTitlePadding'>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons mainButtonPadding'>
                <div className='mainButton'>Book a call</div>
                <div className='mainButtonInner'>Read more</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight'>
              <div className='line mobileLineHide' />
            </div>
          </div>
          <div className='lineFullContainer'>
            <div className='lineFull' />
          </div>
          <div className='main mainBook'>
            <div className='mainLeftEmpty'></div>
            <div className='line mobileLineHide' />
            <div className='mainRight'>
              <div className='mainRightLeft mainRightLeftMobile'></div>
              <div className='line' />
              <div className='mainRightRight'>
                <div className='mainRightIcon'>
                  <BookNow />
                </div>
                <div className='mainRightText'>Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#15181B' }}>
        <div className='componentSecond' style={{ borderTop: 'none' }}>
          <div className='main mainWithMobilePaddingTop'>
            <div className='mainLeft mainLeftMobileSmall' style={{ backgroundColor: 'transparent' }}>
              <div className='mainTitle customPadding'>Property Marketing Excellence</div>
              <div className='mainSubTitle customPadding'>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton'>Book a call</div>
                <div className='mainButtonInner'>Read more</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight mainWithMobilePaddingTop' style={{ flexDirection: 'column' }}>
              <div className='mainRightImage'>
                <img src={Video360} alt='' style={{ width: '100%' }} />
              </div>
              <div className='mainRightGrid'>
                <div className='mainRightGridItem girdLine'>
                  <div className='mainRightGridTitle'>400+</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
                <div className='mainRightGridItem'>
                  <div className='mainRightGridTitle'>23 000</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
                <div className='mainRightGridItem'>
                  <div className='mainRightGridTitle'>103</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
                <div className='mainRightGridItem girdLineBottom'>
                  <div className='mainRightGridTitle'>14</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='componentSecond' style={{ borderTop: 'none' }}>
          <div className='main withNoMarginBottom'>
            <div className='mainLeft mainLeftOversizeImage mainLeftMobileSmall'>
              <div className='mainTitle customPadding' style={{ color: '#15181B', maxWidth: '350px' }}>
                Our finished Projects
              </div>
              <div className='mainSubTitle customPadding'>
                Photoplan are dedicated professionals who love what we do. Our incredible team work tirelessly to
                deliver exceptional service while producing high-end digital projects for commercial & residential
                properties throughout the UK and Worldwide!
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton' style={{ backgroundColor: '#15181B', color: '#fff' }}>
                  Book a call
                </div>
                <div className='mainButtonInner' style={{ borderColor: '#15181B', color: '#15181B' }}>
                  Read more
                </div>
              </div>
            </div>
            <div className='mainRight mainRightWithArrows' style={{ width: '100%' }}>
              <img src={Project360} alt='' className='mainProjectImage' />
              <div className='mainRightArrowsContainer'>
                <div className='mainRightArrow mainRightArrowLine'>
                  <MainArrow className='mainRightArrowOriginal' />
                </div>
                <div className='mainRightArrow'>
                  <MainArrow className='mainRightArrowRotate' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#15181B' }}>
        <div className='componentSecond' style={{ borderTop: 'none' }}>
          <div className='main mainWithMobilePaddingTop'>
            <div className='mainLeft mainLeftMobileSmall' style={{ backgroundColor: 'transparent' }}>
              <div className='mainTitle customPadding'>Property Marketing Excellence</div>
              <div className='mainSubTitle customPadding'>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton'>Book a call</div>
                <div className='mainButtonInner'>Read more</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight mainWithMobilePaddingTop' style={{ flexDirection: 'column' }}>
              <div className='mainRightImage'>
                <img src={Video360} alt='' style={{ width: '100%' }} />
              </div>
              <div className='mainRightGrid'>
                <div className='mainRightGridItem girdLine'>
                  <div className='mainRightGridTitle'>400+</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
                <div className='mainRightGridItem'>
                  <div className='mainRightGridTitle'>23 000</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
                <div className='mainRightGridItem'>
                  <div className='mainRightGridTitle'>103</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
                <div className='mainRightGridItem girdLineBottom'>
                  <div className='mainRightGridTitle'>14</div>
                  <div className='mainRightGridText'>projects realised internationally</div>
                  <StarIcon className='mainRightGridIcon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='componentSecond' style={{ borderTop: 'none' }}>
          <div className='main mainWithMobilePaddingTop mainCustomPadding'>
            <div className='mainLeft mainLeftOversizeImage2 mainLeftMobileSmall'>
              <div className='mainTitle customPadding' style={{ color: '#15181B', maxWidth: '350px' }}>
                Subscription plans
              </div>
              <div className='mainSubTitle customPadding'>
                Photoplan are dedicated professionals who love what we do. Our incredible team work tirelessly to
                deliver exceptional service while producing high-end digital projects for commercial & residential
                properties throughout the UK and Worldwide!
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton' style={{ backgroundColor: '#15181B', color: '#fff' }}>
                  Book a call
                </div>
                <div className='mainButtonInner' style={{ borderColor: '#15181B', color: '#15181B' }}>
                  Read more
                </div>
              </div>
            </div>
            <div className='mainRight mainWithMobilePaddingTop mainRightWithWidth'>
              <div className='mainRightFull'>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlanMobile'>
                      <div className='mainRightFullPlan'>Subscription plan</div>
                      <div className='mainRightFullItemRight'>
                        <span className='mainEuro'>€</span>50.00
                      </div>
                    </div>
                    <div className=' mainRightFullPlan mainRightFullPlanHide'>Subscription plan</div>
                    <div className='mainRightFullTitle'>IndividualX</div>
                    <div className='mainRightFullOption'>Everything offered with invidual plan</div>
                    <div className='mainRightFullOption'>Up to 100 m2 apartament</div>
                    <div className='mainRightFullOption'>Service & Development</div>
                  </div>
                  <div className='mainRightFullItemRight mainRightFullItemRightHide'>
                    <span className='mainEuro'>€</span>50.00
                  </div>
                </div>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlanMobile'>
                      <div className='mainRightFullPlan'>Subscription plan</div>
                      <div className='mainRightFullItemRight'>
                        <span className='mainEuro'>€</span>100.00
                      </div>
                    </div>
                    <div className='mainRightFullPlan mainRightFullPlanHide'>Subscription plan</div>
                    <div className='mainRightFullTitle'>TeamX</div>
                    <div className='mainRightFullOption'>Everything offered with invidual plan</div>
                    <div className='mainRightFullOption'>Up to 100 m2 apartament</div>
                    <div className='mainRightFullOption'>Service & Development</div>
                  </div>
                  <div className='mainRightFullItemRight mainRightFullItemRightHide'>
                    <span className='mainEuro'>€</span> 100.00
                  </div>
                </div>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlanMobile'>
                      <div className='mainRightFullPlan'>Subscription plan</div>
                      <div className='mainRightFullItemRight'>∞</div>
                    </div>
                    <div className='mainRightFullPlan mainRightFullPlanHide'>Subscription plan</div>
                    <div className='mainRightFullTitle'>ProfessionalX</div>
                    <div className='mainRightFullOption'>Everything offered with invidual plan</div>
                    <div className='mainRightFullOption'>Up to 100 m2 apartament</div>
                    <div className='mainRightFullOption'>Service & Development</div>
                  </div>
                  <div className='mainRightFullItemRight mainRightFullItemRightHide'>∞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#15181B' }}>
        <div className='componentSecond' style={{ borderTop: 'none' }}>
          <div className='main mainWithMobilePaddingTop'>
            <div className='mainLeft mainLeftMobileSmall' style={{ backgroundColor: 'transparent' }}>
              <div className='mainTitle customPadding' style={{ maxWidth: '300px' }}>
                Let’s Collaborate
              </div>
              <div className='mainSubTitle customPadding'>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
            </div>
            <div className='line' />
            <div
              className='mainRight mainRightMobileEmail'
              style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '100px 0px' }}
            >
              <div className='mainRightPadding'>
                <div className='mainEmailTitle'>Say, Hello!</div>
                <div className='mainEmailSubTitle'>Full Name</div>
                <div className='mainEmailInput'>
                  <input type='text' className='mainEmailInputElement' placeholder='@Full Name' />
                </div>

                <div className='mainEmailSubTitle'>Email</div>
                <div className='mainEmailInput'>
                  <input type='text' className='mainEmailInputElement' placeholder='@Email' />
                </div>

                <div className='mainEmailSubTitle'>Message</div>
                <div className='mainEmailInput'>
                  <input type='text' className='mainEmailInputElement' placeholder='@Message' />
                </div>

                <div className='mainEmailSubmit'>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Animation />
    </div>
  )
}

export default Main
