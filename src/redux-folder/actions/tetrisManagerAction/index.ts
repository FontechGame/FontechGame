import {
  TRETRIS_STRING,
  TetrisManagerActionTypes,
  TetrisManagerType,
} from '@redux-folder/types/tetrisManagerType'

export const updateCurrentBlock = (
  currentBlockIndexes: number[]
): TetrisManagerActionTypes =>
  <TetrisManagerActionTypes>{
    type: TRETRIS_STRING.UPDATE_CURRENT,
    currentBlockIndexes,
  }

export const updateReminderBlock = (
  reminderBlockIndexes: number[]
): TetrisManagerActionTypes =>
  <TetrisManagerActionTypes>{
    type: TRETRIS_STRING.UPDATE_REMINDER,
    reminderBlockIndexes,
  }

export const clearTetris =
  (): TetrisManagerActionTypes =>
    <TetrisManagerActionTypes>{
      type: TRETRIS_STRING.CLEAR,
    }
