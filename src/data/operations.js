import { updateDecisionText } from './updateDecisionText'
import * as factors from './factors'
import * as choices from './choices'

export const getOperations = (currentState, updateState) => {
  return {
    updateDecisionText: (decisionText) => updateState(updateDecisionText(currentState, decisionText)),
    addFactor: () => updateState(factors.addFactor(currentState)),
    updateFactorName: (factorId, name) => updateState(factors.updateFactorName(currentState, factorId, name)),
    updateFactorWeight: (factorId, weight) => updateState(factors.updateFactorWeight(currentState, factorId, weight)),
    removeFactor: (factorId) => updateState(factors.removeFactor(currentState, factorId)),
    addChoice: () => updateState(choices.addChoice(currentState)),
    updateChoiceName: (choiceId, name) => updateState(choices.updateChoiceName(currentState, choiceId, name)),
    updateChoiceFactorScore: (choiceId, factorId, score) => updateState(choices.updateFactorScore(currentState, choiceId, factorId, score)),
    removeChoice: (choiceId) => updateState(choices.removeChoice(currentState, choiceId))
  }
}
