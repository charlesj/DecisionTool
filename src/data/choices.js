import { fromJS } from 'immutable'
import shortid from 'shortid'
import { paths } from './paths'

export const addChoice = (state) => {
  const choiceId = shortid()
  return state.setIn(paths.choice(choiceId), fromJS({ name: `choice ${choiceId}` }))
}

export const updateChoiceName = (state, choiceId, name) => {
  return state.setIn([...paths.choice(choiceId), 'name'], name)
}

export const updateFactorScore = (state, choiceId, factorId, score) => {
  return state.setIn(paths.choiceFactorScore(choiceId, factorId), score)
}

export const removeChoice = (state, choiceId) => {
  return state.deleteIn(paths.choice(choiceId))
}
