import React from 'react';
import { thisExpression } from '@babel/types';

class SpaceButton extends React.PureComponent {

  constructor (props) {
    super(props)
    const project = window.Theatre.getProject('SpaceButton')
    const baseTimeline = project.getTimeline('Base')
    const jupiter = baseTimeline.getObject('Jupiter', {}, {
      props: {
        angle: { type: 'number' },
        startMiddle: { type: 'number' }
      }
    })
    jupiter.onValuesChange(({ angle, startMiddle }) => {
      this.setState({ angle, startMiddle })
    })
  }

  state = {
    angle: 0,
    startMiddle: 0
  }

  componentDidMount() {

  }

  render() {

    const { startMiddle } = this.state

    const angle = this.state.angle / 360;
    const topWidth = 2000;
    const middleWidth = 3770;

    const topX = (angle % 1 * -topWidth) + topWidth / 2;
    const middleX = (angle % 1 * -middleWidth) - startMiddle;

    return (
      <div>
        <svg viewBox='0 0 1600 706' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round'
        strokeMiterlimit='1.414'>
            <use id='Button' x='16.984' y='20.364' width='1565.75' height='665.551'
            transform='scale(.99984 .99933)' />
            <path id='Button1' d='M1499.71,353.126c0.955,-128.531 -56.63,-252.762 -126.381,-252.762c0,0 -226.04,38.187 -572.177,38.187c-314.903,0 -574.238,-38.187 -574.238,-38.187c-69.752,0 -125.609,124.141 -125.934,252.762c-0.336,132.984 56.182,252.762 125.934,252.762c0,0 254.047,-48.673 574.238,-48.673c320.19,0 572.177,48.673 572.177,48.673c69.751,0 125.393,-119.854 126.381,-252.762Z'
            fill='#ebebeb' fillOpacity='0' />
            <clipPath id='_clip2'>
                <path d='M1499.71,353.126c0.955,-128.531 -56.63,-252.762 -126.381,-252.762c0,0 -226.04,38.187 -572.177,38.187c-314.903,0 -574.238,-38.187 -574.238,-38.187c-69.752,0 -125.609,124.141 -125.934,252.762c-0.336,132.984 56.182,252.762 125.934,252.762c0,0 254.047,-48.673 574.238,-48.673c320.19,0 572.177,48.673 572.177,48.673c69.751,0 125.393,-119.854 126.381,-252.762Z'
                />
            </clipPath>
            <g clipPath='url(#_clip2)'>
                <rect id='Background' x='40.945' y='35.488' width='1520.42' height='635.828'
                fill='url(#_Linear3)' />
                <circle id='Planet' cx='800.126' cy='1104.12' r='844.072' fill='url(#_Radial4)'
                />
                <clipPath id='_clip5'>
                    <circle cx='800.126' cy='1104.12' r='844.072' />
                </clipPath>
                <g clipPath='url(#_clip5)'>
                    <g id='PlanetMiddleLayer' style={{ transform: `translateX(${middleX}px) translateY(40px)` }}>
                      <path fill="#ee7b83" d='M3304.71,410.696c138.737,0.253 724.297,73.178 821.197,82.767c97.078,9.607 159.477,-26.075 225.408,-30.093c117.895,-7.183 439.196,60.416 555.592,39.219c131.351,-23.92 501.629,-82.994 823.391,-46.845c159.088,17.873 509.248,-55.019 812.887,-71.398c283.972,-15.317 487.175,26.237 527.559,26.349c7.77,22.728 9.307,67.712 0,98.397c-38.927,-0.005 -118.355,-8.556 -381.79,-62.705c-147.628,-30.345 -768.994,125.95 -1121.58,83.32c-223.664,-27.043 -561.699,80.784 -637.469,77.34c-182.709,-8.303 -507.997,-109.747 -570.805,-113.266c-90.478,-5.069 -228.365,58.511 -301.488,57.552c-94.857,-1.243 -176.869,-20.013 -335.598,-42.241c-203.089,-28.44 -357.709,-0.385 -417.299,-0.003l-0.001,0.003l-0.532,-0.001l-0.229,0.001l0,-0.001c-39.202,-0.116 -119.3,-8.906 -381.029,-62.704c-147.628,-30.345 -768.994,125.95 -1121.58,83.32c-223.663,-27.043 -561.699,80.784 -637.468,77.34c-182.71,-8.303 -507.998,-109.747 -570.806,-113.266c-90.477,-5.069 -228.365,58.511 -301.487,57.552c-94.858,-1.243 -176.87,-20.013 -335.599,-42.241c-203.961,-28.562 -359.037,-0.143 -418.061,0c-0.173,-40.338 -0.876,-55.127 0,-98.397c137.341,-0.015 724.88,73.161 821.958,82.768c97.079,9.607 159.477,-26.075 225.408,-30.093c117.895,-7.183 439.196,60.416 555.593,39.219c131.351,-23.92 501.628,-82.994 823.39,-46.845c159.089,17.873 509.249,-55.019 812.887,-71.398c283.972,-15.317 487.175,26.237 527.559,26.349l0,0.001Z'
                      />
                    </g>
                    <g id='PlanetTopLayer' style={{ transform: `translateX(${topX}px)` }}>
                        <path d='M1037.18,289.339l1998.1,-0.873l0,154.102c0,0 -243.445,-21.188 -345.009,-53.072c-145.86,-45.788 -326.11,57.954 -427.934,83.342c-234.386,58.44 -313.674,-3.951 -497.957,-61.669c-127.85,-40.044 -313.848,22.454 -494.312,45.183c-79.656,10.032 -167.143,-15.384 -232.951,-13.763l0,-0.027c-4.57,-0.4 -244.348,-21.487 -344.943,-53.066c-145.86,-45.788 -326.11,57.954 -427.934,83.342c-234.386,58.44 -313.674,-3.951 -497.956,-61.669c-127.85,-40.044 -313.849,22.454 -494.313,45.183c-79.655,10.032 -167.142,-15.384 -232.951,-13.763c-0.019,-1.666 0,-153.25 0,-153.25l1998.16,-0.873l0,0.873Z'
                        fill='#ff6b79' fillOpacity='0.129' />
                        <path d='M3034.02,260.049c0.001,0.134 0.547,63.043 0,99.059c-18.741,-0.206 -303.87,-33.04 -413.199,-34.973c-209.947,-3.713 -293.621,25.815 -405.407,67.928c-128.258,48.319 -356.96,-7.183 -467.128,-32.955c-223.09,-52.188 -627.303,5.78 -712.186,0l-0.002,-0.023c-25.005,-0.998 -304.409,-33.041 -412.374,-34.95c-209.947,-3.713 -293.621,25.815 -405.407,67.928c-128.257,48.319 -356.96,-7.183 -467.128,-32.955c-223.09,-52.188 -627.302,5.78 -712.185,0c-6.575,-57.015 -0.014,-98.97 0,-99.059l3995.02,0Z'
                        fill='#ee7b83' />
                    </g>
                    <rect id="glow" x='40.945' y='35.488' width='1520.42' height='635.828' fill='url(#_LinearCustom1)' />
                    <rect id="shadow" x='40.945' y='35.488' width='1520.42' height='635.828' fill='url(#_LinearCustom2)' />
                </g>
                <circle id='Moon2' cx='269.61' cy='282.701' r='22.652' fill='url(#_Linear8)'
                />
                <circle id='Moon1' cx='391.445' cy='194.033' r='13.825' fill='url(#_Linear9)'
                />
            </g>
            <defs>
                <linearGradient id='_LinearCustom2' x2='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(170 601.474 459.683) scale(700.187)'>
                    <stop offset='0' stopColor='#000' stopOpacity="0.6" />
                    <stop offset='1' stopColor='#000' stopOpacity="0" />
                </linearGradient>
                <linearGradient id='_LinearCustom1' x2='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(50 341.474 459.683) scale(600.187)'>
                    <stop offset='0' stopColor='#efacb1' stopOpacity="1" />
                    <stop offset='1' stopColor='#efacb1' stopOpacity="0" />
                </linearGradient>
                <linearGradient id='_Linear3' x2='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 341.474 459.683) scale(534.187)'>
                    <stop offset='0' stopColor='#252d4f' />
                    <stop offset='1' stopColor='#4a5584' />
                </linearGradient>
                <radialGradient id='_Radial4' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse'
                gradientTransform='translate(800.126 1104.12) scale(919.99)'>
                    <stop offset='0' stopColor='#333858' />
                    <stop offset='0.65' stopColor='#3e3c5b' />
                    <stop offset='0.84' stopColor='#5b4664' />
                    <stop offset='1' stopColor='#7e526f' />
                </radialGradient>
                <linearGradient id='_Linear8' x2='1' gradientUnits='userSpaceOnUse' gradientTransform='scale(41.8076) rotate(39.986 -6.042 11.885)'>
                    <stop offset='0' stopColor='#795275' />
                    <stop offset='1' stopColor='#2d3a64' />
                </linearGradient>
                <linearGradient id='_Linear9' x2='1' gradientUnits='userSpaceOnUse' gradientTransform='scale(25.516) rotate(39.986 -2.753 24.526)'>
                    <stop offset='0' stopColor='#795275' />
                    <stop offset='1' stopColor='#2d3a64' />
                </linearGradient>
            </defs>
        </svg>
      </div>
    );
  }
}

export default SpaceButton;
