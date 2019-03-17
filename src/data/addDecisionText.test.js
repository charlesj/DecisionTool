import { fromJS } from 'immutable'
import { addDecisionText } from './addDecisionText'

it('returns a new state map with the decision text in it', () => {
  const currentState = fromJS({})
  const decisionText = 'here is my new decision text'
  expect(addDecisionText(currentState, decisionText)).toMatchSnapshot()
})
