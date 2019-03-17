import { paths } from './paths'

export const addDecisionText = (currState, decisionText) => {
  return currState.setIn(paths.decisionText, decisionText)
}
