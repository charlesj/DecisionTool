import { paths } from './paths'

export const updateDecisionText = (currState, decisionText) => {
  return currState.setIn(paths.decisionText, decisionText)
}
