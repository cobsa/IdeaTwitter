import * as actions from '../categoryActions'
import * as constants from '../categoryConstants'

test('Should return valid get action', () => {
  expect(actions.getCategories()).toEqual({
    type: constants.getCategories
  })
})

test('Should return valid set action', () => {
  expect(actions.setCategory('something', 'name')).toEqual({
    type: constants.setCategory,
    payload: {
      id: 'something',
      name: 'name'
    }
  })
})
