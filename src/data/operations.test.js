import { fromJS } from 'immutable'
import { updateDecisionText } from './updateDecisionText'
import * as factors from './factors'
import * as choices from './choices'
import { getOperations } from './operations'

jest.mock('./factors')
jest.mock('./choices')
jest.mock('./updateDecisionText')

const updateState = jest.fn()
const initState = fromJS({})

const mop = (op, opName) => op.mockImplementation((state, ...rest) => state.setIn([opName], fromJS(rest)))

let ops
beforeEach(() => {
  mop(updateDecisionText, 'updateDecisionText')
  mop(factors.addFactor, 'addFactor')
  mop(factors.removeFactor, 'removefactor')
  mop(factors.updateFactorName, 'update factor name')
  mop(factors.updateFactorWeight, 'factor weight')
  mop(choices.addChoice, 'add choice')
  mop(choices.updateChoiceName, 'update choice name')
  mop(choices.updateFactorScore, 'choice factor score')
  mop(choices.removeChoice, 'remove choice')
  ops = getOperations(initState, updateState)
})

test('getOperations includes updateDecisionText', () => {
  ops.updateDecisionText('new decision text')
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('add factor', () => {
  ops.addFactor()
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('remove factor', () => {
  ops.removeFactor('factor id')
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('update factor name', () => {
  ops.updateFactorName('factorId', 'factor name')
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('update factor weight', () => {
  ops.updateFactorWeight('factorId', 'factor weight')
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('add choice', () => {
  ops.addChoice()
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('update choice name', () => {
  ops.updateChoiceName('choice-id', 'new name')
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('update choice factor score', () => {
  ops.updateChoiceFactorScore('choice-id', 'factor-id', 'score')
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})

test('remove choice', () => {
  ops.removeChoice('choice-id')
  expect(updateState.mock.calls[0][0]).toMatchSnapshot()
})
