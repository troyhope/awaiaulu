import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/moon.json'

class NightSwitch extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }

    return (
      <>
        <Lottie options={defaultOptions} height={35} width={35} />
      </>
    )
  }
}

export default NightSwitch
