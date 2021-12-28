export type TetrisManagerType = {
  count: number
  reminderBlockIndexes: number[]
  currentBlockIndexes: number[]
}

export enum TRETRIS_STRING {
  UPDATE_REMINDER = 'UPDATE_REMINDER',
  UPDATE_CURRENT = 'UPDATE_CURRENT',
  CLEAR = 'CLEAR',
}

interface TetrisManagerBaseActionType {
  type: TRETRIS_STRING
}

interface TetrisManagerUpdateReminderActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.UPDATE_REMINDER
  reminderBlockIndexes: number[]
}

interface TetrisManagerUpdateCurrentActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.UPDATE_CURRENT
  currentBlockIndexes: number[]
}

interface TetrisManagerClearActionType
  extends TetrisManagerBaseActionType {
  type: TRETRIS_STRING.CLEAR
}

export type TetrisManagerActionTypes =
  | TetrisManagerUpdateReminderActionType
  | TetrisManagerUpdateCurrentActionType
  | TetrisManagerClearActionType
