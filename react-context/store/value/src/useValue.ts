import { useContext } from 'react'

import { Context }    from './Context'

export const useValue = () => useContext(Context)
