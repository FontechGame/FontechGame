import {
  TRETRIS_STRING,
  TetrisManagerActionTypes,
  TetrisManagerType,
} from '@redux-folder/types/tetrisManagerType'

export const updateIsLose = (
  isLose: boolean
): TetrisManagerActionTypes =>
  <TetrisManagerActionTypes>{
    type: TRETRIS_STRING.UPDATE_ISLOSE,
    isLose,
  }

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

export const reminderDeleteLines =
  (): TetrisManagerActionTypes =>
    <TetrisManagerActionTypes>{
      type: TRETRIS_STRING.REMINDER_DELETE_LINES,
    }

export const clearTetris =
  (): TetrisManagerActionTypes =>
    <TetrisManagerActionTypes>{
      type: TRETRIS_STRING.CLEAR,
    }
