import React        from 'react'

import { useColor } from '@store/color'
import { useValue } from '@store/value'

const View = () => {
  const [value] = useValue()
  const [color] = useColor()

  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        right: 0,
        top: 0,
        width: '50%',
        height: '100%',
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Value is {value}</h1>
      <h1>Color is {color}</h1>
    </div>
  )
}

export default View
