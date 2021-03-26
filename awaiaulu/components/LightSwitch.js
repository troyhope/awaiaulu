import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../lotties/fire.json'

class LightSwitch extends Component {
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
        <Lottie options={defaultOptions} height={60} width={60} />
      </>
    )
  }
}

export default LightSwitch
