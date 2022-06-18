import React        from 'react'

import { useColor } from '@store/color'
import { useValue } from '@store/value'

const Control = () => {
  const [value, setValue] = useValue()
  const [, setColor] = useColor()

  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        left: 0,
        top: 0,
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <input placeholder='value' value={value} onChange={event => setValue(event.target.value)} />
      <button type='button' onClick={() => setColor('red')}>
        red
      </button>
      <button type='button' onClick={() => setColor('green')}>
        green
      </button>
      <button type='button' onClick={() => setColor('blue')}>
        blue
      </button>
    </div>
  )
}

export default Control
