import React from 'react'
import { Map } from 'immutable'
import Flexbox from 'flexbox-react'
import { paths } from './data/paths'
import { Choice } from './Choice'

export const Choices = ({ decision, operations }) => {
  const choices = decision.getIn(paths.chocies, Map()).toList()

  return (
    <Flexbox flexDirection='column'>
      <h2>3. Enter your choices</h2>
      <button onClick={() => operations.addChoice()}>Add Choice</button>
      <Flexbox
        flexDirection='row'
        style={{ overflowX: 'scroll' }}
      >
        {choices.map(c => <Choice
          key={c.get('choiceId')}
          choice={c}
          decision={decision}
          operations={operations}
        />)}
      </Flexbox>
    </Flexbox>
  )
}
