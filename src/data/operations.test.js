import { fromJS } from 'immutable'
import { addDecisionText } from './addDecisionText'
import { getOperations } from './operations'


const updateState = jest.fn()
const initState = fromJS({})


test('getOperations includes addDecisionText', () => {
  const ops = getOperations(initState, updateState)
  ops.addDecisionText('new decision text')
  expect(updateState).toHaveBeenCalledTimes(1)
  expect(updateState.mock.calls[0]).toMatchSnapshot()
})
