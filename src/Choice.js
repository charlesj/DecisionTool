import React from 'react'
import { Map } from 'immutable'
import Flexbox from 'flexbox-react'
import { paths } from './data/paths'

export const Choice = ({ choice, decision, operations }) => {
  const choiceId = choice.get('choiceId')
  const updateName = (e) => operations.updateChoiceName(choiceId, e.target.value)
  const factors = decision.getIn(paths.factors, Map()).toList()

  return (<Flexbox flexDirection='column' style={{ padding: '10px' }}>
    <input
      value={choice.get('name', '')}
      onChange={updateName}
    />
    {factors.map(factor => {
      const factorId = factor.get('factorId')
      const updateFactorScore = (e) => operations.updateChoiceFactorScore(choiceId, factorId, e.target.value)
      return (<Flexbox
        key={`${choiceId}-${factorId}`}
        flexDirection='row'
        flex='1'
        justifyContent='space-between'
      >
        <strong>{factor.get('name')}</strong>
        <input
          value={decision.getIn(paths.choiceFactorScore(choiceId, factorId), '')}
          onChange={updateFactorScore}
          style={{ width: '25px' }}
        />
      </Flexbox>)
    })}
    <button onClick={() => operations.removeChoice(choiceId)}>
      Remove
    </button>
  </Flexbox>)
}
