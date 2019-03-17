import { fromJS } from 'immutable'
import shortid from 'shortid'
import {
  addChoice,
  updateChoiceName,
  updateFactorScore,
  removeChoice,
} from './choices'

jest.mock('shortid')

const initState = fromJS({})

let id = 0

beforeEach(() => {
  shortid.mockImplementation(() => `id-${id++}`)
})

describe('addChoice', () => {

  it('adds the choice to the state', () => {
    expect(addChoice(initState)).toMatchSnapshot()
  })
})

describe('updateChoiceName', () => {
  it('updates the name of the choice given', () => {
    const choiceId = 'choice-id-1'
    const state = fromJS({
      choices: {
        [choiceId]: { name: 'old name' }
      }
    })

    expect(updateChoiceName(state, choiceId, 'new name')).toMatchSnapshot()
  })
})

describe('updateFactorScore', () => {
  it('updates the score for a given choice and factor', () => {

    const choiceId = 'choice-id-1'
    const state = fromJS({
      choices: {
        [choiceId]: { name: 'old name' }
      }
    })
    expect(updateFactorScore(state, choiceId, 'factor-id-1', 2)).toMatchSnapshot()
  })
})

describe('removeChoice', () => {
  it('removes the given choice', () => {
    const choiceId = 'choice-id-1'
    const state = fromJS({
      choices: {
        [choiceId]: { name: 'old name' },
        choice2: { name: 'this choice stays' }
      }
    })
    expect(removeChoice(state, choiceId)).toMatchSnapshot()
  })
})
