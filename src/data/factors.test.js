import { fromJS } from 'immutable'
import shortid from 'shortid'
import {
  addFactor,
  updateFactorName,
  updateFactorWeight,
  removeFactor,
} from './factors'

jest.mock('shortid')

const initState = fromJS({})

let id = 0

beforeEach(() => {
  shortid.mockImplementation(() => `id-${id++}`)
})

describe('addFactor', () => {

  it('adds the factor to the state', () => {
    expect(addFactor(initState)).toMatchSnapshot()
  })
})

describe('updateFactorName', () => {
  it('updates the name of the factor given', () => {
    const factorId = 'factor-id-1'
    const state = fromJS({
      factors: {
        [factorId]: { name: 'old name' }
      }
    })

    expect(updateFactorName(state, factorId, 'new name')).toMatchSnapshot()
  })
})

describe('updateFactorWeight', () => {
  it('updates the weight of the factor', () => {
    const factorId = 'factor-id-1'
    const state = fromJS({
      factors: {
        [factorId]: { name: 'old name' }
      }
    })

    expect(updateFactorWeight(state, factorId, '3')).toMatchSnapshot()
  })
})

describe('removeFactor', () => {
  it('removes the given factor', () => {
    const factorId = 'factor-id-1'
    const state = fromJS({
      factors: {
        [factorId]: { name: 'old name' },
        factor2: { name: 'this factor stays' }
      }
    })
    expect(removeFactor(state, factorId)).toMatchSnapshot()
  })
})
