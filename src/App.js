import React, { useState } from 'react'
import Flexbox from 'flexbox-react'
import { getInitialState } from './data/decision'
import { getOperations } from './data/operations'
import { paths } from './data/paths'

export const App = () => {
  const [decision, updateDecision] = useState(getInitialState())
  const operations = getOperations(decision, updateDecision)
  console.log('decision', decision.toJS())
  return (<Flexbox flexDirection='column'>
    <h1>Decision Tool</h1>
    <h2>1. Enter the decision you want to make</h2>
    <textarea value={decision.getIn(paths.decisionText, '')} onChange={(e) => operations.updateDecisionText(e.target.value)} />
  </Flexbox>)
}
