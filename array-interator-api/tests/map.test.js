import {map} from './map'


describe('caminho feliz do map', ()=> {
  it('map should be a function', ()=>{
    expect(map).toBeInstanceOf(Function)
  })
  
  it('map([1,2], (item) => item) should return [1,2]', () => {
    expect(map([1, 2], (item) => item)).toStrictEqual([1, 2])
  })
  
  it('map([3,4], (item) => item) should return [3,4]', () => {
    expect(map([3, 4], (item) => item)).toStrictEqual([3, 4])
  })
  
  it('map([1,2], (item) => item + 1) should return [2,3]', () => {
    expect(map([1, 2], (item) => item+1)).toStrictEqual([2, 3])
  })
  
  it('map([4,6], (item) => item + 1) should return [5,7]', () => {
    expect(map([4, 6], (item) => item+1)).toStrictEqual([5, 7])
  })
  
  it('map([1, 2], (item, index) => index) should return [0,1]', () => {
    expect(map([1, 2], (item, index) => index)).toStrictEqual([0, 1])
  })
  
  it('map([1, 2], (item, index, arr) => arr) should return [[1,2], [1,2]]', () => {
    expect(map([1, 2], (item, index, arr) => arr)).toStrictEqual([[1, 2],[1, 2]])
  })
})

describe('caminho nao feliz do map', () =>{
  
  it('map() should return []', ()=> {
    expect(map()).toStrictEqual([])
  })
  it('map([1,2] should return [1,2]', () => {
    expect(map([1,2])).toStrictEqual([1,2])
  })
})

