import React, { useState } from 'react'

import { Control }         from '@react-context/control'
import { View }            from '@react-context/view'
import { ColorProvider }   from '@store/color'
import { ValueProvider }   from '@store/value'

const App = () => {
  const [value, setValue] = useState<string>('')
  const [color, setColor] = useState<'grey' | 'red' | 'green' | 'blue'>('grey')

  return (
    <ColorProvider value={[color, setColor]}>
      <ValueProvider value={[value, setValue]}>
        <Control />
        <View />
      </ValueProvider>
    </ColorProvider>
  )
}

export default App
