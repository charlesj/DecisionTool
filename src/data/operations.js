import { addDecisionText } from './addDecisionText'

export const getOperations = (currentState, updateState) => {
  return {
    addDecisionText: (decisionText) => updateState(addDecisionText(currentState, decisionText))
  }
}
