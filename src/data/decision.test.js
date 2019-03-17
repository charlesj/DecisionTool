import { getInitialState } from './decision'

it("gives the expected initial state", () => {
  expect(getInitialState()).toMatchSnapshot()
})
