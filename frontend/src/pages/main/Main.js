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
      <img src={mainBC} alt='' className='mainImage mainImageAnimation' />

      <div className='componentFirst' style={{ paddingTop: '0px' }}>
        <div className='componentSecond noTopLine mainLineAnimation'>
          <div className='lineFullContainer' style={{ marginTop: '125px' }}>
            <div className='lineFull lineSideAnimation' />
          </div>
          <div className='mainNoBorder'>
            <div className='mainLeft mainLeftCustom'>
              <div className='verticalLine' />
            </div>
            <div className='line' />
            <div className='mainRight'>
              <div className='line mobileLineHide' />
            </div>
          </div>
          <div className='lineFullContainer'>
            <div className='lineFull lineSideAnimation' />
          </div>
          <div className='main'>
            <div className='mainLeft mainLeftOpacityAnimation'>
              <div className='mainTitle mainTitlePadding'>360/3D Sprendimai Jūsų Poreikiams</div>
              <div className='mainSubTitle mainSubTitlePadding'>
                Nekilnojamojo turto rinkodaros pasaulis keičiasi, tad kodėl gi nepriėmus inovatyvių pokyčių ir
                pasiūlyti klientams šiuolaikiškų sprendimų.
              </div>
              <div className='mainButtons mainButtonPadding'>
                <div className='mainButton'>Susisiekti</div>
                <div className='mainButtonInner'>Daugiau ...</div>
              </div>
            </div>
            <div className='line ' />
            <div className='mainRight'>
              <div className='line mobileLineHide' />
            </div>
          </div>
          <div className='lineFullContainer'>
            <div className='lineFull lineSideAnimation' />
          </div>
          <div className='main mainBook'>
            <div className='mainLeftEmpty'>
              <div className='mainLeftCustom2'>
                <div className='verticalLine' />
              </div>
            </div>
            <div className='line mobileLineHide ' />
            <div className='mainRight'>
              <div className='mainRightLeft mainRightLeftMobile'></div>
              <div className='line' />
              <div className='mainRightRight mainRightAnimation'>
                <div className='mainRightIcon'>
                  <BookNow />
                </div>
                <div className='mainRightText'>Registracija</div>
              </div>
            </div>
          </div>
          <div className='lineFullContainer'>
            <div className='lineFull lineSideAnimation' />
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#15181B' }}>
        <div className='componentSecond' style={{ borderTop: 'none' }}>
          <div className='main mainWithMobilePaddingTop'>
            <div
              className='mainLeft mainLeftMobileSmall mainVideoTextAnimationIndex'
              style={{ backgroundColor: 'transparent' }}
            >
              <div className='mainTitle customPadding'>Virtualus gyvenamųjų ir komercinių objektų Pristatymas</div>
              <div className='mainSubTitle customPadding'>
                Perkelkite savo nuosabybę į virtualią erdvę ir padėkite sutaupyti laiko sau bei savo klientams.
                Galimyė rinktis tarp daugybę inovatyvių sprendimų, kurie padės pristatyti Jūsų projektą kitaip.
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton'>Susisiekti</div>
                <div className='mainButtonInner'>Daugiau ...</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight mainWithMobilePaddingTop' style={{ flexDirection: 'column' }}>
              <div className='mainRightImage'>
                <img src={Video360} alt='' className='mainVideoIMG mainVideoIMGAnimationIndex ' />
              </div>
              <div className='mainRightGrid'>
                <div className='mainRightGridLeft'>
                  <div className='mainRightGridItem  '>
                    <div className='mainRightGridTitle'>100+</div>
                    <div className='mainRightGridText'>Daugiau negu 100 Pabaigtų Projektų </div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                  <div className='mainRightGridItem '>
                    <div className='mainRightGridTitle'>23 000m2</div>
                    <div className='mainRightGridText'>projects realised internationally</div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                </div>
                <div className='mainGridLine mainGridLineIndex ' />
                <div className='mainGridLineAbsoluteTop mainGridLineIndex ' />
                <div className='mainGridLineAbsolute mainGridLineIndex ' />
                <div className='mainRightGridRight'>
                  <div className='mainRightGridItem '>
                    <div className='mainRightGridTitle'>103</div>
                    <div className='mainRightGridText'>projects realised internationally</div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                  <div className='mainRightGridItem '>
                    <div className='mainRightGridTitle'>14</div>
                    <div className='mainRightGridText'>projects realised internationally</div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='componentSecond borderColorOnWhite' style={{ borderTop: 'none' }}>
          <div className='main withNoMarginBottom'>
            <div className='mainLeft mainLeftOversizeImage mainLeftMobileSmall mainVideoTextAnimation'>
              <div className='mainTitle customPadding' style={{ color: '#15181B', maxWidth: '350px' }}>
                Platus panaudojimas visose rinkose
              </div>
              <div className='mainSubTitle customPadding'>
                360 Turai sutinkami ne tik Neklinojo turto pristatymui bet ir komerciniuose tiskluose tokiuose
                kaip: konstrukcij...............
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton' style={{ backgroundColor: '#15181B', color: '#fff' }}>
                  Susisiekti
                </div>
                <div className='mainButtonInner' style={{ borderColor: '#15181B', color: '#15181B' }}>
                  Daugiau ...
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
            <div
              className='mainLeft mainLeftMobileSmall mainVideoTextAnimationIndex'
              style={{ backgroundColor: 'transparent' }}
            >
              <div className='mainTitle customPadding'>
                Jokio veltui pradinio peržiūros susitikimo su pardavėju
              </div>
              <div className='mainSubTitle customPadding'>
                nes pirmoji peržiūra atliekama internetu Faktinės peržiūros realiuoju laiku yra potencialūs rimti
                pirkėjai. Išnaikina laiko švaistytojus Ši naujoviška technologija padės jūsų nekilnojamojo turto
                agentūrai išsiskirti iš konkurentų Neįtikėtinai patogus naudoti – pradinio lygio įgūdžiai,
                reikalingi norint peržiūrėti ir valdyti kelionę – gali būti naudojamas telefonuose, planšetiniuose
                kompiuteriuose ir staliniuose kompiuteriuose
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton'>Susisiekti</div>
                <div className='mainButtonInner'>Daugiau ...</div>
              </div>
            </div>
            <div className='line' />
            <div className='mainRight mainWithMobilePaddingTop' style={{ flexDirection: 'column' }}>
              <div className='mainRightImage'>
                <img src={Video360} alt='' className='mainVideoIMG mainVideoIMGAnimationIndex' />
              </div>
              <div className='mainRightGrid'>
                <div className='mainRightGridLeft'>
                  <div className='mainRightGridItem  '>
                    <div className='mainRightGridTitle'>100+</div>
                    <div className='mainRightGridText'>Daugiau negu 100 Pabaigtų Projektų </div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                  <div className='mainRightGridItem '>
                    <div className='mainRightGridTitle'>23 000m2</div>
                    <div className='mainRightGridText'>projects realised internationally</div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                </div>
                <div className='mainGridLine mainGridLineIndex' />
                <div className='mainGridLineAbsoluteTop mainGridLineIndex' />
                <div className='mainGridLineAbsolute mainGridLineIndex' />
                <div className='mainRightGridRight'>
                  <div className='mainRightGridItem '>
                    <div className='mainRightGridTitle'>103</div>
                    <div className='mainRightGridText'>projects realised internationally</div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                  <div className='mainRightGridItem '>
                    <div className='mainRightGridTitle'>14</div>
                    <div className='mainRightGridText'>projects realised internationally</div>
                    <StarIcon className='mainRightGridIcon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='componentFirst' style={{ backgroundColor: '#FFFFFF' }}>
        <div className='componentSecond borderColorOnWhite' style={{ borderTop: 'none' }}>
          <div className='main mainWithMobilePaddingTop mainCustomPadding'>
            <div className='mainLeft mainLeftOversizeImage2 mainLeftMobileSmall'>
              <div className='mainTitle customPadding' style={{ color: '#15181B', maxWidth: '350px' }}>
                Skirtingi planai, skirtingiems Tisklams
              </div>
              <div className='mainSubTitle customPadding'>
                Mūsų planai pritaikyti tiek Individualiam, tiek komerciniam naudojimui
              </div>
              <div className='mainButtons customPadding mobileColumnButtons'>
                <div className='mainButton' style={{ backgroundColor: '#15181B', color: '#fff' }}>
                  Susisiekti
                </div>
                <div className='mainButtonInner' style={{ borderColor: '#15181B', color: '#15181B' }}>
                  Atsisiusti .pdf
                </div>
              </div>
            </div>
            <div className='mainRight mainWithMobilePaddingTop mainRightWithWidth'>
              <div className='mainRightFull'>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlanMobile'>
                      <div className='mainRightFullPlan'>Planai jums</div>
                      <div className='mainRightFullItemRight'>
                        <span className='mainEuro'>€</span>50.00
                      </div>
                    </div>
                    <div className=' mainRightFullPlan mainRightFullPlanHide'>Planai jums</div>
                    <div className='mainRightFullTitle'>StandartinisX</div>
                    <div className='mainRightFullOption'>360 sprendimas Jūsų nuosavybei</div>
                    <div className='mainRightFullOption'>Iki 100 M2 Plotas</div>
                    <div className='mainRightFullOption'>Service & Development</div>
                  </div>
                  <div className='mainRightFullItemRight mainRightFullItemRightHide'>
                    <span className='mainEuro'>€</span>50.00
                  </div>
                </div>
                <div className='mainRightFullItem'>
                  <div className='mainRightFullItemLeft'>
                    <div className='mainRightFullPlanMobile'>
                      <div className='mainRightFullPlan'>Planai jums</div>
                      <div className='mainRightFullItemRight'>
                        <span className='mainEuro'>€</span>100.00
                      </div>
                    </div>
                    <div className='mainRightFullPlan mainRightFullPlanHide'>Planai jums</div>
                    <div className='mainRightFullTitle'>KomercinisX</div>
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
                      <div className='mainRightFullPlan'>Planai jums</div>
                      <div className='mainRightFullItemRight'>∞</div>
                    </div>
                    <div className='mainRightFullPlan mainRightFullPlanHide'>Planai jums</div>
                    <div className='mainRightFullTitle'>InvidualusX</div>
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
