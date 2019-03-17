import { fromJS } from 'immutable'
import { updateDecisionText } from './updateDecisionText'

it('returns a new state map with the decision text in it', () => {
  const currentState = fromJS({})
  const decisionText = 'here is my new decision text'
  expect(updateDecisionText(currentState, decisionText)).toMatchSnapshot()
})
