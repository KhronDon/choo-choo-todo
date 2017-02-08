import React, { Component } from 'react'

const CLOUD_WIDTH = 256
const CLOUD_HEIGHT = 128
const CLOUD_COUNT = 6

const CLOUDS = [
  require('../images/cloud_0.svg'),
  require('../images/cloud_1.svg')
]

import cloudBG from '../images/cloud_b.svg'
import cloudFG from '../images/cloud_f.svg'

class Background extends Component {

  state = {
    clouds: []
  }

  style = {
    backgroundColor: '#8FCED1',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1000,
    backgroundImage: `url(${cloudFG}), url(${cloudBG})`,
    backgroundSize: '120%',
    backgroundPosition: '0 100%, 0 100%',
    backgroundRepeat: 'repeat-x'
  }

  componentDidMount () {
    let clouds = []
    for (let i = 0; i < CLOUD_COUNT; i++) {
      const cloud = this.spawn()
      cloud.x = Math.floor(Math.random() * this.refs.bg.clientWidth)
      clouds.push(cloud)
    }
    clouds.sort((a, b) => a.t < b.t)
    this.setState({ clouds })
    this.request = window.requestAnimationFrame(this.tick)
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.request)
  }

  spawn () {
    return {
      x: -CLOUD_WIDTH,
      y: Math.floor(Math.random() * this.refs.bg.clientHeight * 0.66),
      t: (t => (--t) * t * t + 1)(Math.max(Math.random(), 0.2))
    }
  }

  tick = () => {
    const clouds = this.state.clouds.slice()
    for (let i = 0; i < clouds.length; i++) {
      if (clouds[i].x > this.refs.bg.clientWidth) {
        clouds[i] = this.spawn()
      } else {
        clouds[i].x += clouds[i].t / 2
      }
    }
    this.setState({ clouds })
    this.request = window.requestAnimationFrame(this.tick)
  }

  render () {
    return <div className='Background' style={this.style} ref='bg'>
      {this.state.clouds.map((c, i) => <Cloud {...c} key={i} />)}
    </div>
  }
}

const Cloud = ({x, y, t}) => <div style={{
  backgroundImage: `url(${CLOUDS[Math.round(t)]})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  width: CLOUD_WIDTH,
  height: CLOUD_HEIGHT,
  // backgroundColor: 'white',
  position: 'absolute',
  transform: `scale(${t})`,
  opacity: t,
  left: x,
  top: y
}} />

export default Background
