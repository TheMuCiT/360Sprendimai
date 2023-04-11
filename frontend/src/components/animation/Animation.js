import React from 'react'
import './animation.css'
const Animation = () => {
  window.onscroll = function () {
    scrollAnimation()
  }

  const scrollAnimation = () => {
    let offset = 500
    let WindowsPosition = window.pageYOffset
    let windowBottomPosition = WindowsPosition + window.outerHeight
    let videoSectionOne = document.getElementsByClassName('componentFirst')
    let mainVideoTextAnimationIndex = document.getElementsByClassName('mainVideoTextAnimationIndex')
    let mainVideoIMGAnimationIndex = document.getElementsByClassName('mainVideoIMGAnimationIndex')
    let mainGridLineIndex = document.getElementsByClassName('mainGridLineIndex')
    let mainRightGridItem = document.getElementsByClassName('mainRightGridItem')

    //main section first video section

    if (videoSectionOne[1].offsetTop < windowBottomPosition - offset) {
      mainVideoTextAnimationIndex[0].classList.add('mainVideoTextAnimation')
      mainVideoIMGAnimationIndex[0].classList.add('mainVideoIMGAnimation')

      //add to line

      mainGridLineIndex[0].classList.add('mainGridUpLineAnimation')
      mainGridLineIndex[1].classList.add('mainGridSideLineAnimation')
      mainGridLineIndex[2].classList.add('mainGridSideLineAnimation')

      mainRightGridItem[0].classList.add('gridItemAnimation1')
      mainRightGridItem[1].classList.add('gridItemAnimation3')
      mainRightGridItem[2].classList.add('gridItemAnimation2')
      mainRightGridItem[3].classList.add('gridItemAnimation4')
    }

    //main section second video section

    if (videoSectionOne[3].offsetTop < windowBottomPosition - offset) {
      mainVideoTextAnimationIndex[1].classList.add('mainVideoTextAnimation')
      mainVideoIMGAnimationIndex[1].classList.add('mainVideoIMGAnimation')

      //add to line

      mainGridLineIndex[3].classList.add('mainGridUpLineAnimation')
      mainGridLineIndex[4].classList.add('mainGridSideLineAnimation')
      mainGridLineIndex[5].classList.add('mainGridSideLineAnimation')

      mainRightGridItem[4].classList.add('gridItemAnimation1')
      mainRightGridItem[5].classList.add('gridItemAnimation3')
      mainRightGridItem[6].classList.add('gridItemAnimation2')
      mainRightGridItem[7].classList.add('gridItemAnimation4')
    }
  }

  return <></>
}

export default Animation
