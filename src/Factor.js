import React from 'react'
import Flexbox from 'flexbox-react'

export const Factor = ({ factor, decision, operations }) => {
  const factorId = factor.get('factorId')
  const changeName = (e) => operations.updateFactorName(factorId, e.target.value)
  const changeWeight = (e) => operations.updateFactorWeight(factorId, e.target.value)
  return (<Flexbox flexDirection='row'>
    <input
      type='text'
      value={factor.get('name', '')}
      onChange={changeName}
    />
    <strong>Weight:</strong>
    <input
      type='text'
      value={factor.get('weight', '')}
      onChange={changeWeight}
    />
    <button onClick={() => operations.removeFactor(factorId)}>Remove</button>
  </Flexbox>)
}
