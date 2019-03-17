import React from 'react'
import Flexbox from 'flexbox-react'
import { paths } from './data/paths'

export const DecisionText = ({ decision, operations }) => {

  return (
    <Flexbox flexDirection='column'>
      <h2>1. Enter the decision you want to make</h2>
      <textarea
        value={decision.getIn(paths.decisionText, '')}
        onChange={(e) => operations.updateDecisionText(e.target.value)}
      />
    </Flexbox>
  )
}
