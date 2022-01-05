// export const defaultBlocks: Array<number[]> = [
//   [101, 102, 103, 104],
//   [102, 121, 122, 123],
//   [101, 121, 122, 123],
//   [101, 102, 121, 122],
//   [101, 102, 122, 123],
// ]

export const defaultBlocks: Array<number[]> = [
  [1, 2, 3, 4],
  [2, 21, 22, 23],
  [1, 21, 22, 23],
  [3, 21, 22, 23], // anther way [1, 21, 22, 23]
  [1, 2, 21, 22],
  [1, 2, 22, 23],
  [2, 3, 21, 22], // anther way [1, 2, 22, 23]
]

//  [1, 2, 3, 4]
const temp1 = [
  [0, 1, 2, 3], //H
  [0, 20, 40, 60], //V
]

//  [2, 21, 22, 23]
const temp2 = [
  [0, 19, 20, 21], //H
  [0, 19, 20, 40], //V, L
  [0, 20, 21, 40], //V, R
]

//  [1, 21, 22, 23]
const temp3 = [
  [0, 20, 21, 22], //H
  [0, 19, 20, 40], //V, L
  [0, 20, 21, 40], //V, R
]
