import {filter} from './filter'

it('filter should be a func', ()=>{
  expect(filter).toBeInstanceOf(Function)
})

it('filter([1, 2, 3], (item) => item) should return [1,2,3]', () => {
  expect(filter([1, 2, 3], (item) => item)).toStrictEqual([1,2,3])
})

it('filter([0, 1, 2], (item) => item) should return [1,2]', () => {
  expect(filter([0, 1, 2], (item) => item)).toStrictEqual([1,2])
})

it('filter([0, 1, 2], (item) => item < 2) should return [1,2]', () => {
  expect(filter([0, 1, 2], (item) => item < 2)).toStrictEqual([0, 1])
})

it('filter([1, 2, 3, 5], (item, index) => item === index + 1) should return [1,2,3]', () => {
  expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).toStrictEqual([1, 2, 3])
})

// filtar itens repetidos
it('filter([1, 2, 3, 2, 1, 5], (item, index, arr) => index === arr.indexOf(item)) should return [1,2,3,5]', () => {
  const before = filter([1,2,3,2,1,5], (item, index, arr) => index === arr.indexOf(item))
  expect(before).toStrictEqual([1, 2, 3, 5])
})