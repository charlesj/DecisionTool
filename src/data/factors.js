import { fromJS } from 'immutable'
import shortid from 'shortid'
import { paths } from './paths'

export const addFactor = (state) => {
  const factorId = shortid()
  return state.setIn(paths.factor(factorId), fromJS({ factorId, name: `factor ${factorId}` }))
}

export const updateFactorName = (state, factorId, name) => {
  return state.setIn([...paths.factor(factorId), 'name'], name)
}

export const updateFactorWeight = (state, factorId, weight) => {
  return state.setIn([...paths.factor(factorId), 'weight'], weight)
}

export const removeFactor = (state, factorId) => {
  return state.deleteIn(paths.factor(factorId))
}
