import { Map, fromJS } from 'immutable'

const localStorageKey = 'decisionData'

export const getInitialState = () => {
  const local = window.localStorage.getItem(localStorageKey)

  if (!local || local === '') {
    return Map()
  }
  return fromJS(JSON.parse(local))
}

export const saveState = (state) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(state.toJS()))
  return state
}

export const resetState = () => {
  window.localStorage.setItem(localStorageKey, '')
}
