import React, { useState } from 'react'
import Flexbox from 'flexbox-react'
import { getInitialState, saveState, resetState } from './data/decision'
import { getOperations } from './data/operations'

import { DecisionText } from './DecisionText'
import { Factors } from './Factors'
import { Choices } from './Choices'
import { Scores } from './Scores'

export const App = () => {
  const [decision, updateDecision] = useState(getInitialState())
  const update = (updatedState) => {
    saveState(updatedState)
    updateDecision(updatedState)
  }
  const operations = getOperations(decision, update)

  return (<Flexbox flexDirection='column'>
    <h1>Decision Tool</h1>
    <button onClick={resetState}>Reset</button>
    <DecisionText decision={decision} operations={operations} />
    <Factors decision={decision} operations={operations} />
    <Choices decision={decision} operations={operations} />
    <Scores decision={decision} />
  </Flexbox>)
}
