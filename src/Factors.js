import React from 'react'
import { Map } from 'immutable'
import Flexbox from 'flexbox-react'
import { paths } from './data/paths'
import { Factor } from './Factor'

export const Factors = ({ decision, operations }) => {
  const factors = decision.getIn(paths.factors, Map()).toList()
  console.log('factors', factors)
  return (<Flexbox flexDirection='column'>
    <h2>2. Enter the factors you are considering in your decision making</h2>
    <button onClick={operations.addFactor}>Add Factor</button>
    {factors.map(f => (
      <Factor
        key={f.get('factorId')}
        factor={f}
        decision={decision}
        operations={operations}
      />))}
  </Flexbox>)
}
