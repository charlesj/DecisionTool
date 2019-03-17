import React from 'react'
import Flexbox from 'flexbox-react'
import { scoreDecision } from './data/scoreDecision'

export const Scores = ({ decision }) => {
  const scores = scoreDecision(decision)
  console.log('scores', scores)
  return (
    <Flexbox flexDirection='column'>
      <h2>4. Analysis</h2>
      <h3>Winner: <u>{scores.winner}</u></h3>
      {scores.scores.map(s => (
        <Flexbox
          key={s.name}
          flexDirection='row'
          justifyContent='space-between'
        >
          <span>{s.name}</span>
          <span>{s.totalScore}</span>
        </Flexbox>))}
    </Flexbox>
  )
}
