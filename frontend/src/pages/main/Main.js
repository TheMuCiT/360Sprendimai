import React from 'react'

import { ReactComponent as BookNow } from '../../icons/BookNow.svg'
import { ReactComponent as StarIcon } from '../../icons/StarIcon.svg'

import mainBC from '../../images/Main.webp'
import Video360 from '../../images/360Video.png'
import Animation from '../../components/animation/Animation'

import './main.css'

const Main = () => {
  return (
    <div className='mainContainer'>
      <img src={mainBC} alt='' className='mainImage' />
      <div className='componentFirst' style={{ paddingTop: '150px' }}>
        <div className='componentSecond'>
          <div className='main'>
            <div className='mainLeft'>
              <div className='mainTitle'>Property Marketing Excellence</div>
              <div className='mainSubTitle'>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons'>
                <div className='mainButton'>Book a call</div>
                <div className='mainButtonInner'>Read more</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight'>
              <div className='line' />
            </div>
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
              <div className='mainTitle'>Property Marketing Excellence</div>
              <div className='mainSubTitle'>
                Photoplan Are Dedicated Professionals Who Love What We Do. Our Incredible Team Work Tirelessly To
                Deliver Exceptional Service While Producing High-end Digital Projects For Commercial & Residential
                Properties Throughout The UK And Worldwide!
              </div>
              <div className='mainButtons'>
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
      <Animation />
    </div>
  )
}

export default Main
