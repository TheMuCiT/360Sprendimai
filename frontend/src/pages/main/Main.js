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
        <div className='componentSecond' style={{ height: '190px' }}>
          <div className='mainNoBorder'>
            <div className='mainLeft' style={{ backgroundColor: 'transparent' }}></div>
            <div className='line' />
            <div className='mainRight'>
              <div className='line' />
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst'>
        <div className='componentSecond'>
          <div className='main'>
            <div className='mainLeft'>
              <div className='mainTitle' style={{ padding: '20px 50px 0' }}>
                Property Marketing Excellence
              </div>
              <div className='mainSubTitle' style={{ padding: '0 50px' }}>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons' style={{ padding: '0 50px 20px' }}>
                <div className='mainButton'>Book a call</div>
                <div className='mainButtonInner'>Read more</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight'>
              <div className='line' />
            </div>
          </div>
          <div className='lineFullContainer'>
            <div className='lineFull' />
          </div>
          <div className='main'>
            <div className='mainLeftEmpty'></div>
            <div className='line' />
            <div className='mainRight'>
              <div className='mainRightLeft'></div>
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
          <div className='main'>
            <div className='mainLeft' style={{ backgroundColor: 'transparent' }}>
              <div className='mainTitle' style={{ padding: '0 90px' }}>
                Property Marketing Excellence
              </div>
              <div className='mainSubTitle' style={{ padding: '0 90px' }}>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons' style={{ padding: '0 90px' }}>
                <div className='mainButton'>Book a call</div>
                <div className='mainButtonInner'>Read more</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight' style={{ flexDirection: 'column' }}>
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
          <div className='main'>
            <div className='mainLeft mainLeftOversizeImage'>
              <div className='mainTitle' style={{ color: '#15181B', maxWidth: '350px', padding: '0 90px' }}>
                Our finished Projects
              </div>
              <div className='mainSubTitle' style={{ padding: '0 90px' }}>
                Photoplan are dedicated professionals who love what we do. Our incredible team work tirelessly to
                deliver exceptional service while producing high-end digital projects for commercial & residential
                properties throughout the UK and Worldwide!
              </div>
              <div className='mainButtons' style={{ padding: '0 90px' }}>
                <div className='mainButton' style={{ backgroundColor: '#15181B', color: '#fff' }}>
                  Book a call
                </div>
                <div className='mainButtonInner' style={{ borderColor: '#15181B', color: '#15181B' }}>
                  Read more
                </div>
              </div>
            </div>
            <div className='mainRight' style={{ width: '100%' }}>
              <img src={Project360} alt='' className='mainProjectImage' />
              <div className='mainRightArrowsContainer'>
                <div className='mainRightArrow mainRightArrowLine'>
                  <MainArrow />
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
          <div className='main'>
            <div className='mainLeft' style={{ backgroundColor: 'transparent' }}>
              <div className='mainTitle' style={{ padding: '0 90px' }}>
                Property Marketing Excellence
              </div>
              <div className='mainSubTitle' style={{ padding: '0 90px' }}>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons' style={{ padding: '0 90px' }}>
                <div className='mainButton'>Book a call</div>
                <div className='mainButtonInner'>Read more</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight' style={{ flexDirection: 'column' }}>
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
          <div className='main'>
            <div className='mainLeft mainLeftOversizeImage2' style={{ borderRight: '1px solid #E1E2E3' }}>
              <div className='mainTitle' style={{ color: '#15181B', maxWidth: '350px', padding: '0 90px' }}>
                Subscription plans
              </div>
              <div className='mainSubTitle' style={{ padding: '0 90px' }}>
                Photoplan are dedicated professionals who love what we do. Our incredible team work tirelessly to
                deliver exceptional service while producing high-end digital projects for commercial & residential
                properties throughout the UK and Worldwide!
              </div>
              <div className='mainButtons' style={{ padding: '0 90px' }}>
                <div className='mainButton' style={{ backgroundColor: '#15181B', color: '#fff' }}>
                  Book a call
                </div>
                <div className='mainButtonInner' style={{ borderColor: '#15181B', color: '#15181B' }}>
                  Read more
                </div>
              </div>
            </div>
            <div className='mainRight' style={{ width: '100%' }}>
              <div className='mainRightFull'>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlan'>Subscription plan</div>
                    <div className='mainRightFullTitle'>IndividualX</div>
                    <div className='mainRightFullOption'>Everything offered with invidual plan</div>
                    <div className='mainRightFullOption'>Up to 100 m2 apartament</div>
                    <div className='mainRightFullOption'>Service & Development</div>
                  </div>
                  <div className='mainRightFullItemRight'>
                    <span style={{ fontSize: '28px', marginRight: '10px' }}>€</span>50.00
                  </div>
                </div>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlan'>Subscription plan</div>
                    <div className='mainRightFullTitle'>TeamX</div>
                    <div className='mainRightFullOption'>Everything offered with invidual plan</div>
                    <div className='mainRightFullOption'>Up to 100 m2 apartament</div>
                    <div className='mainRightFullOption'>Service & Development</div>
                  </div>
                  <div className='mainRightFullItemRight'>
                    <span style={{ fontSize: '28px', marginRight: '10px' }}>€</span> 100.00
                  </div>
                </div>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlan'>Subscription plan</div>
                    <div className='mainRightFullTitle'>ProfessionalX</div>
                    <div className='mainRightFullOption'>Everything offered with invidual plan</div>
                    <div className='mainRightFullOption'>Up to 100 m2 apartament</div>
                    <div className='mainRightFullOption'>Service & Development</div>
                  </div>
                  <div className='mainRightFullItemRight'>∞</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#15181B' }}>
        <div className='componentSecond' style={{ borderTop: 'none' }}>
          <div className='main'>
            <div className='mainLeft' style={{ backgroundColor: 'transparent' }}>
              <div className='mainTitle' style={{ maxWidth: '300px', padding: '0 90px' }}>
                Let’s Collaborate
              </div>
              <div className='mainSubTitle' style={{ padding: '0 90px' }}>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
            </div>
            <div className='line' />
            <div
              className='mainRight'
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
