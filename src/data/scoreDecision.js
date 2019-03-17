import { Map, fromJS } from 'immutable'
import { paths } from './paths'

export const scoreDecision = (decision) => {
  const factors = decision.getIn(paths.factors, Map()).toList()
  const choices = decision.getIn(paths.chocies, Map()).toList()

  const scores = choices.map((choice) => {
    const name = choice.get('name')
    const totalScore = factors.reduce((total, factor) => {
      const factorWeight = factor.get('weight', '0')
      const choiceScore = choice.getIn(['scores', factor.get('factorId')], '0')
      return total + parseInt(factorWeight, 10) * parseInt(choiceScore, 10)
    }, 0)
    return fromJS({ name, totalScore })
  }).sortBy(s => s.get('totalScore')).reverse().toJS()

  return {
    winner: scores[0].name,
    scores,
  }
}
