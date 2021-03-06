import React from 'react'
import cx from 'classnames'
import SVGEmbeddedStyle from '../shared/SVGEmbeddedStyle'

/*
 * hard to find the law of google style circular loading
 * set 50 x 50 as basic viewbox size. scale viewbox when use.
 *
 * from: https://codepen.io/jczimm/pen/vEBpoL
 */

const CIRCLE_RADIUS = 50 / 2

const CircularLoading = ({className, duration, stroke, strokeWidth, linecap, size, ...rest}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      viewBox={`0 0 ${CIRCLE_RADIUS * 2} ${CIRCLE_RADIUS * 2}`}
      className={cx('CircularLoading', className)}
      width={size}
      height={size}
      style={{
        animation: 'Rotate linear infinite',
        animationDuration: `${duration * 4 / 3}s`
      }}
    >
      <SVGEmbeddedStyle>
        {`
          @keyframes Rotate { 100% { transform: rotate(360deg); } }

          @keyframes CircularBarDash {
            0% {
             stroke-dasharray: 1, 200;
             stroke-dashoffset: 0;
           }
           50% {
             stroke-dasharray: 89, 200;
             stroke-dashoffset: -35;
           }
           100% {
             stroke-dasharray: 89, 200;
             stroke-dashoffset: -124;
           }
          }
        `}
      </SVGEmbeddedStyle>
      <circle
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={linecap}
        cx={CIRCLE_RADIUS}
        cy={CIRCLE_RADIUS}
        r={CIRCLE_RADIUS - strokeWidth}
        style={{
          transformOrigin: 'center',
          animation: `CircularBarDash ${duration}s infinite`,
        }}
      />
    </svg>
  )
}

CircularLoading.defaultProps = {
  size: 40,
  strokeWidth: 5,
  linecap: 'round',
  duration: 1,
}

export default CircularLoading
