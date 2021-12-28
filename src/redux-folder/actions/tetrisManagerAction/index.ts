import {
  TRETRIS_STRING,
  TetrisManagerActionTypes,
  TetrisManagerType,
} from '@redux-folder/types/tetrisManagerType'

export const updateActiveBlockIndexes = (
  activeBlockIndexes: number[]
): TetrisManagerActionTypes =>
  <TetrisManagerActionTypes>{
    type: TRETRIS_STRING.UPDATE_ACTIVEBLOCKS,
    activeBlockIndexes,
  }

export const clearTetris =
  (): TetrisManagerActionTypes =>
    <TetrisManagerActionTypes>{
      type: TRETRIS_STRING.CLEAR,
    }
