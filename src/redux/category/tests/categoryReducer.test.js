import categoryReducer from '../categoryReducer'
import * as actions from '../categoryActions'

test('Should return initial state', () => {
  expect(categoryReducer(undefined, {})).toEqual({
    categories: [],
    activeCategory: null
  })
})

test('Should add category to storage', () => {
  expect(categoryReducer(undefined, actions.setCategory('id-string', 'name'))).toEqual({
    categories: ['name'],
    activeCategory: null
  })
})
